"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.General = void 0;
const base_1 = require("../base");
class General extends base_1.Base {
    getVersionInformation() {
        const url = `${this.baseURL}/api/version`;
        return this.get(url);
    }
}
exports.General = General;
