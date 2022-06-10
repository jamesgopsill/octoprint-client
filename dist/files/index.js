"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Files = void 0;
const base_1 = require("../base");
const cross_fetch_1 = require("cross-fetch");
class Files extends base_1.Base {
    /**
     * Retrieve information regarding all files currently available and regarding the disk space still available locally in the system. The results are cached for performance reasons. If you want to override the cache, supply the query parameter force and set it to true. Note that while printing a refresh/override of the cache for files stored on the printer’s SD card is disabled due to bandwidth restrictions on the serial interface.
     * By default only returns the files and folders in the root directory. If the query parameter recursive is provided and set to true, returns all files and folders.
     * @returns
     */
    files() {
        const url = `${this.baseURL}/api/files`;
        return this.get(url);
    }
    /**
     * Initiate printing of named file.
     * @param file
     * @returns
     */
    async print(file) {
        const url = `${this.baseURL}/api/files/local/${file}`;
        const args = {
            command: "select",
            print: true,
        };
        return this.post(url, args);
    }
    /**
     * Uploads a file to Octoprint
     * @param filename
     * @param gcode
     * @returns
     */
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
    /**
     * Uploads a file to the printer SD card (if it has one).
     * @param filename
     * @param gcode
     * @returns
     */
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
    async deleteLocalFile(filename) {
        const url = `${this.baseURL}/api/files/local/${filename}`;
        this.delete(url);
    }
}
exports.Files = Files;
