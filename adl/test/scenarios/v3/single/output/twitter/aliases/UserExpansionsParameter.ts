
/** A comma separated list of fields to expand. */
export type UserExpansionsParameter = Query<Array<"pinned_tweet_id"> & MinimumElements<1> & UniqueElements, "expansions">;
