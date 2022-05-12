import { Base } from "../base";
import type { GetFilesResponse, UploadFileToLocalResponse, UploadFileToSDCardResponse } from "./interfaces";
export declare class Files extends Base {
    getFiles(): Promise<GetFilesResponse>;
    selectFileAndPrint(file: string): Promise<boolean>;
    uploadFileToLocal(gcode: string): Promise<UploadFileToLocalResponse>;
    uploadFileToSDCard(gcode: string): Promise<UploadFileToSDCardResponse>;
}
