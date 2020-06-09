export interface Service {
    /**
     * List all pets
     * @http GET /pets
     * @tag pets
     * @param limit - How many items to return at one time (max 100)
     * @return 200 - A paged array of pets
     * @return default - unexpected error
     * @since 1.0.0
     */
    listPets(limit?: Http.Query<int32>): Http.Response<'200', [object, Object], 'application/json'> | Http.Response<Http.Default, [object, Object], 'application/json'>;
    /**
     * Create a pet
     * @http POST /pets
     * @tag pets
     * @return 201 - Null response
     * @return default - unexpected error
     * @since 1.0.0
     */
    createPets(): Http.Response<'201'> | Http.Response<Http.Default, [object, Object], 'application/json'>;
    /**
     * Info for a specific pet
     * @http GET /pets/{petId}
     * @tag pets
     * @param petId - The id of the pet to retrieve
     * @return 200 - Expected response to a valid request
     * @return default - unexpected error
     * @since 1.0.0
     */
    showPetById(petId: Http.Path<string>): Http.Response<'200', [object, Object], 'application/json'> | Http.Response<Http.Default, [object, Object], 'application/json'>;
}
