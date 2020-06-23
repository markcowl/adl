import * as fs from 'fs';
import * as path from 'path';

// automatically pull exports from all .js files in this project that 
// have a default export
export function exportFromPlugin(location: string = __dirname, result: any = {}, container = ''): any | undefined {

  let count = 0;
  for (const name of fs.readdirSync(location)) {
    const fullPath = path.join(location, name);
    const stat = fs.statSync(fullPath);
    // directories should be recursed
    if (stat.isDirectory()) {
      exportFromPlugin(fullPath, result, path.join(container, name));
      continue;
    }

    // .js files are checked for default exports
    // and added to the map 
    if (name.endsWith('.js')) {
      try {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const mod = require(fullPath);
        if (mod.default) {
          // files with a default export are added to the tree.
          result[path.join(container, name.replace(/\.js$/g, '')).replace(/\\/g, '/')] = mod.default;
        }
        count++;
      } catch {
        // ignore files that don't import cleanly. 
      }
    }
  }
  return count ? result : undefined;
}
