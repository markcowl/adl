export type labels = Array<{
    color?: string & MaxLength<6> & MinLength<6>;
    name?: string;
    url?: string;
}>;
