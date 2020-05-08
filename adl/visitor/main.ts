import { dirname, relative } from 'path';
import { InterfaceDeclaration, Project } from 'ts-morph';

function flatten<T>(arr: Array<Array<T>>): Array<T> {
  return (<any>arr).reduce(function (flat: any, toFlatten: any) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}

async function main() {
  const [node, main, inProject, modelname, targetProject, targetFolder, ...args] = process.argv;

  const input = new Project({ tsConfigFilePath: `${inProject}/tsconfig.json` });
  const target = new Project({ tsConfigFilePath: `${targetProject}/tsconfig.json` });

  const interfaces = flatten(input.getSourceFiles().map(each => each.getInterfaces()));
  for (const each of interfaces) {
    const path = dirname(relative(inProject, each.getSourceFile().getFilePath()));
    const match = `${path}/${each.getName()}`;
    if (match === modelname) {
      console.log(`${each.getName()}, ${match} ${modelname}`);
      go(each, target, targetFolder);
    }

  }
}

async function go(iface: InterfaceDeclaration, project: Project, folder: string) {
  for (const each of iface.getProperties()) {
    const t = each.getType();

    const n = each.getName();

  }
}

main();