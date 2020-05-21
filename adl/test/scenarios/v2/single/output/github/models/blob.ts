export interface blob {
    content: string;
    encoding: "utf-8" | "base64";
    sha: string;
    size: int64;
}
