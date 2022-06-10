import { Base } from "../base";
import type { GetFilesResponse, UploadFileToLocalResponse, UploadFileToSDCardResponse } from "./interfaces";
import { HttpResponse } from "../interfaces";
export declare class Files extends Base {
    /**
     * Retrieve information regarding all files currently available and regarding the disk space still available locally in the system. The results are cached for performance reasons. If you want to override the cache, supply the query parameter force and set it to true. Note that while printing a refresh/override of the cache for files stored on the printer’s SD card is disabled due to bandwidth restrictions on the serial interface.
     * By default only returns the files and folders in the root directory. If the query parameter recursive is provided and set to true, returns all files and folders.
     * @returns
     */
    files(): Promise<HttpResponse<GetFilesResponse>>;
    /**
     * Initiate printing of named file.
     * @param file
     * @returns
     */
    print(file: string): Promise<HttpResponse<unknown>>;
    /**
     * Uploads a file to Octoprint
     * @param filename
     * @param gcode
     * @returns
     */
    uploadFileToLocal(filename: string, gcode: string): Promise<HttpResponse<UploadFileToLocalResponse>>;
    /**
     * Uploads a file to the printer SD card (if it has one).
     * @param filename
     * @param gcode
     * @returns
     */
    uploadFileToSDCard(filename: string, gcode: string): Promise<HttpResponse<UploadFileToSDCardResponse>>;
    deleteLocalFile(filename: string): Promise<void>;
}
