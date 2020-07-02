import { EventEmitter } from '../eventing/event-emitter';
import { ApiModel } from '../model/api-model';
import { Stopwatch } from './stopwatch';

interface MessageEvents {
  warning(message: string, offendingNode: any, msec: number): void;
  error(message: string, offendingNode: any, msec: number): void;
  log(message: string, offendingNode: any, msec: number): void;
}

interface ProcessingEvents extends MessageEvents {
  loaded(path: string, duration: number, msec: number): void;
  parsed(path: string, duration: number, msec: number): void;
  attic(path: string, duration: number, msec: number): void;

  processed(path: string, duration: number, msec: number): void;
}

export class Messages extends EventEmitter<ProcessingEvents> {
  stopwatch = new Stopwatch();
  warning(message: string, offendingNode?: any) {
    this.emit('warning', message, offendingNode, this.stopwatch.total);
  }
  error(message: string, offendingNode?: any) {
    this.emit('error', message, offendingNode, this.stopwatch.total);
  }
  log(message: string, offendingNode?: any) {
    this.emit('log', message, offendingNode, this.stopwatch.total);
  }

  constructor() {
    super();
  }
}

export class ProcessingMessages extends Messages implements EventEmitter<ProcessingEvents> {

  loaded(path: string, duration: number): void {
    this.emit('loaded', this.apiModel.fileSystem.relative(path), duration, this.stopwatch.total);
  }
  parsed(path: string, duration: number): void {
    this.emit('parsed', this.apiModel.fileSystem.relative(path), duration, this.stopwatch.total);
  }
  attic(path: string, duration: number): void {
    this.emit('attic', this.apiModel.fileSystem.relative(path), duration, this.stopwatch.total);
  }
  processed(path: string, duration: number): void {
    this.emit('processed', this.apiModel.fileSystem.relative(path), duration, this.stopwatch.total);
  }

  constructor(public readonly apiModel: ApiModel) {
    super();
  }
}