import * as base from '../operation';


export class Parameter extends base.Parameter {

}

export enum RenderStyle {
  /** Path-style parameters defined by RFC6570 */
  Matrix = 'matrix',

  /** Label style parameters defined by RFC6570 */
  Label = 'label',

  /** Simple style parameters defined by RFC6570. This option replaces collectionFormat with a csv value from OpenAPI 2.0. */
  Simple = 'simple',

  /** Form style parameters defined by RFC6570. This option replaces collectionFormat with a csv (when explode is false) or multi (when explode is true) value from OpenAPI 2.0. */
  Form = 'form',

  /** Space separated array values. This option replaces collectionFormat equal to ssv from OpenAPI 2.0. */
  SpaceDelimited = 'spaceDelimited',

  /** Pipe separated array values. This option replaces collectionFormat equal to pipes from OpenAPI 2.0. */
  PipeDelimited = 'pipeDelimited',

  /** Provides a simple way of rendering nested objects using form parameters. */
  DeepObject = 'deepObject'
}

