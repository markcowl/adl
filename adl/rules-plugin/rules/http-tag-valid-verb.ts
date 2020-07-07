import { getTagValue, Rule } from '@azure-tools/adl.core';
export default <Rule>{
  activation: 'edit',
  meta: {
    id: 'http-tag-valid-verb',
    severity: 'warning',
    description: 'Each operation definition must have a HTTP verb specified. This verb is specified is in the http tag. The permissible values are DELETE/GET/PUT/PATCH/HEAD/OPTIONS/POST/TRACE.',
    documentationUrl: 'PLACEHOLDER',
    category: 'SDK Warning'
  },
  onOperation: (model, operation) => {
    const tag = getTagValue(operation, 'http');
    const verbs = [
      'DELETE',
      'GET',
      'PUT',
      'PATCH',
      'HEAD',
      'OPTIONS',
      'POST',
      'TRACE'
    ];

    if (tag !== undefined && !verbs.includes(tag.split(' ')[0].toUpperCase())) {
      return {
        message: `The operation '${operation.name}' contains an invalid http tag. The tag must have the format '@http <HTTP VERB> <PATH>' and the permissible values for HTTP VERB are DELETE, GET, PUT, PATCH, HEAD, OPTIONS, POST, TRACE.`
      };
    }

    return;
  }
};

