/*
adl --input:https://.../foo.json  --save:./outputfolder --format:adl
adl

- can have more than one input file
- input files can $ref other files relative to their location
- $ref files that are not primary inputs are considered secondary, and will only get components that are $ref'd pulled thru (and polymorphic relations )

- everything that gets loaded from a swagger/openapi file gets tagged with it's metadata and versioninfo
- $refs are processed as they visited.

- need an Filesystem interface (load/enum/etc)
- globbing on cmdline?

- only anonymous components get automatically deduplicated (is this even possible?)
-


*/
