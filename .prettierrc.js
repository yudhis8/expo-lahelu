module.exports = {
  bracketSpacing: false,
  jsxBracketSameLine: true,
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'avoid',
  printWidth: 120,
  overrides: [
    {files: '*.js', options: {parser: 'typescript'}},
    {files: '*.prettierrc', options: {parser: 'json'}},
    {files: '*.eslintrc', options: {parser: 'json'}},
    {files: '*.svgrrc', options: {parser: 'json'}},
    {files: '*.xml', options: {parser: 'html'}},
    {files: '*.plist', options: {parser: 'html'}},
  ],
};
