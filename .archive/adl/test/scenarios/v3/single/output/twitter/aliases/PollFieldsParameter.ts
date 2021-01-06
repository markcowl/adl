
/** A comma separated list of Poll fields to display. */
export type PollFieldsParameter = Query<Array<"id" | "options" | "voting_status" | "end_datetime" | "duration_minutes"> & MinimumElements<1> & UniqueElements, "poll.fields">;
