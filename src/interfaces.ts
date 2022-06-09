// https://www.carlrippon.com/fetch-with-async-await-and-typescript/
// https://stackoverflow.com/questions/65625183/typescript-interface-a-extends-b-but-is-missing-properties-from-b

export type HttpResponse<T> = Response & { data?: T }