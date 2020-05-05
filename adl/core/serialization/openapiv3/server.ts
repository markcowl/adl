import { v3 } from '@azure-tools/openapi';
import { Connection, ConnectionVariable } from '../../model/http/protocol';
import { Context } from './serializer';
import { items } from '@azure-tools/linq';
import { use } from '@azure-tools/sourcemap';

export async function processServers(server: v3.Server, $: Context) {
  const connection = new Connection(server.url, { description: server.description });
  const variables = use(server.variables);

  for (const name in variables) {
    const value = use(variables[name]);

    const variable = new ConnectionVariable(name, {
      description: value.description,
      defaultValue: value.default,
      allowedValues: use(value.enum, true)
    });

    connection.variables.push(variable);
  }

  $.api.http.connections.push(connection);
  return connection;
}
