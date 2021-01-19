module.exports = {
  semi: true,
  printWidth: 120,
  tabWidth: 2,
  jsxSingleQuote: true,
  singleQuote: true,
  packageManager: 'yarn',
  trailingComma: 'es5',
  requireConfig: true,

  overrides: [
    {
      files: 'scss',
      options: {
        singleQuote: false,
      },
    },
  ],
};
