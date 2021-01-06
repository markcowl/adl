import { ApiVersionParameter } from "../aliases/ApiVersionParameter";
import { OperationListResult } from "../models/OperationListResult";
export interface Operations {
    /**
     * @description Lists all of the available Key Vault Rest API operations.
     * @since 2019-09-01
     * @http GET /providers/Microsoft.KeyVault/operations
     * @tag Operations
     * @param api_version - Client Api Version.
     * @return 200 - OK. The request has succeeded.
     */
    List(api_version: ApiVersionParameter, body?: Body<file, "application/json">): [(code: 200, mediaType: "application/json") => {
        body: OperationListResult;
    }];
}
