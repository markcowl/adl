import { Alias } from '../alias';
import { Element, ElementArray } from '../element';
import { Body } from './body';
import { Header } from './header';
import { Operation } from './operation';
import { Parameter } from './parameter';
import { Request } from './request';
import { Response } from './response';

export class Authentication extends Element {

}

export class Connection extends Element {
  description?: string;
  variables = new ElementArray<ConnectionVariable>();

  constructor(public url: string, initializer?: Partial<Connection>) {
    super();
    this.initialize(initializer);
  }
}

// Consider modeling this as a Parameter once that's fleshed out?
export class ConnectionVariable extends Element {
  /** A description of the variable. */
  description?: string;

  /** The default value to use when substituting the variable in the connection URL. */
  defaultValue?: string;

  /**
   * When defined, any string value may substitute the variable.
   * Otherwise, only values in this array may do so.
   */
  allowedValues?: Array<string>;

  /**
   * @param name The name of the variable as it appears in {curly braces} in the connection URL.
   */
  constructor(public name: string, initializer?: Partial<ConnectionVariable>) {
    super();
    this.initialize(initializer);
  }
}

export class HttpProtocol extends Element {
  headers = new ElementArray<Header|Alias<Header>>();
  authentications = new ElementArray<Authentication>();
  connections = new ElementArray<Connection>();
  operations = new ElementArray<Operation>();
  requests = new ElementArray<Request | Alias<Request>>();
  responses = new ElementArray<Response| Alias<Response>>();
  bodies = new ElementArray<Body|Alias<Body>>();
  parameters = new ElementArray<Parameter|Alias<Parameter>>();
}