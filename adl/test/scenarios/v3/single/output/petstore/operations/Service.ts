export interface Service {
    /**
     * List all pets
     * @since 1.0.0
     * @http GET /pets
     * @tag pets
     * @param limit - How many items to return at one time (max 100)
     * @return 200 - A paged array of pets
     * @return default - unexpected error
     */
    listPets(limit?: Http.Query<int32>): Http.Response<'200', Pets, 'application/json'> | Http.Response<Http.Default, Error, 'application/json'>;
    /**
     * Create a pet
     * @since 1.0.0
     * @http POST /pets
     * @tag pets
     * @return 201 - Null response
     * @return default - unexpected error
     */
    createPets(): Http.Response<'201'> | Http.Response<Http.Default, Error, 'application/json'>;
    /**
     * Info for a specific pet
     * @since 1.0.0
     * @http GET /pets/{petId}
     * @tag pets
     * @param petId - The id of the pet to retrieve
     * @return 200 - Expected response to a valid request
     * @return default - unexpected error
     */
    showPetById(petId: Http.Path<string>): Http.Response<'200', Pet, 'application/json'> | Http.Response<Http.Default, Error, 'application/json'>;
}
