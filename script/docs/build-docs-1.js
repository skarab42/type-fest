/* eslint-disable unicorn/prefer-module */
const fs = require('fs');
const path = require('path');
const ts = require('typescript');

const outputFile = path.resolve(__dirname, '../../docs.md');
const entryFile = path.resolve(__dirname, '../../index.d.ts');
const sourceDirectory = path.resolve(__dirname, '../../source');
const sourceFileNames = fs.readdirSync(sourceDirectory).map(fileName =>
	path.resolve(sourceDirectory, fileName).replace(/\\/g, '/'),
).filter(fileName => fileName.endsWith('.d.ts'));

const program = ts.createProgram([entryFile, ...sourceFileNames], {});
const typeChecker = program.getTypeChecker();

const entryModuleInfo = getModuleInfo(entryFile);

// Let markdownDocs = '| Type | Summary |\n';
// markdownDocs += '| --- | --- |\n';

for (const sourceFileName of sourceFileNames) {
	// Console.log(`> file: ${sourceFileName}`);
	const sourceModuleInfo = getModuleInfo(sourceFileName);

	for (const symbol of sourceModuleInfo.exportedSymbols) {
		if (!entryModuleInfo.exportedSymbolNames.includes(symbol.escapedName)) {
			continue;
		}

		const documentationComment = symbol.getDocumentationComment();
		const documentationCommentString = ts.displayPartsToString(documentationComment);
		let [summary, ...description] = documentationCommentString.split('\n');
		description = description.join('\n').trim();
		const tags = symbol.getJsDocTags();
		const type = symbol.escapedName;

		// // Console.log({type, summary, description, tags});
		// markdownDocs += `| [${type}](source/${type}.d.ts) | ${summary} |\n`;

		// if (description.length > 0) {
		// 	// MarkdownDocs += `| ${description} |\n`;
		// 	markdownDocs += '<details>\n';
		// 	markdownDocs += '	<summary>Description</summary>\n';
		// 	markdownDocs += `	${description}\n\n`;
		// 	markdownDocs += '</details>\n\n';
		// }

		// MarkdownDocs += `## \`${type}\`\n\n`;
		// markdownDocs += `${summary}\n\n`;

		// markdownDocs += '<details>\n';
		// markdownDocs += '	<summary>Documentation</summary>\n';
		// markdownDocs += `	${description}\n\n`;
		// markdownDocs += '</details>\n\n';
	}
}

// MarkdownDocs += '</table>';

// console.log(markdownDocs);
// fs.writeFileSync(outputFile, markdownDocs);

function getModuleInfo(fileName) {
	const sourceFile = program.getSourceFile(fileName);
	const moduleSymbol = typeChecker.getSymbolAtLocation(sourceFile);
	const exportedSymbols = typeChecker.getExportsOfModule(moduleSymbol);
	const exportedSymbolNames = exportedSymbols.map(symbol => symbol.escapedName);

	return {sourceFile, moduleSymbol, exportedSymbols, exportedSymbolNames};
}
