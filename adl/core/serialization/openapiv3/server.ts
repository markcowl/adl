import { v3 } from '@azure-tools/openapi';
import { Connection, ConnectionVariable } from '../../model/http/protocol';
import { Context } from './serializer';
import { items } from '@azure-tools/linq';

export async function processServers(server: v3.Server, $: Context) {
  const connection = new Connection(server.url);

  for (const { key, value } of items(server.variables)) {
    const variable = new ConnectionVariable(key, {
      description: value.description,
      defaultValue: value.default,
      allowedValues: value.enum
    });

    connection.variables.push(variable);
  }

  $.api.http.connections.push(connection);
  return connection;
}
