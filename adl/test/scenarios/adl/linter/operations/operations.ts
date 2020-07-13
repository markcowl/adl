/**
 * A simple Book Store API
 */
export interface BookStoreOperations {
  CheckAvailability(Aame: string): [
    (code: 200) => {
      body: boolean
    }
  ];
}

