import { schema } from '../aliases/schema';
export interface Operations {
    /**
     * @description Lists all of the available Key Vault Rest API operations.
     * @http GET /providers/Microsoft.KeyVault/operations
     * @tag Operations
     * @param api_version - Client Api Version.
     * @return 200 - OK. The request has succeeded.
     * @since 2019-09-01
     */
    List(body?: Http.Body<file, 'application/json'>, api_version: Http.Query<string, 'api-version'>): Http.Response<'200', schema, 'application/json'>;
}
