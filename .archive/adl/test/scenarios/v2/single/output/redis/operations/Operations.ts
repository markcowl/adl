import { ApiVersionParameter } from "../aliases/ApiVersionParameter";
import { OperationListResult } from "../models/OperationListResult";
export interface Operations {
    /**
     * @description Lists all of the available REST API operations of the Microsoft.Cache provider.
     * @since 2018-03-01
     * @http GET /providers/Microsoft.Cache/operations
     * @tag Operations
     * @param api_version - Client Api Version.
     * @return 200 - Success. The response describes the list of operations.
     */
    List(api_version: ApiVersionParameter): [(code: 200, mediaType: "application/json") => {
        body: OperationListResult;
    }];
}
