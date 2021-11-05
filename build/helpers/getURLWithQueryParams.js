"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getURLWithQueryParams = void 0;
exports.getURLWithQueryParams = (base, params) => {
    const query = Object.entries(params)
        .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
        .join('&');
    return `${base}?${query}`;
};
