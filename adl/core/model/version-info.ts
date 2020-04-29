import { Version } from './api-model';
export interface VersionInfo {
  deprecated?: Version;
  added?: Version;
  deleted?: Version;
}
