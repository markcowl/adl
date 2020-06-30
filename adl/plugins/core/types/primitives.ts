import { Traits } from './annotations';
import { MaxLength, MinLength, RegularExpression } from './constraints';
import { Type } from './type';

/** an 8 bit integer value */
export declare type int8 = number & Type.Integer & Traits.Precision<8>;

/** an 8 bit integer value */
export declare type byte = number & Type.Integer & Traits.Precision<8>;

/** a 16 bit integer value */
export declare type int16 = number & Type.Integer & Traits.Precision<16>;

/** a 32 bit integer value */
export declare type int32 = number & Type.Integer & Traits.Precision<32>;

/** a 64 bit integer value */
export declare type int64 = number & Type.Integer & Traits.Precision<64>;

export declare type integer = int8 | int16 | int32 | int64;

/** a 32 bit floating point value */
export declare type float32 = number & Type.FloatingPoint & Traits.Precision<32>;

/** a 64 bit floating point value */
export declare type float64 = number & Type.FloatingPoint & Traits.Precision<64>;

/** the number of seconds that have passed since 00:00:00 UTC Thursday, 1 January 1970. */
export declare type unixtime = number & Type.Date & Type.Time & Traits.Standard<'unix-time'>;

/** a single character  */
export declare type char = string & MinLength<1> & MaxLength<1>;

/** an ISO 8601 Date format 
 * 
 * @todo - should this have a Pattern?
 */
export declare type date = string & Type.Date & Traits.Standard<'iso8601:date'>;

/** an ISO 8601 DateTime format
 * 
 * @todo - should this have a Pattern?
 */
export declare type datetime = string & Type.Date & Type.Time & Traits.Standard<'iso8601:date-time'>;


/** an RFC 1123 date time format 
 * 
 * @todo - should this have a Pattern?
*/
export declare type datetimeRfc1123 = string & Type.Date & Type.Time & Traits.Standard<'rfc1123:date-time'>;

/** 
 * An ISO8601 duration 
 * 
 * Durations define the amount of intervening time in a time interval and are represented 
 * by the format P[n]Y[n]M[n]DT[n]H[n]M[n]S or P[n]W as shown to the right. 
 * 
 * In these representations, the [n] is replaced by the value for each of the date and 
 * time elements that follow the [n]. Leading zeros are not required, but the maximum 
 * number of digits for each element should be agreed to by the communicating parties. 
 * 
 * The capital letters P, Y, M, W, D, T, H, M, and S are designators for each of the date and time elements and are not replaced.
*/
export declare type duration = string & Traits.Standard<'iso8601:duration'>;

/** a universally unique ID */
export declare type uuid = string & RegularExpression<'^([a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}){1}$'>;

/** A Uniform Resource Identifier (URI) is a string of characters that unambiguously identifies a particular resource.  
 * 
 * @see https://en.wikipedia.org/wiki/Uniform_Resource_Identifier
*/
export declare type uri = string & RegularExpression<'^[A-Za-z][A-Za-z0-9+-.]*:.*^'>;

