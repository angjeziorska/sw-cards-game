export function camelToTitle(camelCase: string): string {
  return camelCase
    .replace(/([a-z])([A-Z])/g, "$1 $2") // Insert space between camel case words
    .replace(/^\w/, (c) => c.toUpperCase()); // Capitalize the first letter
}
