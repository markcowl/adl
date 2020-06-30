import { Person } from '../models/person';

// response collections can have elements that are FunctionTypes or that are TypeReferences to FunctionTypes

type FourHundred = 400;
type FiveHundred = 500;

type TheseResponses = FourHundred | FiveHundred;

export type responseCollection = [
  (code: TheseResponses, mediaType: 'application/json') => {
    isException: true
  },
  (code: 404 | FourHundred) => {
    isException: true
  },
  (code: 200) => {
    body: Person
  },
  // response4<200>,
  response1,
  response2,
  response3,

]

/** response has result declared inline */
export type response1 = (code: 500) => {
  isException: true
}

/** response has result declared as a reference to a typeAlias */
export type response2 = (code: 201) => responseValue;

/** response has result declared as a reference to an interface */
export type response3 = (code: 202) => responseValue2;

export type responseValue = {
  body: Person;
}

export type response4<c> = (code: c) => {
  body: Person,
  isException: true
}

// a result interface can get confused as a model type. That's just life.

/**
 * @result
 */
export interface responseValue2 {
  body: Person;
}


// operation interfaces have methods.

/**
 * this is some text 
 * 
 * @param     paramname comment text
 * @happy        this is all comment text
 * @since      this is all comment text too
 * 
 */
export interface myOperations {

  /**
   * @http GET /api/person/{name}
   * 
   * @param name the name of the person
   */
  first(person: string & MaxLength<25>): [
    (code: 200) => {
      body: Person;
    }
  ]
}