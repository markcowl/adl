import { Dictionary } from '@azure-tools/linq';
import { Metadata } from './metadata';

/**
 * All the data that gets persisted in the project.yaml file.
 *
 */
export class ProjectData {
  apiVersions= new Array<string>();
  metaData = new Metadata('');
  attic = new Dictionary<any>();
}