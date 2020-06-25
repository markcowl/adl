import { Dictionary } from '@azure-tools/linq';
import { JSDocableNode, JSDocTag, Node, StructureKind } from 'ts-morph';
import { appendTag, prependTag } from '../../support/doc-tag';
import { Range, Text } from './position';


function firstWord(text: string | undefined): string | undefined {
  return text ? /^\s*([^\s]+)/g.exec(text)?.[1] ?? undefined : undefined;
}
function afterFirstWord(text: string | undefined): string | undefined {
  return text ? /^\s*[^\s]+\s+(.*?)\s*$/g.exec(text)?.[1] ?? undefined : undefined;
}
function wholeLine(text: string | undefined): string | undefined {
  return text ?? undefined;
}
function nothing(text: string | undefined): string | undefined {
  return undefined;
}

function trimmed(input: string | undefined) {
  if (!input) {
    return {
      leading: '', text: '', trailing: ''
    };
  }

  const [, leading, text, trailing] = /^(\s*)(.*?)(\s*)$/g.exec(input) || [];

  return {
    leading, text, trailing
  };
}

export class Annotation {
  IdentityForWellKnownAnnotation = <Dictionary<((text: string | undefined) => string | undefined) | undefined>>{
    since: wholeLine,
    http: firstWord,
    param: firstWord
  }
  ContentForWellKnownAnnotation = <Dictionary<((text: string | undefined) => string | undefined) | undefined>>{
    since: nothing,
    http: afterFirstWord,
    param: afterFirstWord
  }
  WellKnownUniqueAnnotation = [
    'since',
    'deprecated',
    'deleted',
    'http',
  ]

  constructor(public node: JSDocTag) {
    
  }
  #initialized = false;
  #type!: Text;
  #identity?: Text;
  #content?: Text;

  /**
   * Intializes the values in the Annotation
   * 
   * This is done in a separate fn because the locations and values are so dependent on the 
   * rest of the tag, that it's just better to do it all at once.
   */
  private initialize() {
    // just once. 
    if( this.#initialized) {
      return;
    }
    this.#initialized = true;

    const tn = this.node.getTagName();

    this.#type = {
      ...Range.fromNode(this.node.getTagNameNode()),
      value: tn
    };

    const { leading, text, trailing } = trimmed(<string>this.node.getStructure().text);
    if (!text) {
      this.#identity = undefined;
      this.#content = undefined;
      return;
    }
    const sf = this.node.getSourceFile();
    const pStart = this.node.getTagNameNode().getEnd() + (leading.length);
    const identity = (this.IdentityForWellKnownAnnotation[tn] || nothing)(text);
    const content = (this.ContentForWellKnownAnnotation[tn] || wholeLine)(text);

    this.#identity = identity ? {
      ...Range.fromOffset(sf, pStart, identity.length),
      value: identity
    } : undefined;

    this.#content = content ? {
      ...Range.fromOffset(sf, pStart + (identity?.length || 0), content.length),
      value: content
    } : undefined;
  }

  /**
   * returns the annotation type (ie, 'since', 'param', etc... )
   */
  get type(): Text {
    this.initialize();
    return this.#type;
  }

  /**
   * returns the identity of the annotation (ie, a 'param' can have the name of the parameter)
   */
  get identity(): Text | undefined {
    this.initialize();
    return this.#identity;
  }

  /**
   * returns the textual value of the annotation
   */
  get content(): Text | undefined {
    this.initialize();
    return this.#content;
  }

  /**
   * removes this annoation from the element.
   */
  remove(): void {
    this.node.remove();
  }
}

export class Annotations {
  constructor(public node: JSDocableNode & Node) {
  }

  private get tags(): Array<JSDocTag> {
    return this.node.getJsDocs().selectMany(each => <any>each.getChildren()).where(each => Node.isJSDocTag(each));
  }

  get names() {
    return this.tags.select(each => each.getTagName());
  }

  get annotations() {
    return this.tags.select(each => new Annotation(each));
  }

  get(name: string): Array<Annotation> {
    return this.tags.where(each => each.getTagName() === name).select(each => new Annotation(each));
  }

  /**
   * Appends an annotation to the node
   * @param name the name of the annotation
   * @param value the text value for the annotation
   */
  append(name: string, value?: string) {
    appendTag(this.node, name, value);
  }

  /**
  * Prepends an annotation to the node
  * @param name the name of the annotation
  * @param value the text value for the annotation
  */
  prepend(name: string, value?: string) {
    prependTag(this.node, name, value);
  }

  /**
   * Sets an annotation to the given value.
   * Removes any existing annotations with that name.
   * 
   * @param name the annotation name
   * @param value the annontation value
   */
  set(name: string, value?: string) {
    let tags = this.tags.where( each => each.getTagName() === name );
    
    if( tags.length > 0 ) {
      tags[0].set({
        kind: StructureKind.JSDocTag,
        tagName: name, 
        text: value
      });
    }

    // remove other values that shouldn't be there. 
    while( tags.length > 1 ) {
      tags = this.tags.where(each => each.getTagName() === name);
      tags.last!.remove();
    }
  }
}