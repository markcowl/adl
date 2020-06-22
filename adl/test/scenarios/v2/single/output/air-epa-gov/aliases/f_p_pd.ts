
/**
 * Population Density Limiter (per sq mile). Enter a value to limit results to facilities located in area of a given population density.
 * - NONE = 0 population density per square mile
 * - GT100 = More than 100 population density per square mile
 * - GT500 = More than 500 population density per square mile
 * - GT1000 = More than 1000 population density per square mile
 * - GT5000 = More than 5000 population density per square mile
 * - GT10000 = More than 10000 population density per square mile
 * - GT20000 = More than 20000 population density per square mile
 */
export type f_p_pd = FormData<"NONE" | "GT100" | "GT500" | "GT1000" | "GT5000" | "GT10000" | "GT20000", "p_pd">;
