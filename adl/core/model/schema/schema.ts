import { Dictionary } from '@azure-tools/linq';
import { anonymous } from '@azure-tools/sourcemap';
import { getPath } from '../../support/typescript';
import { Element } from '../element';
import { Identity } from '../name';

export class Schema extends Element {
  get targetMap(): Dictionary<any> {
    return {
      ...super.targetMap,
      summary: getPath(this.node, /* path to summary jsdoc */),
      description: getPath(this.node, /* path to description jsdoc */),
    };
  }

  anonymous?: boolean;
  /** 
   * name of this schema - may be an alias or an actual string name 
   */
  name: Identity;

  /**
   * short description of the schema
   */
  summary?: string;

  /**
   * extended description of the schema
   * CommonMark syntax MAY be used for rich text representation.
   */
  description?: string;

  /**
   * if null can be substituted for a value for this schema.
   * 
   * @todo: I'm not fond of having this in schema -- we should strongly consider refactoring this so the consumer gets it (ie, the property)
   */
  nullable?:  boolean;
  /**
   * 
   * @param type the schema 'type' that this schema represents. 
   * @param initializer optional object initializer
   */
  constructor(public type: string, initializer?: Partial<Schema>) {
    super();
    this.name = anonymous('');
    this.initialize(initializer);
  }
}

