import { object_191 } from './object_191';
import { object_193 } from './object_193';
import { UserWithheld } from './UserWithheld';
/**
 * @description The Twitter User object
 */
export interface User {
    /**
     * @description Creation time of this user.
     */
    created_at: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description The text of this user's profile description (also known as bio), if the user provided one.
     */
    description: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description A list of metadata found in the user's profile description.
     */
    entities: object_191;
    id?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description The location specified in the user's profile, if the user provided one. As this is a freeform value, it may not indicate a valid location, but it may be fuzzily evaluated when performing searches with location queries.
     */
    location: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description The friendly name of this user, as shown on their profile.
     */
    name?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    pinned_tweet_id: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description The URL to the profile image for this user.
     */
    profile_image_url: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Indicates if this user has chosen to protect their Tweets (in other words, if this user's Tweets are private).
     */
    protected: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description A list of metrics for this user
     */
    public_metrics: object_193;
    /**
     * @description The URL specified in the user's profile.
     */
    url: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    username?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Indicate if this user is a verified Twitter User.
     */
    verified: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    withheld: UserWithheld;
}
