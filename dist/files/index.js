"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Files = void 0;
const base_1 = require("../base");
const cross_fetch_1 = require("cross-fetch");
class Files extends base_1.Base {
    files() {
        const url = `${this.baseURL}/api/files`;
        return this.get(url);
    }
    async selectFileAndPrint(file) {
        const url = `${this.baseURL}/api/files/local/${file}`;
        const args = {
            command: "select",
            print: true,
        };
        return this.post(url, args);
    }
    async uploadFileToLocal(filename, gcode) {
        const url = `${this.baseURL}/api/files/local`;
        // Create the file upload from the string
        let formData;
        if (typeof window === "undefined") {
            // Node.js
            const FormData = require("form-data");
            formData = new FormData();
            formData.append("file", gcode, filename);
        }
        else {
            // Browser
            const blob = new Blob([gcode], { type: "text/plain" });
            formData = new FormData();
            formData.append("file", blob, filename);
        }
        const config = {
            method: "POST",
            mode: "cors",
            headers: {
                Accept: "application/json",
                "X-Api-Key": this.apiKey,
            },
            body: formData,
        };
        return (0, cross_fetch_1.fetch)(url, config).then(async (r) => {
            if (r.ok)
                r.data = await r.json();
            return r;
        });
    }
    async uploadFileToSDCard(filename, gcode) {
        const url = `${this.baseURL}/api/files/sdcard`;
        // Create the file upload from the string
        let formData;
        if (typeof window === "undefined") {
            // Node.js
            const FormData = require("form-data");
            formData = new FormData();
            formData.append("file", gcode, filename);
        }
        else {
            // Browser
            const blob = new Blob([gcode], { type: "text/plain" });
            formData = new FormData();
            formData.append("file", blob, filename);
        }
        const config = {
            method: "POST",
            mode: "cors",
            headers: {
                Accept: "application/json",
                "X-Api-Key": this.apiKey,
            },
            body: formData,
        };
        return (0, cross_fetch_1.fetch)(url, config).then(async (r) => {
            if (r.ok)
                r.data = await r.json();
            return r;
        });
    }
}
exports.Files = Files;
