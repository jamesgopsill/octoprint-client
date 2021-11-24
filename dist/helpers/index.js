"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = void 0;
const cross_fetch_1 = require("cross-fetch");
const get = (url, apiKey, bodyArgs) => {
    return new Promise(async (resolve, reject) => {
        let res;
        if (typeof bodyArgs != "undefined") {
            res = await (0, cross_fetch_1.fetch)(url, {
                method: "GET",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "X-Api-Key": apiKey,
                },
                body: JSON.stringify(bodyArgs),
            });
        }
        else {
            res = await (0, cross_fetch_1.fetch)(url, {
                method: "GET",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "X-Api-Key": apiKey,
                },
            });
        }
        if (res.status == 200)
            resolve(res.json());
        reject(res);
    });
};
exports.get = get;
