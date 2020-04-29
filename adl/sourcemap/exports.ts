export type anonymous = { valueOf: () => string };
export const anonymous = <(s: string) => anonymous>Object;

export type Step = string | number | symbol | anonymous;
export type Path = Array<Step>;

export * from './proxies';

export function isAnonymous(instance: any): instance is anonymous {
  return instance && typeof instance === 'object';
}

export class Tracker {

  add(inTarget: Path, inSource: Path) {
    // 
  }
}