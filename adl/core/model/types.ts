import { anonymous } from '@azure-tools/sourcemap';
import { Directory } from 'ts-morph';

export type Identity = string | anonymous;

export type URL = string;

export interface Collection<T> {
  push(...value: Array<T>): void;
  remove(value: T): void;
  get(): Array<T>;
}

export class CollectionImpl<TCollectionType, TOwner> implements Collection<TCollectionType> {
  constructor(owner: TOwner, public push: (...value: Array<TCollectionType>) => void = (v: TCollectionType) => { /* nothing */ }, public remove: (value: TCollectionType) => void = (v: TCollectionType) => { /* nothing */ }, public get: () => Array<TCollectionType> = () => []) {
    this.push = push.bind(owner);
    this.remove = remove.bind(owner);
    this.get = get.bind(owner);
  }
}

export interface Folders {
  anonymous: Directory;
  alias: Directory;
  model: Directory;
  enum: Directory;
  group: Directory;
  resource: Directory;
}

export interface FileInfo {
  filename: string;
}

export type Version = string;
