export type anonymous = { valueOf: () => string };
export const anonymous = <(s: string) => anonymous>Object;

export type PathItem = string | number | symbol | anonymous;
export type Path = Array<PathItem>;


export function isAnonymous(instance: any): instance is anonymous {
  return instance && typeof instance === 'object';
}

export class Tracker {

  add(inTarget: Path, inSource: Path) {
    // 
  }
}