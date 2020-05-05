import { Element, ElementArray } from '../element';
import { Header } from './header';
import * as base from '../operation';

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

export class Operation extends base.Operation {

}

export class Request extends base.Request {

}

export class Response extends base.Response {

}

export class Parameter extends base.Parameter {

}

export class HttpProtocol extends Element {
  headers = new ElementArray<Header>();
  authentications = new ElementArray<Authentication>();
  connections = new ElementArray<Connection>();
  operations = new ElementArray<Operation>();
  requests = new ElementArray<Request>();
  responses = new ElementArray<Response>();
  parameters = new ElementArray<Parameter>();
}