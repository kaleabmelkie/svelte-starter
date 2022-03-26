module.exports = {
  singleQuote: true,
  semi: false,
  printWidth: 80,
  svelteSortOrder: 'options-scripts-markup-styles',
  overrides: [
    {
      files: ['*.svelte', '*.html'],
      options: {
        printWidth: 120,
      },
    },
    {
      files: [
        '*.json',
        'postcss.config.js',
        'rollup.config.js',
        'tailwind.config.js',
        'stylelint.config.js',
      ],
      options: {
        printWidth: 150,
      },
    },
    {
      files: ['*.json'],
      options: {
        parser: 'json',
      },
    },
  ],
}
