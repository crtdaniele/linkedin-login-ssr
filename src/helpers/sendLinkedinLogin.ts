import { config } from '../config';
import { LinkedinUrlParams } from '../types';
import { getURLWithQueryParams } from './getURLWithQueryParams';
import { AUTHORIZATION } from '../constants';

/**
  Use this method in a href to call LinkedIn login
  @return LINKEDIN_URL is the url of LinkedIn
*/
export const sendLinkedinLogin = () => {
  if (config !== undefined) {
    const LINKEDIN_URL = getURLWithQueryParams<LinkedinUrlParams>(AUTHORIZATION, {
      response_type: 'code',
      client_id: config.LINKEDIN_CLIENT_ID,
      redirect_uri: config.LINKEDIN_REDIRECT,
      state: config.LINKEDIN_STATE,
      scope: config.LINKEDIN_SCOPE,
    });

    return LINKEDIN_URL;
  }
  return '';
};
