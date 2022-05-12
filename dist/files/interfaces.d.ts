export interface GetFilesResponse {
    files: [
        {
            name: string;
            path: string;
            type: string;
            typePath: string[];
            hash: string;
            size: number;
            date: number;
            origin: string;
            refs: {
                resource: string;
                download: string;
            };
            gcodeAnalysis: {
                estimatedPrintTime: number;
                filament: {
                    length: number;
                    volume: number;
                };
            };
            print: {
                failure: number;
                success: number;
                last: {
                    date: number;
                    success: boolean;
                };
            };
        }
    ];
    free: number;
    total: number;
}
export interface UploadFileToLocalResponse {
    files: {
        local: {
            name: string;
            origin: string;
            refs: {
                resource: string;
                download: string;
            };
        };
    };
    done: boolean;
}
export interface UploadFileToSDCardResponse {
    files: {
        local: {
            name: string;
            origin: string;
            refs: {
                resource: string;
                download: string;
            };
        };
        sdcard: {
            name: string;
            path: string;
            origin: string;
            refs: {
                resource: string;
            };
        };
    };
    done: boolean;
}
