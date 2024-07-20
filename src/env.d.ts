/// <reference types="astro/client" />
declare module 'preline/plugin' {
    const plugin: any; // You can replace 'any' with a more specific type if you know it
    export default plugin;
}

declare module 'tailwindcss/lib/util/flattenColorPalette' {
    function flattenColorPalette(colors: any): any;
    export default flattenColorPalette;
}
  