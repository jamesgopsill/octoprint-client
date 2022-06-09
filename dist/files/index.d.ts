import { Base } from "../base";
import type { GetFilesResponse, UploadFileToLocalResponse, UploadFileToSDCardResponse } from "./interfaces";
import { HttpResponse } from "../interfaces";
export declare class Files extends Base {
    files(): Promise<HttpResponse<GetFilesResponse>>;
    selectFileAndPrint(file: string): Promise<HttpResponse<unknown>>;
    uploadFileToLocal(filename: string, gcode: string): Promise<HttpResponse<UploadFileToLocalResponse>>;
    uploadFileToSDCard(filename: string, gcode: string): Promise<HttpResponse<UploadFileToSDCardResponse>>;
}
