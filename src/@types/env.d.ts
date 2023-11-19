type EnvProps = {
  REACT_APP_PUBLIC_URL_PROD: string;
  REACT_APP_PUBLIC_URL_LOCAL: string;
  ONE_SIGNAL_APP_ID_ANDROID: string;
};

declare module '@env' {
  export const {
    REACT_APP_PUBLIC_URL_PROD,
    REACT_APP_PUBLIC_URL_LOCAL,
    ONE_SIGNAL_APP_ID_ANDROID
  }: EnvProps;
}
