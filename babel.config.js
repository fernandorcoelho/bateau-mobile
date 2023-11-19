module.exports = function (api) {
  api.cache(true);

  const presets = ['babel-preset-expo'];

  const alias = {
    '@screens': './src/screens',
    '@components': './src/components',
    '@assets': './src/assets',
    '@services': './src/services',
    '@utils': './src/utils',
    '@contexts': './src/contexts',
    '@dtos': './src/dtos',
    '@storage': './src/storage',
    '@routes': './src/routes',
    '@hooks': './src/hooks'
  };

  const plugins = [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias
      }
    ],
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env',
        allowUndefined: false
      }
    ]
  ];

  return {
    presets,
    plugins
  };
};
