/* eslint-disable unicorn/prefer-module */
const fs = require('fs');
const zlib = require('zlib');
const path = require('path');
const {Buffer} = require('buffer');
const ts = require('typescript');

// ----------------------------------------------------------------------------

const outputFile = path.resolve(__dirname, '../../docs.md');
const entryFile = path.resolve(__dirname, '../../index.d.ts');
const sourceDirectory = path.resolve(__dirname, '../../source');
const sourceFileNames = fs.readdirSync(sourceDirectory).map(fileName =>
	path.resolve(sourceDirectory, fileName).replace(/\\/g, '/'),
).filter(fileName => fileName.endsWith('.d.ts'));

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

let markdownDocs = '# API\n\n';

for (const [categoryName, types] of [...typeCategories.entries()].sort()) {
	markdownDocs += `## ${categoryName}\n\n`;

	for (const {name, summary, examples} of types) {
		markdownDocs += `- \`${name}\` - ${summary}\n\n`;
		markdownDocs += `	[source](source/${name}.d.ts)`;

		for (const [index, example] of examples.entries()) {
			const source = example.replace(/^`+|`+$/g, '').trim();
			console.log(source);
			console.log('-------------------------');
			const code = zlib.inflateSync('export {};').toString('base64');
			markdownDocs += ` | [example${examples.length > 1 ? index + 1 : ''}](https://www.typescriptlang.org/play?#code/${code})`;
		}

		markdownDocs += '\n\n';
	}
}

// Console.log(markdownDocs);
fs.writeFileSync(outputFile, markdownDocs);

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
