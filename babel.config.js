module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: '.',
        alias: {
          '@hooks': './src/hooks',
          '@utils': './src/utils',
          '@types': './src/types',
          '@routes': './src/routes',
          '@styles': './src/styles',
          '@assets': './src/assets',
          '@themes': './src/themes',
          '@screens': './src/screens',
          '@services': './src/services',
          '@components': './src/components',
          '@interfaces': './src/interfaces',
        },
      },
    ],
  ],
};
