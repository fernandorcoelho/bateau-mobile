module.exports = function (api) {
  api.cache(true);

  const presets = ['babel-preset-expo'];

  const alias = {
    '@screens': './src/screens',
    '@components': './src/components',
    '@assets': './src/assets'
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
