import { Version } from './aam';
import { OnAdd } from './element';
export interface VersionInfo extends OnAdd {
  deprecated?: Version;
  added?: Version;
  deleted?: Version;
}
