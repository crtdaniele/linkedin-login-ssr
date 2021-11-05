export declare type LinkedinConfig = {
    LINKEDIN_STATE: string;
    LINKEDIN_SCOPE: string;
    LINKEDIN_REDIRECT: string;
    LINKEDIN_CLIENT_ID: string;
    LINKEDIN_CLIENT_SECRET: string;
};
export declare type LinkedinUrlParams = {
    response_type: 'code';
    client_id: string;
    redirect_uri: string;
    state: string;
    scope: string;
};
export declare type LinkedinAccessTokenParams = {
    grant_type: 'authorization_code';
    code: string;
    redirect_uri: string;
    client_id: string;
    client_secret: string;
};
export declare type LinkedinToken = {
    accessToken: string;
    expiresIn: string;
};
