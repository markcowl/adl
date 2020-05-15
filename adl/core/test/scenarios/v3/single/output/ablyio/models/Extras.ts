import { Push } from './Push';
/**
 * 
 * @description Extras object. Currently only allows for [push](https://www.ably.io/documentation/general/push/publish#channel-broadcast-example) extra.
 */
export interface Extras {
    push: Push;
}
