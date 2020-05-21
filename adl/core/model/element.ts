import { Dictionary, items } from '@azure-tools/linq';
import { TrackedTarget, use, valueOf } from '@azure-tools/sourcemap';
import { Node } from 'ts-morph';
import { project } from '../support/typescript';
import { InternalData } from './internal-data';
import { VersionInfo } from './version-info';


export interface Attic extends Dictionary<any> {

}

/** inheriting from Initializer adds an apply<T> method to the class, allowing you to accept an object initalizer, and applying it to the class in the constructor. */
export class Initializer {
  initialize<T>(initializer?: Partial<T>) {
    const isBackedByTS = 'node' in this;

    if (isBackedByTS) {
      // autotrack
      (<any>this).track(initializer);
    }

    for (const [key, value] of items(initializer)) {
      // copy the true value of the items to the object
      // (use the proxy)
        
      const proxy = isBackedByTS ? <any>this : (<any>TrackedTarget.track(this));
      

      if (value !== undefined) {
        const rawValue = (<any>value).valueOf();
        
        const targetProperty = proxy[key];
        if (targetProperty && targetProperty.push ) {
          if (rawValue[Symbol.iterator]) {
            // copy elements to target
            for (const each of rawValue) {
              proxy[key].push(each);
            }
            continue;
          }
          throw new Error(`Initializer for object with array member '${key}', must be initialized with something that can be iterated.`);
        }
        // just copy the value across.
        proxy[key] = (<any>value);
      }
    }
    return this;
  }
}


/** 
 * Base type for all objects in the model 
 */
export class Element extends Initializer {
  internalData?: Dictionary<InternalData>;
  versionInfo = new Array<VersionInfo>();
  attic?: Attic;

  constructor(initializer?: Partial<Element>) {
    super();
    this.initialize(initializer);
  }

  addToAttic(name: string, value: any) {
    use(value, true);
    if (value) {
      this.attic = this.attic || {};
      this.attic[name] = value.valueOf();
    }
    return this;
  }

  addInternalData(key: string, internalData: InternalData) {
    this.internalData = this.internalData || {};
    this.internalData[key] = internalData;
  }
}

export class TSElement<TNode extends Node> extends Element {
  constructor(public node: TNode, initializer?: Partial<TSElement<TNode>>) {
    super();
    this.initialize(initializer);
  }

  /**
   * targetMap is a function that gives back a dictionary of members to Path (how to find the member in the ts project)
   * @param childMap a childmap that should be copied on top of any defintions that this class has
   * 
   * @notes - every child class of this class should override {@link targetMap}
   */
  get targetMap(): Dictionary<any> {
    return {
    };
  }

  /**
   * 
   * @param sourceMap 
   */
  track(sourceMap: Dictionary<any>) {
    project(this.node).track(this.targetMap, sourceMap);
    return this;
  }

  private getDoc() {
    if (Node.isJSDocableNode(this.node)) {
      for (const each of this.node.getJsDocs()) {
        if (each) { // strangely we can get undefined docs back
          return each;
        }
      }
    }

    return undefined;
  }

  protected getOrCreateDoc() {
    const doc = this.getDoc();
    if (doc) {
      return doc;
    }

    if (!Node.isJSDocableNode(this.node)) {
      throw new Error('This node cannot have JS documentation');
    }

    return this.node.addJsDoc('\n');
  }

  protected hasDocTag(tagName: string) {
    return this.getDocTag(tagName) !== undefined;
  }

  protected addDocTag(tagName: string, text?: string) {
    this.getOrCreateDoc().addTag({ tagName: valueOf(tagName), text: valueOf(text) });
  }

  protected getDocTag(tagName: string) {
    for (const each of this.getDoc()?.getTags() ?? []) {
      if (each.getTagName() == tagName) {
        return each.getText();
      }
    }
    return undefined;
  }

  protected setDocTag(tagName: string, value: string | boolean | undefined) {
    tagName = valueOf(tagName);
    value = valueOf(value);

    this.removeTag(tagName);
    switch (value) {
      case undefined:
      case false:
        break;
      case true:
        value = undefined;
      // fallthrough
      default:
        this.addDocTag(tagName, value);
        break;
    }
  }

  protected removeTag(tagName: string) {
    for (const each of this.getDoc()?.getTags() ?? []) {
      if (each.getTagName() == tagName) {
        each.remove();
      }
    }
  }

  protected getDocSummary() {
    return this.getDoc()?.getDescription();
  }

  protected setDocSummary(value: string | undefined) {
    if (!value && !this.getDoc()) {
      return;
    }
    if( value ) {
      return this.getOrCreateDoc().setDescription(`\n${valueOf(value) ?? ''}`);
    }
    return this.getOrCreateDoc().setDescription('\n');
  }

  protected get project() {
    return project(this.node);
  }

  protected get sourceFile() {
    return this.node.getSourceFile();
  }

  protected getTypeReference(schema: any) {
    return this.project.getTypeReference(schema, this.sourceFile);
  }
}
