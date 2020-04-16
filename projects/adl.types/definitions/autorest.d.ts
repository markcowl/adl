
/** overrides the desired name on a method  */
declare function Name(name: string);

declare interface Configuration {
  [key: string]: any;
  directive?: any;

}

declare var configuration: Configuration;

declare interface Headers<T extends {}> { }
declare interface Cookies<T extends {}> { }
declare interface Queries<T extends {}> { }
