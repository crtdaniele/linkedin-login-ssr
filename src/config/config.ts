import { LinkedinConfig } from '../types';

/**
  Config and setConfig needs to configure oauth
  @return config returns an object with this type LinkedinConfig
  @return setConfig is a method to invoke when you start your app
*/
// eslint-disable-next-line import/no-mutable-exports
export let config: LinkedinConfig | undefined;
export const setConfig = (props: LinkedinConfig) => {
  config = { ...props };
};
