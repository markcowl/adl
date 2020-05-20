export interface blob {
    content: string;
    encoding: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    sha: string;
    size: int64;
}
