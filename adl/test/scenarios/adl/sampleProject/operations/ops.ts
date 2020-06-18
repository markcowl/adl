import { Person } from '../models/person';
export interface myOperations {

  /**
   * @http GET /api/person/{name}
   * 
   * @param name the name of the person
   */
  first(person: string): [
    (code: 200) => {
      body: Person;
    }
  ]
}