
/** A comma separated list of User fields to display. */
export type UserFieldsParameter = Query<Array<"id" | "created_at" | "name" | "username" | "protected" | "verified" | "withheld" | "profile_image_url" | "location" | "url" | "description" | "entities" | "pinned_tweet_id" | "public_metrics"> & MinimumElements<1> & UniqueElements, "user.fields">;
