import { config } from '../config';
import { ACCESS_TOKEN } from '../constants';
import { getURLWithQueryParams } from '../helpers';
import { LinkedinAccessTokenParams } from '../types';

/**
  Method to get token about of the user from LinkedIn
  @params code: get this from the redirectUri
  @return result is { access_token: string, experis: timestamp }
*/
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const oauth = async (code: any) => {
  if (config !== undefined) {
    const LINKEDIN_URL = getURLWithQueryParams<LinkedinAccessTokenParams>(ACCESS_TOKEN, {
      grant_type: 'authorization_code',
      code,
      redirect_uri: config.LINKEDIN_REDIRECT,
      client_id: config.LINKEDIN_CLIENT_ID,
      client_secret: config.LINKEDIN_CLIENT_SECRET,
    });

    let result;
    const response = await fetch(LINKEDIN_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });

    if (response.ok) result = await response.json();
    return result;
  }
  return 'Before invoke oauth you can need a valid config!';
};
