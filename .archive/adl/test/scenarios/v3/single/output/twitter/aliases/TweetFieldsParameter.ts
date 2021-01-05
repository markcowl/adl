
/** A comma separated list of Tweet fields to display. */
export type TweetFieldsParameter = Query<Array<"id" | "created_at" | "text" | "author_id" | "in_reply_to_user_id" | "referenced_tweets" | "attachments" | "withheld" | "geo" | "entities" | "public_metrics" | "possibly_sensitive" | "source" | "lang" | "context_annotations"> & MinimumElements<1> & UniqueElements, "tweet.fields">;
