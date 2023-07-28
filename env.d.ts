/// <reference types="vite/client" />

declare module '*&srcset' {
  const src: string
  export default src
}

declare module '*?preset=default' {
  const src: import('vite-plugin-image-presets').ImageAttrs[]
  export default src
}
