/* eslint-disable unicorn/prefer-module */
const fs = require('fs');
const path = require('path');
const ts = require('typescript');
const lzstring = require('lz-string');

// ----------------------------------------------------------------------------

const entryFile = path.resolve(__dirname, '../../index.d.ts');
const sourceDirectory = path.resolve(__dirname, '../../source');
const sourceFileNames = fs.readdirSync(sourceDirectory).map(fileName =>
	path.resolve(sourceDirectory, fileName).replace(/\\/g, '/'),
	).filter(fileName => fileName.endsWith('.d.ts'));
	
const readmeTemplateTag = 'TYPE_FEST_API_CODGEN';
const readmeFile = path.resolve(__dirname, '../../readme.md');
const readmeTemplateFile = path.resolve(__dirname, './template/readme.md');

// ----------------------------------------------------------------------------

const program = ts.createProgram([entryFile, ...sourceFileNames], {});
const typeChecker = program.getTypeChecker();

// ----------------------------------------------------------------------------

const entryModuleInfo = getModuleInfo(entryFile);
const typeCategories = new Map();

for (const sourceFileName of sourceFileNames) {
	// Console.log(`> file: ${sourceFileName}`);
	const sourceModuleInfo = getModuleInfo(sourceFileName);

	for (const symbol of sourceModuleInfo.exportedSymbols) {
		const symbolName = symbol.escapedName;

		if (!entryModuleInfo.exportedSymbolNames.includes(symbolName)) {
			continue;
		}

		const documentationComment = symbol.getDocumentationComment();
		const documentationCommentString = ts.displayPartsToString(documentationComment);

		let [summary, ...description] = documentationCommentString.split('\n');
		description = description.join('\n').trim();

		const tags = symbol.getJsDocTags();
		const examples = findTagsByName(tags, 'example');
		const prout = {name: symbolName, summary, description, tags, examples};

		// Grab all categories
		const categoryNames = findTagsByName(tags, 'category');

		for (const categoryName of categoryNames) {
			if (typeCategories.has(categoryName)) {
				typeCategories.get(categoryName).add(prout);
			} else {
				typeCategories.set(categoryName, new Set([prout]));
			}
		}

		// Linting
		const deprecated = findTagsByName(tags, 'deprecated');

		if (deprecated.length === 0 && categoryNames.length === 0) {
			console.warn(`[warning] Missing category for ${symbolName} in ./source/${path.basename(sourceFileName)}`);
		}

		if (deprecated.length === 0 && summary.length === 0) {
			console.warn(`[warning] Missing summary for ${symbolName} in ./source/${path.basename(sourceFileName)}`);
		}
	}
}

// ----------------------------------------------------------------------------

let markdownDocs = '**Categories:**\n\n';

const sortedCategories = [...typeCategories.entries()].sort()

for (const [categoryName, types] of sortedCategories) {
	markdownDocs += `- [${categoryName}](#${categoryName.toLowerCase().replace(' ', '-')}) (${types.size})\n`;
}

markdownDocs += `\n`;

for (const [categoryName, types] of sortedCategories) {
	markdownDocs += `### ${categoryName}\n\n`;

	for (const {name, summary, examples} of types) {
		markdownDocs += `- \`${name}\` - ${summary}\n\n`;
		markdownDocs += `	[source](source/${name}.d.ts)`;

		for (const [index, example] of examples.entries()) {
			const source = example.replace(/^`+|`+$/g, '').trim();
			const code = lzstring.compressToEncodedURIComponent(source);
			const link = `https://www.typescriptlang.org/play?#code/${code}`;
			markdownDocs += ` | [example${examples.length > 1 ? index + 1 : ''}](${link})`;
		}

		markdownDocs += '\n\n';
	}
}

// ----------------------------------------------------------------------------

const readmeTemplate = fs.readFileSync(readmeTemplateFile, 'utf8');
fs.writeFileSync(readmeFile, readmeTemplate.replace(`{{${readmeTemplateTag}}}`, markdownDocs));

// ----------------------------------------------------------------------------

function findTagsByName(tags, name) {
	return tags.filter(tag => tag.name === name).map(tag => ts.displayPartsToString(tag.text));
}

function getModuleInfo(fileName) {
	const sourceFile = program.getSourceFile(fileName);
	const moduleSymbol = typeChecker.getSymbolAtLocation(sourceFile);
	const exportedSymbols = typeChecker.getExportsOfModule(moduleSymbol);
	const exportedSymbolNames = exportedSymbols.map(symbol => symbol.escapedName);

	return {sourceFile, moduleSymbol, exportedSymbols, exportedSymbolNames};
}
