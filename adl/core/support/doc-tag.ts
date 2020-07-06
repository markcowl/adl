import { fail } from 'assert';
import { JSDoc, JSDocStructure, JSDocTag, JSDocTagStructure, Node, StructureKind } from 'ts-morph';

export type JSDocs = Array<JSDoc>;
export type HasNode = { node: Node };
export type Taggable = Node | JSDocs | JSDoc | HasNode;

function hasNode(target: Taggable): target is HasNode {
  return !!((<any>target).node);
}

export function getDocs(target: Taggable) {
  target = hasNode(target) ? target.node : target;

  return Array.isArray(target) ? target :
    Node.isJSDoc(target) ? [target] :
      Node.isJSDocableNode(target) ? target.getJsDocs().filter(each => !!each) :
        fail('Node is not a docable node');
}

export function getFirstDoc(target: Taggable): JSDoc {
  const docs = getDocs(target);
  return docs.length > 0 ? docs[0] : (Node.isJSDocableNode(<any>target) ? (<any>target).addJsDoc('\n') : fail('Node is not a docable node'));
}

export function getLastDoc(target: Taggable): JSDoc {
  const docs = getDocs(target);
  return docs.length > 0 ? docs[docs.length - 1] : (Node.isJSDocableNode(<any>target) ? (<any>target).addJsDoc('\n') : fail('Node is not a docable node'));
}

export function* getTags(target: Taggable, ...tagName: Array<string>): Iterable<JSDocTag> {
  for (const each of getDocs(target)) {
    yield* (tagName.length ? each.getTags().filter(tag => tagName.indexOf(tag.getTagName()) >-1) : each.getTags());
  }
}

export function getTagValue(target: Taggable, tagName: string): string | undefined {
  for (const each of getTagValues(target, tagName)) {
    return each;
  }
  return undefined;
}

export function* getTagValues(target: Taggable, ...tagName: Array<string>): Iterable<string> {
  for(const each of getTags(target,...tagName)) {
    yield each.getStructure().text?.toString() || '';
  }
}

export function hasTag(target: Taggable, tagName: string) {
  for (const each of getTags(target, tagName)) {
    return true;
  }
  return false;
}

export function appendTag(target: Taggable, tagName: string, text?: string) {
  getLastDoc(target).addTag({
    tagName,
    text
  });
}

export function prependTag(target: Taggable, tagName: string, text?: string) {
  getFirstDoc(target).insertTag(0, {
    tagName,
    text
  });
}

export function removeTag(target: Taggable, tagName: string) {
  // todo: investigate if this is ok -- does removing tags from from the source file reset the nodes in the sourcefile?
  if (tagName) {
    for (const tag of getTags(target, tagName)) {
      tag.remove();
    }
  }
}

export function setTag(target: Taggable, tagName: string, text?: string | boolean) {
  removeTag(target, tagName);
  switch (text) {
    case undefined:
    case false:
      break;
    case true:
      // true values are assumed when the tag is present.
      text = undefined;
    // eslint-disable-next-line no-fallthrough
    default:
      appendTag(target, tagName, text);
      break;
  }
}

export interface Documentation {
  summary?: string;
  description?: string;
  since?: string;
  clientName?:  string;
  deprecated?: string;
  extensible?: boolean;
}

export function createDocs(documentationIntializer?: Documentation, additionalTags?: Array<JSDocTagStructure>): Array<JSDocStructure> | undefined {
  if(documentationIntializer) {
    const tags = new Array<JSDocTagStructure>();
    if (documentationIntializer.extensible) {
      tags.push({
        kind: StructureKind.JSDocTag,
        tagName: 'extensible'
      });
    }

    if (documentationIntializer.description) {
      tags.push({
        kind: StructureKind.JSDocTag,
        tagName: 'description',
        text: documentationIntializer.description
      });
    }


    if (documentationIntializer.clientName) {
      tags.push({
        kind: StructureKind.JSDocTag,
        tagName: 'clientName',
        text: documentationIntializer.clientName
      });
    }


    if (documentationIntializer.since) {
      tags.push({
        kind: StructureKind.JSDocTag,
        tagName: 'since',
        text: documentationIntializer.since
      });
    }

    if (documentationIntializer.deprecated) {
      tags.push({
        kind: StructureKind.JSDocTag,
        tagName: 'deprecated',
        text: documentationIntializer.deprecated
      });
    }

    if (additionalTags) {
      tags.push(...additionalTags);
    }

    if (documentationIntializer.summary || tags.length > 0) {
      return [{
        kind: StructureKind.JSDoc,
        description: documentationIntializer.summary || (tags.length < 2 ? '\n' : ''),
        tags
      }];
    }
  }

  return undefined;
}
