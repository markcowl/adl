import { Dictionary } from '@azure-tools/linq';
import { Node } from 'ts-morph';
import { getTagValue, setTag } from '../../support/doc-tag';
import { getAPI, getPath } from '../../support/typescript';
import { Initializer } from '../element';
import { InternalData } from '../project/internal-data';
import { VersionInfo } from '../version-info';
import { Annotations } from './annotations';
import { Range, Rangeable } from './position';


export class TSElement<TNode extends Node> extends Initializer implements Rangeable {
  constructor(public node: TNode, initializer?: Partial<TSElement<TNode>>) {
    super();
    this.initialize(initializer);
  }

  get range(): Range{
    return Range.fromNode(this.node);
  }
  get fullRange(): Range {
    return Range.fromNode(this.node);
  }
  get filename(): string {
    return this.node.getSourceFile().getFilePath();
  }
 
  get internalData() {
    const pv = this.api.getPrivateData(getPath(this.node));
    if (!pv.internalData) {
      pv.internalData = {};
    }
    return pv.internalData;
  }

  get versionInfo(): VersionInfo {
    // get versions back from doctags.
    return {
      since: getTagValue(this.node, 'since'),
      deleted: getTagValue(this.node, 'deleted'),
      deprecated: getTagValue(this.node, 'deprecated')
    };
  }

  get attic(): Dictionary<any> {
    const pv = this.api.getPrivateData(getPath(this.node));
    if (!pv.attic) {
      pv.attic = {};
    }
    return pv.attic;
  }

  addToAttic(name: string, value: any): this {
    if (value) {
      this.attic[name] = value;
    }
    return this;
  }

  addInternalData(key: string, internalData: InternalData): void {
    this.internalData[key] = internalData;
  }

  addVersionInfo(info: VersionInfo) {
    if (info.since) {
      setTag(this.node, 'since', info.since);
    }
    if (info.deprecated) {
      setTag(this.node, 'deprecated', info.deprecated);
    }
  }

  protected get api() {
    return getAPI(this.node);
  }


  get sourceFile() {
    return this.node.getSourceFile();
  }

  get annotations(): Annotations|undefined {
    if( Node.isJSDocableNode(this.node)) {
      return new Annotations(this.node);
    }
    return undefined;
  }
}
