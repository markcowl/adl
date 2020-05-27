declare module 'pacote' {
  export function manifest(id: string, opts?: any): Promise<any>;
}

interface Spec {
  subSpec: Spec;
  registry: boolean;
  type: 'alias'|'version'|'range'|'file'|'directory'|'git'|'remote';
  saveSpec?: string;
  fetchSpec?: string;
  hosted: any;
  name: string;
  raw: string;
}

declare module 'npm-package-arg' {
  export function resolve(name: string, spec: string, where?: any, arg?: any ): Spec;
}