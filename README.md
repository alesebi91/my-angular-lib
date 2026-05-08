# my-angular-lib

## Local debug workflow with `yarn link`

1. Build and register the library link:
   - `yarn run link:debug`
2. Keep the library rebuilding while you work:
   - `yarn watch`
   - or `yarn watch:link` to run `link:debug` + watch in one command.
3. In your internal debug app, link this library:
   - `yarn link my-lib`
