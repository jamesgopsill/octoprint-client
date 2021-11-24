"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFilesRecursive = exports.getFiles = void 0;
const helpers_1 = require("../helpers");
const getFiles = (baseURL, apiKey) => {
    const url = `${baseURL}/api/files`;
    return (0, helpers_1.get)(url, apiKey);
};
exports.getFiles = getFiles;
const getFilesRecursive = (baseURL, apiKey) => {
    const url = `${baseURL}/api/files?recursive=true`;
    return (0, helpers_1.get)(url, apiKey);
};
exports.getFilesRecursive = getFilesRecursive;
