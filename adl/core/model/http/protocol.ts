import { Element, ElementArray } from '../element';
import { Header } from './header';
import * as base from '../operation';

export class Authentication extends Element {

}

export class Connection extends Element {

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