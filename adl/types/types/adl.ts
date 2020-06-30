/** Gets the base type of a literal type */
export type TypeOf<T> =
  T extends string ? string :
  T extends number ? number :
  T extends boolean ? boolean :
  T extends undefined ? undefined :
  object;

/** Specifies the value a discriminator to identify this schema */
export type Kind<V> = V & TypeOf<V>;

/** Declares the property is a polymorphic discriminator */
export type Discriminator<V> = V;

/** an dictionary of key(string)/value pairs */
export interface Dictionary<T> {
  [key: string]: T;
}

