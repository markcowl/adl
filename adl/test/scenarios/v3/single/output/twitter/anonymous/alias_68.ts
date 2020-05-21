export type alias_68 = Array<{
    id?: string & RegularExpression<"^[0-9]{1,19}$">;
    type?: "retweeted" | "quoted" | "replied_to";
}> & MinimumElements<1>;
