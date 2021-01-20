import { InterfaceStatementNode, ModelStatementNode, ModelType, Type, Statement } from "../compiler/types";
import { Program } from "../compiler/program";
import { parse } from "../compiler/parser.js";
import { resource } from "./rest.js";

function parseStatement<TNode extends Statement>(adlStatement: string): TNode {
  // We're assuming that the parser will throw on bad input,
  // so no error handling is added at this level
  const script = parse(adlStatement);

  if (script.statements.length === 0) {
    throw new Error("No statements found in parsed input.");
  }

  return script.statements[0] as TNode;
}

// TODO: We can't name this ArmTrackedResource because that name
//       is already taken.  Is this name sufficient?
export function TrackedResource(
  program: Program,
  target: Type,
  resourceRoot: string,
  propertyType: Type) {

  const checker = program.checker;
  if (checker === undefined) {
    throw new Error("Program does not have a checker assigned");
  }

  if (target.kind === "Interface") {
    if (propertyType.kind === "Model") {
      // Create the resource model type and evaluate it
      const resourceModelNode =
        parseStatement<ModelStatementNode>(
          `model ${target.name}Resource = ArmTrackedResource<${propertyType.name}>;`);
      const resourceModelType = checker.getTypeForNode(resourceModelNode) as ModelType;

      // TODO: Add a standard API for this!
      // Add the model type to the program's global scope
      program.globalSymbols.set(resourceModelType.name, {
        kind: 'type',
        node: resourceModelNode
      });

      // Create a temporary interface type and parse it so
      // that we can harvest its interface properties
      const resourceInterfaceNode = parseStatement<InterfaceStatementNode>(
        `interface Temp { \
          @get get(@path subscriptionId: string, @path resourceGroup: string, @path name: string): ArmResponse<${resourceModelType.name}>; \
          @put createOrUpdate(@path subscriptionId: string, @path resourceGroup: string, @path name: string, @body resource: ${resourceModelType.name}) : ArmResponse<${resourceModelType.name}>; \
          @patch update(@path subscriptionId: string, @path resourceGroup: string, @path name: string, @body resource: ${resourceModelType.name}): ArmResponse<${resourceModelType.name}>; \
          @_delete delete(@path subscriptionId: string, @path resourceGroup: string, @path name: string): ArmResponse; \
        }`
      );

      // Add all of the properties from the parsed interface
      for (const prop of resourceInterfaceNode.properties) {
        target.properties.set(prop.id.sv, checker.checkInterfaceProperty(prop));
      }

      // Add the @resource decorator
      resource(program, target, `/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/${resourceRoot}/{name}`);
    } else {
      throw new Error("TrackedResource property type must be a model");
    }
  } else {
    throw new Error("TrackedResource decorator can only be applied to interfaces");
  }
}
