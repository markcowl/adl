# Typical ADL Project layout


## Layout format 

Very little of the project layout is fixed - the `.adl` folder, and the `api.yaml` and `tsconfig.json` files are required, and the names can not be changed. <br>
  - You would never check in the `.adl` folder (it's reconstitued on `adl restore`) <br>
  - You would probably not check in the `tsconfig.json` file - it would be regenerated on `adl restore` 

``` yaml
/
  .adl/             # REQUIRED (ephemeral) - stores packages for this project
    .apis/          # referenced APIs -- external apis that are being referenced from this project
    .extensions/    # adl extensions (rules, typings, etc)
  .gitignore        # OPTIONAL - provides masks for which files are not checked in (ie, .adl folder, maybe tsconfig.json )

  models/           # OPTIONAL - default folder for model files 
    *.ts            #            contnents - ADL model files
  enums/            # OPTIONAL - default folder for enums files 
    *.ts            #            contnents - ADL enum defintions 
  resources/        # OPTIONAL - default folder for resources files 
    *.ts            #            contnents - ADL resource defintions
  operations/       # OPTIONAL - default folder for operation groups (for operations not tied to a resource)
    *.ts            #            contnents - ADL operation defintions
  
  
  api.yaml          # REQUIRED - the API's configuration/additional metadata (things that are not stored in .ts code (contact/license/metadata/etc... auth? servers? ) )
  tsconfig.json     # REQUIRED (ephemeral) - the tsconfig file (can be entirely generated/managed by ADL cli and/or vscode extension )

  *.ts              # service-level ADL files 

```

## Expanded Example

``` yaml
/
  .adl/             # stores ephemeral packages for this project

    .apis/          # referenced APIs -- external apis that are being referenced from this project

      network/      # EXAMPLE -- network API 
      (contents)    # the contents of the package unpacked on disk.

    .extensions/    # adl extensions (rules, typings, etc)

      adl.types/    # EXAMPLE  - basic adl types
      (contents)    # the contents of the package unpacked on disk

      arm.types/    # EXAMPLE - the ARM types, resource extension and rules
      (contents)    # the contents of the package unpacked on disk

  .vscode/          # EXAMPLE - typical vscode workspace project settings
  
  .gitignore        # EXAMPLE - tell git what not to track

  models/           # default folder for model files 
    myModel.ts      # EXAMPLE - sample model file
    myOther.ts      # EXAMPLE - sample model file

  enums/            # default folder for enums files
    DayOfWeek.ts    # EXAMPLE - sample enum file

  resources/        # default folder for resources files
    MyResource.ts   # EXAMPLE - resource defintion 

  operations/       # default folder for 
    MyOpGroup.ts    # 

  api.yaml          # the API's configuration/additional metadata (things that are not stored in .ts code (contact/license/metadata/etc... auth? servers? ) )
  myservice.ts      # EXAMPLE - service ADL code 
  type-aliases.ts   # EXAMPLE - type aliases default file

```

## ADL Project File - `api.yaml`

The project file (`api.yaml`) tracks three kinds of information: 
- packages (extensions/apis) needed to use this service
- descriptive metadata about the API 
- protocol specific information (that is not about the content of wire protocol itself, but the details around connecting/auth/etc)

``` yaml

## 'use' refers to packages required to use this API
## package references are always absolute URLs (http,https,file)
## (.adl? .tgz? .zip? ) -- should this let you use files from a repo (ie, point to the root of the folder? (will have to contain a package.json) )
## NOTE: using at least one package would be typical 
use: 
  - <Package-URL> # each package url 
  - <Package-URL> # each package url 

## 'api' are references to other APIs that expose APIs/models that are used by this service
## api references are always absolute URLs (http,https,file)
## these can point to and .adl package file or a repository where the API is exploded (will have to have an api.yaml file at the root)
## NOTE: it is quite rare to refer to another API, but there are cases where it's desired
api:
  - <API-Package-URL>

## 'metadata' is information about the API itself
metadata: 
  name:           # name of the service
  description:    # descriptions
  contacts:       # contact info
  licenses:       # license info
  termsOfService: # TOS for the service

## protocols have their own node in the project file
## they should follow a common pattern, 
## but can add their own nodes underneath to support their feature.
##
## 'http' contains http-specific protocol information about the service
## 
http:
  connections:    # server connection information
  authentication: # authentication information for the service

##
## other protocols would be similar to http, but can have different protocol-specific nodes
mqtt:
  conections:     
  authentication: 
  channels:
  settings:
     keepAlive: true  # example of a setting
```

## Typical ADL project file - `api.yaml`

``` yaml
# My Sample Service

use: 
  - https://github.com/azure/adl/types.adl   # standard adl types (maybe built in?) 
  - https://github.com/azure/adl/arm.adl   # Azure ARM adl types 

api:
  - https://github.com/azure/azure-rest-api-specs/packages/network.adl 

metadata:
  name: MyService
  description: My Service is the best service. 
    There are many like it, this one is my own
  contacts:
    - role: Author
      name: Bob Bobertson
      email: Bob@bob.com
  licenses: 
    - name: License Terms and Conditions (MIT)
      url: https://bob.com
```

