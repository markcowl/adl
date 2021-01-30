## New ADL-RPaaS Elements
- KeyCredential: Handles storage-like keys
- @PrivatendpointProvider
- @ETag: adds an 'eTag' property to a model, and optional 'eTag' headers to requests, note that this might belong in ADL-Rest
- ResourceType: strign representing a resource type
- DnsPart: constrained string that obeys rules for DNS segment
- DNSName: constrined string for DNS Name
- IPAddress: constrined string for IP Address
- IPAddressRange: constrained string for IP address range
- IPV6Address: constrained string for IPV6 address
- IPV6Range: constrained string for IPV6 ranges
- @ResourceReference: string constraint indicating a valid resource, with paraeter to limit to a resource type.  We should also consider allowing constraints over the properties of the underlying resource (e.g. same location as the current resource)
- SequenceMap: Standard ARM representation of a Map as an array of Key/Value Pairs
- Location: reference to an ARM location
- ArmProvisioningState: a closed enumeration of states; can be extended by individual RPs
### Additions to resource models
- Automatically add read-only creation and modification date fields to tracked resources
- We are missing client-side naming hints for enumerations - is the right mechanism for this to define the enum as a type?
### General additions
- Allow '|' of enumerations with 'string' or * to indicate an open enumeration
- Need to decide on a representation for OData filters.  We should be opinionated about 'skip' and 'top' and decide how to specify queryable properties and combinations
- It would be very useful to clients to have a constraint that linked to the operation that listed valid values for 
properties with dynamically constrained values determined by API (for example, SKU, Kind, Size)
## Questions
- How should we represent 'Required' and 'Optional'?  Here I have treated Optional as the default
- How should we handle operations over a single logical resource that have different root paths?  For ease of modeling, we sould consider a mechanism for overwriting the base path for an operation. The proposal is to use partial versus full paths, where a partial path starts with the segment name, and a full path starts with '/'
- How should we represent polymorphism?
- How should we represent various kinds of constraints between properties?
  - Exactly One of a set of model properties can exist
  - Property A[,B,C] exists => Property D exists
  - Property A exists => Property D has constraint 'x' (for example, B has a range of values, or a single value)
  - Property A has value 'value' => Property D exists
  - Property A has value 'value' => Property D has constraint 'x'
- How can we OR a parameterized constraint like 'ResourceReference'  should we use types and then ors, as in:
   ```
      @ResourceReference("Microsoft.Network/virtualMachines")
      model virtualMachineReference | string;

      @ResourceReference("Microsoft.Sql/servers")
      model sqlServerReference: string

      model databaseReference = virtualMachineReference | sqlServerReference;

      model databases: databaseReference[]
   ```


## Notes