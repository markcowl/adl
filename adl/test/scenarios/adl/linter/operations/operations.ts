/**
 * A simple Book Store API
 */

export interface BookStoreOperations {
  checkAvailability(name: string): [
    (code: 200) => {
      body: boolean
    }
  ];
}

