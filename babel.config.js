module.exports = {
  plugins: [
    '@babel/plugin-transform-runtime',
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./src/'],
        alias: {
          src: './src',
          js: './src/js',
          components: './src/js/components',
          containers: './src/js/containers',
          enums: './src/js/enums',
          services: './src/js/services',
          images: './src/assets/images',
          json: './src/assets/json',
          mocks: './__mocks__',
        },
      },
    ],
  ],
  presets: [
    [
      '@babel/preset-env',
      {
        targets: '> 0.25%, ie >= 11',
      },
    ],
    '@babel/preset-react',
  ],
};
