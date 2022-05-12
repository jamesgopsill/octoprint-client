"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Printer = void 0;
const base_1 = require("../base");
class Printer extends base_1.Base {
    getStatus() {
        const url = `${this.baseURL}/api/printer`;
        return this.get(url);
    }
}
exports.Printer = Printer;
