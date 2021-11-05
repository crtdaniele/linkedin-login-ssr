import { LinkedinConfig } from '../types';
/**
  Config and setConfig needs to configure oauth
  @return config returns an object with this type LinkedinConfig
  @return setConfig is a method to invoke when you start your app
*/
export declare let config: LinkedinConfig | undefined;
export declare const setConfig: (props: LinkedinConfig) => void;
