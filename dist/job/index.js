"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Job = void 0;
const base_1 = require("../base");
const cross_fetch_1 = require("cross-fetch");
class Job extends base_1.Base {
    async issueJobCommand(cmd) {
        const url = `${this.baseURL}/api/job`;
        const config = {
            method: "POST",
            mode: "cors",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "X-Api-Key": this.apiKey,
            },
            body: JSON.stringify({
                command: cmd,
            }),
        };
        return (0, cross_fetch_1.fetch)(url, config).then((r) => {
            if (r.ok) {
                return true;
            }
            throw new base_1.ResponseError(r);
        });
    }
}
exports.Job = Job;
