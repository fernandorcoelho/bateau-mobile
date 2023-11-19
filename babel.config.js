module.exports = function (api) {
  api.cache(true);

  const presets = ['babel-preset-expo'];

  const plugins = [
    ['module-resolver'],
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
