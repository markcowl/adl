/**
 * Determines the an event listener is subscribed
 */
export enum Activation  {
  /** Not active under any circumstances */
  disabled =  'disabled',

  /** Linter: when an edit is performed */
  edit = 'edit',

  /** Linter: when manually activated */
  demand =  'demand',

  /** During OAI Import */
  import = 'import',
}