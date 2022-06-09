"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.General = void 0;
const base_1 = require("../base");
class General extends base_1.Base {
    version() {
        const url = `${this.baseURL}/api/version`;
        return this.get(url);
    }
    system() {
        const url = `${this.baseURL}/api/version`;
        return this.get(url);
    }
    connection() {
        const url = `${this.baseURL}/api/connection`;
        return this.get(url);
    }
}
exports.General = General;
