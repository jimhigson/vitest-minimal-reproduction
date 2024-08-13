Minimal reproduction to show example of where `vitest` can load a library, but `node-vite` can't.

This is probably due to the library exporting using `.m.js` extension (not `.mjs`) but expecting this to either work in both or fail in both.

Run:

```sh
pnpm i # install deps
pnpm vitest # this passes
pnpm vite-node # this fails
```

(or `npm` or `yarn` - shouldn't matter which pacakge manager)