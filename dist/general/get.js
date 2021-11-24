"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSystemInformation = exports.getVersionInformation = void 0;
const helpers_1 = require("../helpers");
const getVersionInformation = (baseURL, apiKey) => {
    const url = `${baseURL}/api/version`;
    return (0, helpers_1.get)(url, apiKey);
};
exports.getVersionInformation = getVersionInformation;
const getSystemInformation = (baseURL, apiKey) => {
    const url = `${baseURL}/api/version`;
    return (0, helpers_1.get)(url, apiKey);
};
exports.getSystemInformation = getSystemInformation;
