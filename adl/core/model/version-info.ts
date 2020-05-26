import { Version } from './types';
export interface VersionInfo {
  deprecated?: Version;
  added?: Version;
  deleted?: Version;
}
