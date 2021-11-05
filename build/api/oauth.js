"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.oauth = void 0;
const config_1 = require("../config");
const constants_1 = require("../constants");
const helpers_1 = require("../helpers");
/**
  Method to get token about of the user from LinkedIn
  @params code: get this from the redirectUri
  @return result is { access_token: string, experis: timestamp }
*/
// eslint-disable-next-line @typescript-eslint/no-explicit-any
exports.oauth = (code) => __awaiter(void 0, void 0, void 0, function* () {
    if (config_1.config !== undefined) {
        const LINKEDIN_URL = helpers_1.getURLWithQueryParams(constants_1.ACCESS_TOKEN, {
            grant_type: 'authorization_code',
            code,
            redirect_uri: config_1.config.LINKEDIN_REDIRECT,
            client_id: config_1.config.LINKEDIN_CLIENT_ID,
            client_secret: config_1.config.LINKEDIN_CLIENT_SECRET,
        });
        let result;
        const response = yield fetch(LINKEDIN_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        });
        if (response.ok)
            result = yield response.json();
        return result;
    }
    return 'Before invoke oauth you can need a valid config!';
});
