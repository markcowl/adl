import { Messages } from '@azure-tools/adl.core';
import { isDirectory, isFile, mkdir, rmdir, writeFile } from '@azure-tools/async-io';
import * as path from 'path';
import { Project } from 'ts-morph';
import { CommandLine } from '../command-line';

export async function cmdMerge(messages: Messages, args: CommandLine) {
  const tsc = {
    // all *.adl.ts files
    include: [
      '**/*.ts'
    ]
  };

  if (await isDirectory(args.project) && !args.force) {
    throw new Error(`Project folder '${args.project}' is not empty. Use --force to overwrite output`);
  }

  if (await isFile(args.project)) {
    throw new Error(`Project folder '${args.project}' is a file.`);
  }

  // remove old one
  await rmdir(args.project);

  // create the folder
  await mkdir(args.project);

  // make a tsconfig
  await writeFile(path.join(args.project, 'tsconfig.json'), JSON.stringify(tsc));

  const p = new Project({
    tsConfigFilePath: path.join(args.project, 'tsconfig.json')
  });
  const targetModelFolder = p.createDirectory(path.join(args.project, 'models'));
  const targetEnumFolder = p.createDirectory(path.join(args.project, 'enums'));
  /*
    let typeChangeCount = 0;
    let readonlyChangeCount = 0;
    let optionalChangeCount = 0;
    let enumValueAddedCount = 0;
    let propertyAddedCount = 0;
    let propertyDeletedCount = 0;
    let enumClarificationCount = 0;

    let first = true;
    for( const each of args.inputPaths) {
      const apiversion = each;
      const cfgfile = path.join(args.project,
      await writeFile(`c:/tmp/compute/${each}/tsconfig.json`, JSON.stringify(tsc));
      const input = new Project({ tsConfigFilePath: `c:/tmp/compute/${each}/tsconfig.json`});
      const d  = input.getDirectories();
      const enums = d.filter(each => each.getBaseName() === 'enums')[0] || fail('no enums');
      const models = d.filter(each => each.getBaseName() === 'models')[0] || fail('no models');


      for( const sourceEnumFile of enums.getSourceFiles()) {
        const fullName = sourceEnumFile.getFilePath();
        const fileName = path.basename(fullName);

        if( first ) {
          // just copy the file to the target
          targetEnumFolder.createSourceFile(fileName).insertText(0, sourceEnumFile.getFullText());
          continue;
        }

        // not the first api version that we're processing

        // if this has never been created
        let targetEnumFile = targetEnumFolder.getSourceFile(fileName);
        if(!targetEnumFile ) {
          // create a new enum and new enums should get a @since tag
          targetEnumFile = targetEnumFolder.createSourceFile(fileName);
          targetEnumFile.insertText(0, sourceEnumFile.getFullText());

          for( const eachEnum of targetEnumFile.getEnums()) {
            setTag(eachEnum, 'since', apiversion );
          }
          continue;
        }

        // if the file has been here, we need to update it.
        for( const sourceEnum of sourceEnumFile.getEnums()) {

          let targetEnum = targetEnumFile.getEnum(sourceEnum.getName()) ;
          if( !targetEnum) {
            targetEnum = targetEnumFile.addEnum( sourceEnum.getStructure());
            targetEnum = targetEnumFile.getEnum(sourceEnum.getName()) || fail('no enum');
            setTag(targetEnum, 'since', apiversion);
            continue;
          }

          // there is an enum here that we may have to modify
          for( const sourceMember of sourceEnum.getMembers()) {
            let targetMember = targetEnum.getMember(sourceMember.getName());
            if( targetMember ) {
              // skip it on enums, thanks
              continue;
            }

            // otherwise, we have to add a new member here
            targetMember = targetEnum.addMember({
              name: sourceMember.getName(),
              value: sourceMember.getValue(),

            });
            enumValueAddedCount++;

            const docs = sourceMember.getJsDocs() || [];
            for( const doc of docs ) {
              targetMember.addJsDoc( doc.getStructure() );
            }
            setTag(targetMember, 'since', apiversion);
          }
        }
      }

      // reset first for models
      for (const sourceModelFile of models.getSourceFiles()) {
        const fullName = sourceModelFile.getFilePath();
        const fileName = path.basename(fullName);

        if (first) {
          // just copy the file to the target
          targetModelFolder.createSourceFile(fileName).insertText(0, sourceModelFile.getFullText());
          continue;
        }

        // not the first api version that we're processing

        // if this has never been created
        let targetModelFile = targetModelFolder.getSourceFile(fileName);
        if (!targetModelFile) {
          // create a new model and new models should get a @since tag
          targetModelFile = targetModelFolder.createSourceFile(fileName);
          targetModelFile.insertText(0, sourceModelFile.getFullText());

          for (const eachModel of targetModelFile.getInterfaces()) {
            setTag(eachModel, 'since', apiversion);
          }
          continue;
        }

        const sourceImports = sourceModelFile.getImportDeclarations();
        // const targetImports = targetModelFile.getImportDeclarations();
        for( const si of sourceImports ) {
          targetModelFile.addImportDeclaration( si.getStructure() );
        }

        // if the file has been here, we need to update it.
        for (const sourceModel of sourceModelFile.getInterfaces()) {

          let targetModel = targetModelFile.getInterface(sourceModel.getName());
          if (!targetModel) {
            targetModel = targetModelFile.addInterface( sourceModel.getStructure());
            setTag(targetModel, 'since', apiversion);
            continue;
          }

          for (const targetProperty of targetModel.getProperties()) {
            const sourceProperty = sourceModel.getProperty(targetProperty.getName());
            if (!sourceProperty) {
              if(! hasTag(targetProperty, 'deleted')) {
                // property was removed.
                appendTag(targetProperty, 'deleted', apiversion);
                propertyDeletedCount++;
              }
            }
          }


          // there is an model here that we may have to modify
          for (const sourceProperty of sourceModel.getProperties()) {
            let targetProperty = targetModel.getProperty(sourceProperty.getName());
            if (targetProperty) {


              const s = sourceProperty.getStructure();
              const t = targetProperty.getStructure();
              t.docs = undefined;
              s.docs = undefined;

              if( JSON.stringify(s) !== JSON.stringify(t)) {
                // check to see if the type is the same (it's more that jsdocs)
                let other = true;
                if( s.isReadonly !== t.isReadonly) {
                  if( s.isReadonly) {
                    appendTag(targetProperty, 'Readonly',` '${apiversion}' - added readonly` );
                    targetProperty.setIsReadonly(true);
                  } else {
                    appendTag(targetProperty, 'Readonly', ` '${apiversion}' - removed readonly`);
                    targetProperty.setIsReadonly(false);
                  }
                  readonlyChangeCount++;
                  other = false;
                }
                if (s.hasQuestionToken !== t.hasQuestionToken) {
                  if (s.hasQuestionToken) {
                    appendTag(targetProperty, 'Optional', ` '${apiversion}' - made property optional`);
                    targetProperty.setHasQuestionToken(true);
                  } else {
                    appendTag(targetProperty, 'Optional', ` '${apiversion}' - made property required`);
                    targetProperty.setHasQuestionToken(false);
                  }
                  optionalChangeCount++;
                  other = false;
                }

                if (s.type !== t.type) {
                  if( t.type === 'string' && `${s.type}`.indexOf('| string') > -1 ) {
                    appendTag(targetProperty, 'StringToEnum', ` '${apiversion}' - type changed from '${t.type}' to '${s.type}'`);
                    enumClarificationCount++;
                    if (s.type) {
                      targetProperty.setType(s.type);
                    }
                    continue;
                  }
                  appendTag(targetProperty, 'Type', ` '${apiversion}' - type changed from '${t.type}' to '${s.type}'`);
                  if( s.type) {
                    targetProperty.setType(s.type);
                  }
                  typeChangeCount++;
                  other = false;
                }

                if( other ) {
                  console.log(`found a change. ${sourceProperty.getName()} - \n${JSON.stringify(s, undefined, 2)}\n ${JSON.stringify(t, undefined, 2)}`);
                }

              }

              continue;
            }

            // otherwise, we have to add a new member here
            const p = sourceProperty.getStructure();
            targetProperty = targetModel.addProperty(p);
            propertyAddedCount++;
            setTag(targetProperty, 'since', apiversion);
          }
        }
      }


      // we're done with the first one, after this, we're versioning things.
      first = false;
    }
    for( const file of p.getSourceFiles()) {
      file.organizeImports();
    }

    p.save();

    console.log(`Stats:

     EnumValueAdded:  ${enumValueAddedCount}
     StringToEnum:    ${enumClarificationCount}
     PropertyAdded:   ${propertyAddedCount}
     PropertyDeleted: ${propertyDeletedCount}
     ReadOnlyChanges: ${readonlyChangeCount}
     OptionalChanges: ${optionalChangeCount}
     TypeChanges:     ${typeChangeCount}

    `);
    */
}