import { Dictionary } from '@azure-tools/linq';
import { VersionedEntity } from '../typescript/versioned-element';

export interface SchemaInitializer extends VersionedEntity {
  description?: string;
  summary?: string;
  clientName?: string;
  nullable?: boolean;
  readOnly?: boolean;
  tags?: Dictionary<string | undefined>;
}
