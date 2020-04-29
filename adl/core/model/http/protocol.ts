import { Element, ElementArray } from '../element';
import { Header } from './header';
import * as base from '../operation';
import { trackTarget } from '@azure-tools/sourcemap';

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
  headers = trackTarget(new ElementArray<Header>());
  authentications = trackTarget(new ElementArray<Authentication>());
  connections = trackTarget(new ElementArray<Connection>());
  operations = trackTarget(new ElementArray<Operation>());
  requests = trackTarget(new ElementArray<Request>());
  responses = trackTarget(new ElementArray<Response>());
  parameters = trackTarget(new ElementArray<Parameter>());
}