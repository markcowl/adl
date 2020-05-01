import { Version } from './api-model';
import { Initializer } from './element';
export class VersionInfo extends Initializer {
  deprecated?: Version;
  added?: Version;
  deleted?: Version;

  constructor(initializer?: Partial<VersionInfo>) {
    super();
    this.initialize(initializer);
  }
}
