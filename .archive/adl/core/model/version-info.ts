import { Version } from './types';
export interface VersionInfo {
  deprecated?: Version;
  since?: Version;
  deleted?: Version;
}
