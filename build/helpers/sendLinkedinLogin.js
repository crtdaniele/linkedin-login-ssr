"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendLinkedinLogin = void 0;
const config_1 = require("../config");
const getURLWithQueryParams_1 = require("./getURLWithQueryParams");
const constants_1 = require("../constants");
/**
  Use this method in a href to call LinkedIn login
  @return LINKEDIN_URL is the url of LinkedIn
*/
exports.sendLinkedinLogin = () => {
    if (config_1.config !== undefined) {
        const LINKEDIN_URL = getURLWithQueryParams_1.getURLWithQueryParams(constants_1.AUTHORIZATION, {
            response_type: 'code',
            client_id: config_1.config.LINKEDIN_CLIENT_ID,
            redirect_uri: config_1.config.LINKEDIN_REDIRECT,
            state: config_1.config.LINKEDIN_STATE,
            scope: config_1.config.LINKEDIN_SCOPE,
        });
        return LINKEDIN_URL;
    }
    return '';
};
