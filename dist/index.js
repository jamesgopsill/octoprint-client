"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OctoPrintClient = void 0;
const base_1 = require("./base");
const apply_mixins_1 = require("./apply-mixins");
const general_1 = require("./general");
const files_1 = require("./files");
const job_1 = require("./job");
const printer_1 = require("./printer");
/**
 * Inherits from all the other classes featuring the API calls to OctoPrint.
 *
 *
 */
class OctoPrintClient extends base_1.Base {
}
exports.OctoPrintClient = OctoPrintClient;
(0, apply_mixins_1.applyMixins)(OctoPrintClient, [general_1.General, files_1.Files, job_1.Job, printer_1.Printer]);
// Interfaces
__exportStar(require("./interfaces"), exports);
__exportStar(require("./general/interfaces"), exports);
__exportStar(require("./files/interfaces"), exports);
__exportStar(require("./job/enums"), exports);
