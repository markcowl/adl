import { isAnonymous, TargetMap, valueOf } from '@azure-tools/sourcemap';
import { Identifier, InterfaceDeclaration, PropertyDeclaration } from 'ts-morph';
import { getPath, TypeDeclaration } from '../../support/typescript';
import { ApiModel } from '../api-model';
import { Element, TSElement } from '../element';
import { Schema, TSSchema } from './schema';

interface Collection<T> {
  add(value: T): void;
  remove(value: T): void;
  get(): Array<T>;
}

class AddRemoveGet<TCollectionType,TOwner> implements Collection<TCollectionType> {
  constructor(owner: TOwner, public add: (value: TCollectionType) => void = (v: TCollectionType) => { }, public remove: (value: TCollectionType) => void = (v: TCollectionType) => { }, public get: () => Array<TCollectionType> = () => []) {
    this.add = add.bind(owner);
    this.remove = remove.bind(owner);
    this.get = get.bind(owner);
  }
}

export class Property2 extends TSElement<PropertyDeclaration> { 
  
}

export interface ObjectSchema2 extends Schema {
  /** schemas that this object extends */
  readonly parents: Collection<TSSchema<TypeDeclaration>>;
  
  /** the collection of properties that are in this object */
  readonly properties: Collection<Property2>;
  
  /**  maximum number of properties permitted */
  maxProperties?: number;

  /**  minimum number of properties permitted */
  minProperties?: number;


  /** the desired name when generating code */
  clientName?: string;

}

const o: ObjectSchema2 = <any>{};


export class ObjectSchemaImpl extends TSSchema<InterfaceDeclaration> implements ObjectSchema2 {
  get targetMap(): TargetMap {
    return {
      ...super.targetMap,
      $: getPath(this.node)
    };
  }

  addParent(parent: TSSchema<TypeDeclaration> ) {
    // ensure we have an import to the type
    // and add it to the list
    const ref = this.getTypeReference(parent);
    

    this.node.addExtends(ref.getName()!);
  }
  removeParent(parent: TSSchema<TypeDeclaration>) {
    // remove the parent from the schema
    for( const base of this.node.getExtends() ) {
      // todo: how do we identify which base is the one we're removing.
      // have to debug this to find out.
      debugger;
      if( false ) {
        // this is the one, remove it
        this.node.removeExtends(base);
        break;
      }
    }

  }
  getParents(): Array<TSSchema<TypeDeclaration>> {
    // return a wrapper object for each typedecl
    return this.node.getBaseDeclarations().map( each => new TSSchema<TypeDeclaration>('',each)  );
  }

  constructor(node: InterfaceDeclaration) {
    super('object', node);
    this.parents = new AddRemoveGet(this, this.addParent, this.removeParent, this.getParents);
    this.properties = new AddRemoveGet(this);

  }
  parents: Collection<TSSchema<TypeDeclaration>>;
  properties: Collection<Property2>;
 
  maxProperties?: number;
  minProperties?: number;
  clientName?: string;
}
let counter = 0;

export function createObjectSchema(api: ApiModel, name: Identifier, initializer?: Partial<ObjectSchema2>): ObjectSchema2 {
  const file = api.getObjectSchemaFile( valueOf(name));
  const n = isAnonymous(name) ? `object_${counter++}` :<string><any> valueOf(name);
  return new ObjectSchemaImpl(file.addInterface({
    //todo: do a better 'fix-the-bad-name' (ie, perks/codegen)
    name: n.replace(/[^\w]+/g, '_'),
    isExported: true,
  })).track( {
    $: name, 
  });
}

export class ObjectSchema extends Schema {
  /** the collection of properties that are in this object */
  properties = new Array<Property>();

  /**  maximum number of properties permitted */
  maxProperties?: number;

  /**  minimum number of properties permitted */
  minProperties?: number;

  /** schemas that this object extends */
  extends = new Array<Schema>();

  /*
   * the desired name when generating code
   */
  clientName?: string;

  constructor(public name: string, initializer?: Partial<ObjectSchema>) {
    super('object');
    this.initialize(initializer);
  }
}


export class Property extends Element {
  /** indicates the properts is required */
  required?: boolean;

  /**
   * Declares the property as "read only".  
   * A property MUST NOT be marked as both readOnly and writeOnly being true. 
   * Default value is false.
   */
  readonly?: boolean;

  /**
   * Declares the property as "write only". 
   * A property MUST NOT be marked as both readOnly and writeOnly being true. 
   * Default value is false.
   * 
   */
  writeonly?: boolean;

  /**
   * Description of the property
   * CommonMark syntax MAY be used for rich text representation.
   */
  description?: string;

  /**
   * the desired name when generating code.
   */
  clientName?: string;

  constructor(public name: string, public schema: Schema, initializer?: Partial<Property>) {
    super();
    this.initialize(initializer);
  }
}
