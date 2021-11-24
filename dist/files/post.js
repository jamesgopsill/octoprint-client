"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postFileLocal = void 0;
const cross_fetch_1 = require("cross-fetch");
const postFileLocal = async (baseURL, apiKey, filename, gcode) => {
    return new Promise(async (resolve, reject) => {
        const url = `${baseURL}/api/files/local`;
        let formData;
        // Check if we are running in the browser or on node.js
        if (typeof window === "undefined") {
            // Node.js
            const FormData = require("form-data");
            formData = new FormData();
            formData.append("file", gcode, filename);
        }
        else {
            // Browser
            formData = new FormData();
            formData.append("file", gcode, filename);
        }
        const res = await (0, cross_fetch_1.fetch)(url, {
            method: "POST",
            mode: "cors",
            headers: {
                Accept: "application/json",
                "X-Api-Key": apiKey,
            },
            body: formData,
        });
        if (res.status == 201)
            resolve(res.json());
        reject(res);
    });
};
exports.postFileLocal = postFileLocal;
