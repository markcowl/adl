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
}