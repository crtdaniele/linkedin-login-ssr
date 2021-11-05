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
exports.me = void 0;
const constants_1 = require("../constants");
/**
  Method to get information about of the user from LinkedIn
  @params token: get the token from oauth method
  @params options: an example "projection=(id,localizedFirstName,profilePicture(displayImage~digitalmediaAsset:playableStreams))"
  @return user: is an object that contains the info about the user
*/
// eslint-disable-next-line @typescript-eslint/no-explicit-any
exports.me = (token, options) => __awaiter(void 0, void 0, void 0, function* () {
    if (token !== '') {
        const auth = `Bearer ${token}`;
        let user = {};
        const response = yield fetch(`${constants_1.ME}${options}`, {
            method: 'GET',
            headers: { Connection: 'Keep-Alive', Authorization: auth },
        });
        if (response.ok)
            user = yield response.json();
        return user;
    }
    return 'Invalid token, please provide a valid token!';
});
