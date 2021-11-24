"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OctoPrintClient = exports.OctoPrintFilesEndpoints = exports.OctoPrintGeneralEndpoints = void 0;
const general = __importStar(require("./general"));
const files = __importStar(require("./files"));
exports.OctoPrintGeneralEndpoints = __importStar(require("./general"));
exports.OctoPrintFilesEndpoints = __importStar(require("./files"));
/**
 * OctoPrint client class
 *
 * ```typescript
 * import { OctoPrintClient } from "octoprint-client"
 *
 * const client = OctoPrintClient("URL", "APIKEY")
 * ```
 *
 * @param url The url of the OctoPrint server.
 * @param apiKey Your unique key to authorise access to the OctoPrint API.
 */
class OctoPrintClient {
    constructor(baseURL, apiKey) {
        this.baseURL = baseURL;
        this.apiKey = apiKey;
    }
    getVersionInformation() {
        return general.getVersionInformation(this.baseURL, this.apiKey);
    }
    getSystemInformation() {
        return general.getSystemInformation(this.baseURL, this.apiKey);
    }
    getConnectionSettings() {
        return general.getConnectionSettings(this.baseURL, this.apiKey);
    }
    getFiles() {
        return files.getFiles(this.baseURL, this.apiKey);
    }
    getFilesRecursive() {
        return files.getFilesRecursive(this.baseURL, this.apiKey);
    }
    postFileLocal(filename, gcode) {
        return files.postFileLocal(this.baseURL, this.apiKey, filename, gcode);
    }
}
exports.OctoPrintClient = OctoPrintClient;
