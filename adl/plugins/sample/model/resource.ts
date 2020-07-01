import { ApiModel, OperationGroup } from '@azure-tools/adl.core';


export class MyResource {
  constructor( private opGroup: OperationGroup) {
      
  }
}

export default {  //<ProtocolExtension>
 
  onQuery: (model: ApiModel, name: string) => {
    if( name === 'resources' )  {
      return model.operationGroups.filter( group => {
        return !!group.extends.find( each => each === 'ArmResource' );
      }).map( each => new MyResource(each));
    }
    return [];
  }
};

