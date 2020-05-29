export interface Service {
    /**
     * @description Adds an application that is created from a resource group.
     * @http POST /#X-Amz-Target=EC2WindowsBarleyService.CreateApplication
     * @since 2018-11-25
     */
    CreateApplication(_0?: Http.Header<string, 'X-Amz-Content-Sha256'>, _1?: Http.Header<string, 'X-Amz-Date'>, _2?: Http.Header<string, 'X-Amz-Algorithm'>, _3?: Http.Header<string, 'X-Amz-Credential'>, _4?: Http.Header<string, 'X-Amz-Security-Token'>, _5?: Http.Header<string, 'X-Amz-Signature'>, _6?: Http.Header<string, 'X-Amz-SignedHeaders'>, X_Amz_Target: Http.Header<"EC2WindowsBarleyService.CreateApplication", 'X-Amz-Target'>);
    /**
     * @description Creates a custom component by grouping similar standalone instances to monitor.
     * @http POST /#X-Amz-Target=EC2WindowsBarleyService.CreateComponent
     * @since 2018-11-25
     */
    CreateComponent(_0?: Http.Header<string, 'X-Amz-Content-Sha256'>, _1?: Http.Header<string, 'X-Amz-Date'>, _2?: Http.Header<string, 'X-Amz-Algorithm'>, _3?: Http.Header<string, 'X-Amz-Credential'>, _4?: Http.Header<string, 'X-Amz-Security-Token'>, _5?: Http.Header<string, 'X-Amz-Signature'>, _6?: Http.Header<string, 'X-Amz-SignedHeaders'>, X_Amz_Target: Http.Header<"EC2WindowsBarleyService.CreateComponent", 'X-Amz-Target'>);
    /**
     * @description Adds an log pattern to a <code>LogPatternSet</code>.
     * @http POST /#X-Amz-Target=EC2WindowsBarleyService.CreateLogPattern
     * @since 2018-11-25
     */
    CreateLogPattern(_0?: Http.Header<string, 'X-Amz-Content-Sha256'>, _1?: Http.Header<string, 'X-Amz-Date'>, _2?: Http.Header<string, 'X-Amz-Algorithm'>, _3?: Http.Header<string, 'X-Amz-Credential'>, _4?: Http.Header<string, 'X-Amz-Security-Token'>, _5?: Http.Header<string, 'X-Amz-Signature'>, _6?: Http.Header<string, 'X-Amz-SignedHeaders'>, X_Amz_Target: Http.Header<"EC2WindowsBarleyService.CreateLogPattern", 'X-Amz-Target'>);
    /**
     * @description Removes the specified application from monitoring. Does not delete the application.
     * @http POST /#X-Amz-Target=EC2WindowsBarleyService.DeleteApplication
     * @since 2018-11-25
     */
    DeleteApplication(_0?: Http.Header<string, 'X-Amz-Content-Sha256'>, _1?: Http.Header<string, 'X-Amz-Date'>, _2?: Http.Header<string, 'X-Amz-Algorithm'>, _3?: Http.Header<string, 'X-Amz-Credential'>, _4?: Http.Header<string, 'X-Amz-Security-Token'>, _5?: Http.Header<string, 'X-Amz-Signature'>, _6?: Http.Header<string, 'X-Amz-SignedHeaders'>, X_Amz_Target: Http.Header<"EC2WindowsBarleyService.DeleteApplication", 'X-Amz-Target'>);
    /**
     * @description Ungroups a custom component. When you ungroup custom components, all applicable monitors that are set up for the component are removed and the instances revert to their standalone status.
     * @http POST /#X-Amz-Target=EC2WindowsBarleyService.DeleteComponent
     * @since 2018-11-25
     */
    DeleteComponent(_0?: Http.Header<string, 'X-Amz-Content-Sha256'>, _1?: Http.Header<string, 'X-Amz-Date'>, _2?: Http.Header<string, 'X-Amz-Algorithm'>, _3?: Http.Header<string, 'X-Amz-Credential'>, _4?: Http.Header<string, 'X-Amz-Security-Token'>, _5?: Http.Header<string, 'X-Amz-Signature'>, _6?: Http.Header<string, 'X-Amz-SignedHeaders'>, X_Amz_Target: Http.Header<"EC2WindowsBarleyService.DeleteComponent", 'X-Amz-Target'>);
    /**
     * @description Removes the specified log pattern from a <code>LogPatternSet</code>.
     * @http POST /#X-Amz-Target=EC2WindowsBarleyService.DeleteLogPattern
     * @since 2018-11-25
     */
    DeleteLogPattern(_0?: Http.Header<string, 'X-Amz-Content-Sha256'>, _1?: Http.Header<string, 'X-Amz-Date'>, _2?: Http.Header<string, 'X-Amz-Algorithm'>, _3?: Http.Header<string, 'X-Amz-Credential'>, _4?: Http.Header<string, 'X-Amz-Security-Token'>, _5?: Http.Header<string, 'X-Amz-Signature'>, _6?: Http.Header<string, 'X-Amz-SignedHeaders'>, X_Amz_Target: Http.Header<"EC2WindowsBarleyService.DeleteLogPattern", 'X-Amz-Target'>);
    /**
     * @description Describes the application.
     * @http POST /#X-Amz-Target=EC2WindowsBarleyService.DescribeApplication
     * @since 2018-11-25
     */
    DescribeApplication(_0?: Http.Header<string, 'X-Amz-Content-Sha256'>, _1?: Http.Header<string, 'X-Amz-Date'>, _2?: Http.Header<string, 'X-Amz-Algorithm'>, _3?: Http.Header<string, 'X-Amz-Credential'>, _4?: Http.Header<string, 'X-Amz-Security-Token'>, _5?: Http.Header<string, 'X-Amz-Signature'>, _6?: Http.Header<string, 'X-Amz-SignedHeaders'>, X_Amz_Target: Http.Header<"EC2WindowsBarleyService.DescribeApplication", 'X-Amz-Target'>);
    /**
     * @description Describes a component and lists the resources that are grouped together in a component.
     * @http POST /#X-Amz-Target=EC2WindowsBarleyService.DescribeComponent
     * @since 2018-11-25
     */
    DescribeComponent(_0?: Http.Header<string, 'X-Amz-Content-Sha256'>, _1?: Http.Header<string, 'X-Amz-Date'>, _2?: Http.Header<string, 'X-Amz-Algorithm'>, _3?: Http.Header<string, 'X-Amz-Credential'>, _4?: Http.Header<string, 'X-Amz-Security-Token'>, _5?: Http.Header<string, 'X-Amz-Signature'>, _6?: Http.Header<string, 'X-Amz-SignedHeaders'>, X_Amz_Target: Http.Header<"EC2WindowsBarleyService.DescribeComponent", 'X-Amz-Target'>);
    /**
     * @description Describes the monitoring configuration of the component.
     * @http POST /#X-Amz-Target=EC2WindowsBarleyService.DescribeComponentConfiguration
     * @since 2018-11-25
     */
    DescribeComponentConfiguration(_0?: Http.Header<string, 'X-Amz-Content-Sha256'>, _1?: Http.Header<string, 'X-Amz-Date'>, _2?: Http.Header<string, 'X-Amz-Algorithm'>, _3?: Http.Header<string, 'X-Amz-Credential'>, _4?: Http.Header<string, 'X-Amz-Security-Token'>, _5?: Http.Header<string, 'X-Amz-Signature'>, _6?: Http.Header<string, 'X-Amz-SignedHeaders'>, X_Amz_Target: Http.Header<"EC2WindowsBarleyService.DescribeComponentConfiguration", 'X-Amz-Target'>);
    /**
     * @description Describes the recommended monitoring configuration of the component.
     * @http POST /#X-Amz-Target=EC2WindowsBarleyService.DescribeComponentConfigurationRecommendation
     * @since 2018-11-25
     */
    DescribeComponentConfigurationRecommendation(_0?: Http.Header<string, 'X-Amz-Content-Sha256'>, _1?: Http.Header<string, 'X-Amz-Date'>, _2?: Http.Header<string, 'X-Amz-Algorithm'>, _3?: Http.Header<string, 'X-Amz-Credential'>, _4?: Http.Header<string, 'X-Amz-Security-Token'>, _5?: Http.Header<string, 'X-Amz-Signature'>, _6?: Http.Header<string, 'X-Amz-SignedHeaders'>, X_Amz_Target: Http.Header<"EC2WindowsBarleyService.DescribeComponentConfigurationRecommendation", 'X-Amz-Target'>);
    /**
     * @description Describe a specific log pattern from a <code>LogPatternSet</code>.
     * @http POST /#X-Amz-Target=EC2WindowsBarleyService.DescribeLogPattern
     * @since 2018-11-25
     */
    DescribeLogPattern(_0?: Http.Header<string, 'X-Amz-Content-Sha256'>, _1?: Http.Header<string, 'X-Amz-Date'>, _2?: Http.Header<string, 'X-Amz-Algorithm'>, _3?: Http.Header<string, 'X-Amz-Credential'>, _4?: Http.Header<string, 'X-Amz-Security-Token'>, _5?: Http.Header<string, 'X-Amz-Signature'>, _6?: Http.Header<string, 'X-Amz-SignedHeaders'>, X_Amz_Target: Http.Header<"EC2WindowsBarleyService.DescribeLogPattern", 'X-Amz-Target'>);
    /**
     * @description Describes an anomaly or error with the application.
     * @http POST /#X-Amz-Target=EC2WindowsBarleyService.DescribeObservation
     * @since 2018-11-25
     */
    DescribeObservation(_0?: Http.Header<string, 'X-Amz-Content-Sha256'>, _1?: Http.Header<string, 'X-Amz-Date'>, _2?: Http.Header<string, 'X-Amz-Algorithm'>, _3?: Http.Header<string, 'X-Amz-Credential'>, _4?: Http.Header<string, 'X-Amz-Security-Token'>, _5?: Http.Header<string, 'X-Amz-Signature'>, _6?: Http.Header<string, 'X-Amz-SignedHeaders'>, X_Amz_Target: Http.Header<"EC2WindowsBarleyService.DescribeObservation", 'X-Amz-Target'>);
    /**
     * @description Describes an application problem.
     * @http POST /#X-Amz-Target=EC2WindowsBarleyService.DescribeProblem
     * @since 2018-11-25
     */
    DescribeProblem(_0?: Http.Header<string, 'X-Amz-Content-Sha256'>, _1?: Http.Header<string, 'X-Amz-Date'>, _2?: Http.Header<string, 'X-Amz-Algorithm'>, _3?: Http.Header<string, 'X-Amz-Credential'>, _4?: Http.Header<string, 'X-Amz-Security-Token'>, _5?: Http.Header<string, 'X-Amz-Signature'>, _6?: Http.Header<string, 'X-Amz-SignedHeaders'>, X_Amz_Target: Http.Header<"EC2WindowsBarleyService.DescribeProblem", 'X-Amz-Target'>);
    /**
     * @description Describes the anomalies or errors associated with the problem.
     * @http POST /#X-Amz-Target=EC2WindowsBarleyService.DescribeProblemObservations
     * @since 2018-11-25
     */
    DescribeProblemObservations(_0?: Http.Header<string, 'X-Amz-Content-Sha256'>, _1?: Http.Header<string, 'X-Amz-Date'>, _2?: Http.Header<string, 'X-Amz-Algorithm'>, _3?: Http.Header<string, 'X-Amz-Credential'>, _4?: Http.Header<string, 'X-Amz-Security-Token'>, _5?: Http.Header<string, 'X-Amz-Signature'>, _6?: Http.Header<string, 'X-Amz-SignedHeaders'>, X_Amz_Target: Http.Header<"EC2WindowsBarleyService.DescribeProblemObservations", 'X-Amz-Target'>);
    /**
     * @description Lists the IDs of the applications that you are monitoring.
     * @http POST /#X-Amz-Target=EC2WindowsBarleyService.ListApplications
     * @since 2018-11-25
     */
    ListApplications(_0?: Http.Header<string, 'X-Amz-Content-Sha256'>, _1?: Http.Header<string, 'X-Amz-Date'>, _2?: Http.Header<string, 'X-Amz-Algorithm'>, _3?: Http.Header<string, 'X-Amz-Credential'>, _4?: Http.Header<string, 'X-Amz-Security-Token'>, _5?: Http.Header<string, 'X-Amz-Signature'>, _6?: Http.Header<string, 'X-Amz-SignedHeaders'>, MaxResults?: Http.Query<string>, NextToken?: Http.Query<string>, X_Amz_Target: Http.Header<"EC2WindowsBarleyService.ListApplications", 'X-Amz-Target'>);
    /**
     * @description Lists the auto-grouped, standalone, and custom components of the application.
     * @http POST /#X-Amz-Target=EC2WindowsBarleyService.ListComponents
     * @since 2018-11-25
     */
    ListComponents(_0?: Http.Header<string, 'X-Amz-Content-Sha256'>, _1?: Http.Header<string, 'X-Amz-Date'>, _2?: Http.Header<string, 'X-Amz-Algorithm'>, _3?: Http.Header<string, 'X-Amz-Credential'>, _4?: Http.Header<string, 'X-Amz-Security-Token'>, _5?: Http.Header<string, 'X-Amz-Signature'>, _6?: Http.Header<string, 'X-Amz-SignedHeaders'>, MaxResults?: Http.Query<string>, NextToken?: Http.Query<string>, X_Amz_Target: Http.Header<"EC2WindowsBarleyService.ListComponents", 'X-Amz-Target'>);
    /**
     * @description <p> Lists the INFO, WARN, and ERROR events for periodic configuration updates performed by Application Insights. Examples of events represented are: </p> <ul> <li> <p>INFO: creating a new alarm or updating an alarm threshold.</p> </li> <li> <p>WARN: alarm not created due to insufficient data points used to predict thresholds.</p> </li> <li> <p>ERROR: alarm not created due to permission errors or exceeding quotas. </p> </li> </ul>
     * @http POST /#X-Amz-Target=EC2WindowsBarleyService.ListConfigurationHistory
     * @since 2018-11-25
     */
    ListConfigurationHistory(_0?: Http.Header<string, 'X-Amz-Content-Sha256'>, _1?: Http.Header<string, 'X-Amz-Date'>, _2?: Http.Header<string, 'X-Amz-Algorithm'>, _3?: Http.Header<string, 'X-Amz-Credential'>, _4?: Http.Header<string, 'X-Amz-Security-Token'>, _5?: Http.Header<string, 'X-Amz-Signature'>, _6?: Http.Header<string, 'X-Amz-SignedHeaders'>, MaxResults?: Http.Query<string>, NextToken?: Http.Query<string>, X_Amz_Target: Http.Header<"EC2WindowsBarleyService.ListConfigurationHistory", 'X-Amz-Target'>);
    /**
     * @description Lists the log pattern sets in the specific application.
     * @http POST /#X-Amz-Target=EC2WindowsBarleyService.ListLogPatternSets
     * @since 2018-11-25
     */
    ListLogPatternSets(_0?: Http.Header<string, 'X-Amz-Content-Sha256'>, _1?: Http.Header<string, 'X-Amz-Date'>, _2?: Http.Header<string, 'X-Amz-Algorithm'>, _3?: Http.Header<string, 'X-Amz-Credential'>, _4?: Http.Header<string, 'X-Amz-Security-Token'>, _5?: Http.Header<string, 'X-Amz-Signature'>, _6?: Http.Header<string, 'X-Amz-SignedHeaders'>, MaxResults?: Http.Query<string>, NextToken?: Http.Query<string>, X_Amz_Target: Http.Header<"EC2WindowsBarleyService.ListLogPatternSets", 'X-Amz-Target'>);
    /**
     * @description Lists the log patterns in the specific log <code>LogPatternSet</code>.
     * @http POST /#X-Amz-Target=EC2WindowsBarleyService.ListLogPatterns
     * @since 2018-11-25
     */
    ListLogPatterns(_0?: Http.Header<string, 'X-Amz-Content-Sha256'>, _1?: Http.Header<string, 'X-Amz-Date'>, _2?: Http.Header<string, 'X-Amz-Algorithm'>, _3?: Http.Header<string, 'X-Amz-Credential'>, _4?: Http.Header<string, 'X-Amz-Security-Token'>, _5?: Http.Header<string, 'X-Amz-Signature'>, _6?: Http.Header<string, 'X-Amz-SignedHeaders'>, MaxResults?: Http.Query<string>, NextToken?: Http.Query<string>, X_Amz_Target: Http.Header<"EC2WindowsBarleyService.ListLogPatterns", 'X-Amz-Target'>);
    /**
     * @description Lists the problems with your application.
     * @http POST /#X-Amz-Target=EC2WindowsBarleyService.ListProblems
     * @since 2018-11-25
     */
    ListProblems(_0?: Http.Header<string, 'X-Amz-Content-Sha256'>, _1?: Http.Header<string, 'X-Amz-Date'>, _2?: Http.Header<string, 'X-Amz-Algorithm'>, _3?: Http.Header<string, 'X-Amz-Credential'>, _4?: Http.Header<string, 'X-Amz-Security-Token'>, _5?: Http.Header<string, 'X-Amz-Signature'>, _6?: Http.Header<string, 'X-Amz-SignedHeaders'>, MaxResults?: Http.Query<string>, NextToken?: Http.Query<string>, X_Amz_Target: Http.Header<"EC2WindowsBarleyService.ListProblems", 'X-Amz-Target'>);
    /**
     * @description Retrieve a list of the tags (keys and values) that are associated with a specified application. A <i>tag</i> is a label that you optionally define and associate with an application. Each tag consists of a required <i>tag key</i> and an optional associated <i>tag value</i>. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.
     * @http POST /#X-Amz-Target=EC2WindowsBarleyService.ListTagsForResource
     * @since 2018-11-25
     */
    ListTagsForResource(_0?: Http.Header<string, 'X-Amz-Content-Sha256'>, _1?: Http.Header<string, 'X-Amz-Date'>, _2?: Http.Header<string, 'X-Amz-Algorithm'>, _3?: Http.Header<string, 'X-Amz-Credential'>, _4?: Http.Header<string, 'X-Amz-Security-Token'>, _5?: Http.Header<string, 'X-Amz-Signature'>, _6?: Http.Header<string, 'X-Amz-SignedHeaders'>, X_Amz_Target: Http.Header<"EC2WindowsBarleyService.ListTagsForResource", 'X-Amz-Target'>);
    /**
     * @description <p>Add one or more tags (keys and values) to a specified application. A <i>tag</i> is a label that you optionally define and associate with an application. Tags can help you categorize and manage application in different ways, such as by purpose, owner, environment, or other criteria. </p> <p>Each tag consists of a required <i>tag key</i> and an associated <i>tag value</i>, both of which you define. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.</p>
     * @http POST /#X-Amz-Target=EC2WindowsBarleyService.TagResource
     * @since 2018-11-25
     */
    TagResource(_0?: Http.Header<string, 'X-Amz-Content-Sha256'>, _1?: Http.Header<string, 'X-Amz-Date'>, _2?: Http.Header<string, 'X-Amz-Algorithm'>, _3?: Http.Header<string, 'X-Amz-Credential'>, _4?: Http.Header<string, 'X-Amz-Security-Token'>, _5?: Http.Header<string, 'X-Amz-Signature'>, _6?: Http.Header<string, 'X-Amz-SignedHeaders'>, X_Amz_Target: Http.Header<"EC2WindowsBarleyService.TagResource", 'X-Amz-Target'>);
    /**
     * @description Remove one or more tags (keys and values) from a specified application.
     * @http POST /#X-Amz-Target=EC2WindowsBarleyService.UntagResource
     * @since 2018-11-25
     */
    UntagResource(_0?: Http.Header<string, 'X-Amz-Content-Sha256'>, _1?: Http.Header<string, 'X-Amz-Date'>, _2?: Http.Header<string, 'X-Amz-Algorithm'>, _3?: Http.Header<string, 'X-Amz-Credential'>, _4?: Http.Header<string, 'X-Amz-Security-Token'>, _5?: Http.Header<string, 'X-Amz-Signature'>, _6?: Http.Header<string, 'X-Amz-SignedHeaders'>, X_Amz_Target: Http.Header<"EC2WindowsBarleyService.UntagResource", 'X-Amz-Target'>);
    /**
     * @description Updates the application.
     * @http POST /#X-Amz-Target=EC2WindowsBarleyService.UpdateApplication
     * @since 2018-11-25
     */
    UpdateApplication(_0?: Http.Header<string, 'X-Amz-Content-Sha256'>, _1?: Http.Header<string, 'X-Amz-Date'>, _2?: Http.Header<string, 'X-Amz-Algorithm'>, _3?: Http.Header<string, 'X-Amz-Credential'>, _4?: Http.Header<string, 'X-Amz-Security-Token'>, _5?: Http.Header<string, 'X-Amz-Signature'>, _6?: Http.Header<string, 'X-Amz-SignedHeaders'>, X_Amz_Target: Http.Header<"EC2WindowsBarleyService.UpdateApplication", 'X-Amz-Target'>);
    /**
     * @description Updates the custom component name and/or the list of resources that make up the component.
     * @http POST /#X-Amz-Target=EC2WindowsBarleyService.UpdateComponent
     * @since 2018-11-25
     */
    UpdateComponent(_0?: Http.Header<string, 'X-Amz-Content-Sha256'>, _1?: Http.Header<string, 'X-Amz-Date'>, _2?: Http.Header<string, 'X-Amz-Algorithm'>, _3?: Http.Header<string, 'X-Amz-Credential'>, _4?: Http.Header<string, 'X-Amz-Security-Token'>, _5?: Http.Header<string, 'X-Amz-Signature'>, _6?: Http.Header<string, 'X-Amz-SignedHeaders'>, X_Amz_Target: Http.Header<"EC2WindowsBarleyService.UpdateComponent", 'X-Amz-Target'>);
    /**
     * @description Updates the monitoring configurations for the component. The configuration input parameter is an escaped JSON of the configuration and should match the schema of what is returned by <code>DescribeComponentConfigurationRecommendation</code>.
     * @http POST /#X-Amz-Target=EC2WindowsBarleyService.UpdateComponentConfiguration
     * @since 2018-11-25
     */
    UpdateComponentConfiguration(_0?: Http.Header<string, 'X-Amz-Content-Sha256'>, _1?: Http.Header<string, 'X-Amz-Date'>, _2?: Http.Header<string, 'X-Amz-Algorithm'>, _3?: Http.Header<string, 'X-Amz-Credential'>, _4?: Http.Header<string, 'X-Amz-Security-Token'>, _5?: Http.Header<string, 'X-Amz-Signature'>, _6?: Http.Header<string, 'X-Amz-SignedHeaders'>, X_Amz_Target: Http.Header<"EC2WindowsBarleyService.UpdateComponentConfiguration", 'X-Amz-Target'>);
    /**
     * @description Adds a log pattern to a <code>LogPatternSet</code>.
     * @http POST /#X-Amz-Target=EC2WindowsBarleyService.UpdateLogPattern
     * @since 2018-11-25
     */
    UpdateLogPattern(_0?: Http.Header<string, 'X-Amz-Content-Sha256'>, _1?: Http.Header<string, 'X-Amz-Date'>, _2?: Http.Header<string, 'X-Amz-Algorithm'>, _3?: Http.Header<string, 'X-Amz-Credential'>, _4?: Http.Header<string, 'X-Amz-Security-Token'>, _5?: Http.Header<string, 'X-Amz-Signature'>, _6?: Http.Header<string, 'X-Amz-SignedHeaders'>, X_Amz_Target: Http.Header<"EC2WindowsBarleyService.UpdateLogPattern", 'X-Amz-Target'>);
}
