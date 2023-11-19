import { ExpoConfig, ConfigContext } from '@expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'Bateau',
  slug: 'bateau-mobile',
  version: '1.0.0',
  assetBundlePatterns: ['**/*'],
  extra: {
    apiUrl:
      process.env.NODE_ENV === 'development'
        ? process.env.REACT_APP_PUBLIC_URL_LOCAL
        : process.env.REACT_APP_PUBLIC_URL_PROD
  }
});
