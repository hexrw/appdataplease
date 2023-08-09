import { ensureDir } from "./deps.ts"


/** 
 * Returns a string representing the full path to where the data should
 * be stored for the current platform. Nested directories supported.
 * Missing directories will be created.
 * 
 * @example
 * // Linux
 * appDataPlease("app-name")
 * // "/home/username/.config/app-name"
 * 
 * @example
 * // Windows
 * appDataPlease("app-name")
 * // "C:\\Users\\username\\AppData\\Roaming\\app-name"
 * 
 * @example
 * // macOS
 * appDataPlease("app-name")
 * // "/Users/username/Library/Application Support/app-name"
 * 
 * @example
 * // Nested directories (Linux)
 * appDataPlease("app-name/nested/directories")
 * // "/home/username/.config/app-name/nested/directories"
 * 
 * @param appName The name of the application
 */
export default async function appDataPlease (appName: string) {
    let dir

    if (Deno.build.os === "windows")
        dir = Deno.env.get("APPDATA") + "\\" + appName
    else if (Deno.build.os === "linux")
        dir = Deno.env.get("HOME") + "/.config" + "/" + appName
    else if (Deno.build.os === "darwin")
        dir = Deno.env.get("HOME") + "/Library/Application Support" + "/" + appName
    else throw new Error("❌ Unsupported OS")

    await ensureDir(dir)
        .catch(() => { throw new Error("❌ Could not get app data directory") })

    return dir
}
