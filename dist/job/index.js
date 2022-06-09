"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Job = void 0;
const base_1 = require("../base");
class Job extends base_1.Base {
    async jobCommand(cmd) {
        const url = `${this.baseURL}/api/job`;
        const args = {
            command: cmd,
        };
        return this.post(url, args);
    }
    async jobInformation() {
        const url = `${this.baseURL}/api/job`;
        return this.get(url);
    }
}
exports.Job = Job;
