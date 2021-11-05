/**
  Method to get token about of the user from LinkedIn
  @params code: get this from the redirectUri
  @return result is { access_token: string, experis: timestamp }
*/
export declare const oauth: (code: any) => Promise<any>;
