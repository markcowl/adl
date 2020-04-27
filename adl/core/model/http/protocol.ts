import { ElementArray, Element } from '../element';
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
  headers = new ElementArray<Header>(this, 'headers');
  authentications = new ElementArray<Authentication>(this, 'authentications');
  connections = new ElementArray<Connection>(this, 'connections');
  operations = new ElementArray<Operation>(this, 'operations');
  requests = new ElementArray<Request>(this, 'requests');
  responses = new ElementArray<Response>(this, 'responses');
  parameters = new ElementArray<Parameter>(this, 'parameters');
}