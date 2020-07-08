import { Activation } from './activation';

export interface EventListener {
  /**
   * Identifies under what circumstances this listener is activated under
   *
   * 'edit', 'demand' - linting
   * 'import' - during OAI import
   *
   */
  activation: Activation;
  id?: string;
  meta: ListenerMetaData;
  data?: any;
}

export interface ListenerMetaData {

}