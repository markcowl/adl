import { Rule } from '@azure-tools/adl.core/linter/rule';

export default <Rule>{
  runOn: 'edit',
  meta: {
    name: 'avoid-anonymous-types',
    code: 'R2056',
    type: 'error',
    description: 'Inline/anonymous models must not be used, instead define a schema. This allows operations to share the models.',
    documentationUrl: 'https://github.com/Azure/azure-rest-api-specs/blob/master/documentation/openapi-authoring-automated-guidelines.md#r2026-avoidanonymoustypes',
    category: 'SDK Error'
  },
  onProperty: (model, property) => {
    const type = property.type;
    if (type.isInline) {
      return {
        message: 'The type of this property is inlined.',
        suggestion: [
          {

            description: 'Extract contents and create a model definition for this type.',
            fix: () => {
              const typeReference = model.createModelType(property.name, { declaration: type.declaration });
              property.type = typeReference;
              // TODO: EMIT EVENT with emit('new-type-created', position);
            }
          }
        ]
      };
    }

    return;
  }
};