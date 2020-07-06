import { Node } from 'ts-morph';
import { TSElement } from '../typescript/typescript-element';

export class Header extends TSElement<Node> {
  static isAllowedNode(node: Node): node is Node { return true; }
}

