task 'fix-line-endings', 'typescript', ->
  typescriptFiles()
    .pipe eol {eolc: 'LF', encoding:'utf8'}
    .pipe destination 'src'

task 'clean' , 'typescript', (done)->
  generatedFiles()
    .pipe foreach (each,next)->
      rm each.path
      next null

task 'test', 'typescript',['build/typescript'], (done)->
  typescriptProjectFolders()
    .pipe where (each) ->
      return true if test "-d", "#{each.path}/test"
      return false
    .pipe foreach (each,next)->
      if test "-f", "#{each.path}/node_modules/.bin/mocha"
        execute "#{each.path}/node_modules/.bin/mocha test  --timeout 15000", {cwd: each.path}, (c,o,e) ->
          next null
      else
        next null

task 'npm-install', 'typescript', (done)-> 
  count = 0
  typescriptProjectFolders()
    .pipe where (each ) -> 
      return true if test "-f", "#{each.path}/package.json"
      return false
    .pipe foreach (each,next)-> 
      count++
      execute "npm install", {cwd: each.path }, (code,stdout,stderr) ->
        count--
        if count is 0
          done() 
      next null
  return null

task 'update-dependent-projects', '', (done)->
  # this needs to run multiple times.
  global.completed['update-dependent-projects'] = false
  
  # copy *.d.ts files 
  #source ["#{basefolder}/src/autorest-core/**/*.d.ts","!#{basefolder}/src/autorest-core/node_modules/**","!#{basefolder}/src/autorest-core/test/**" ]
  #  .pipe destination "#{basefolder}/src/autorest/lib/core"

task 'build', 'typescript', (done)-> 
  count = 0
  if watch 
    watchFiles ["#{basefolder}/src/autorest-core/**/*.d.ts"], ["update-dependent-projects"]

  typescriptProjectFolders()
    .pipe where (each ) -> 
      return true if test "-f", "#{each.path}/tsconfig.json"
      return false
    .pipe foreach (each,next)-> 
      count++
      execute "tsc --project #{each.path} ", {cwd: each.path }, (code,stdout,stderr) ->
        if watch 
           execute "#{basefolder}/node_modules/.bin/tsc --watch --project #{each.path}", (c,o,e)-> 
            echo "watching"
           , (d) -> echo d.replace(/^src\//mig, "#{basefolder}/src/")
        count--
        if count is 0
          done() 
      next null
  return null
