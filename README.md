# Appdata Please

A helper script that makes it easy to store and retrieve application data on any platform supported by Deno. 

## Usage

```ts
import appDataPlease from "https://deno.land/x/appdataplease/mod.ts"

/** 
 * Returns a string representing the full path to where the data should
 * be stored for the current platform
 */
const appData = appDataPlease("my-app-name")
```

As simple as that!
