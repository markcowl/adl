
/**
 * @description Represent the information for the URL image
 */
export interface URLImage {
    height: int64 & Minimum<0>;
    url: string;
    width: int64 & Minimum<0>;
}
