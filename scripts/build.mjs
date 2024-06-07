import { build } from "esbuild";

const external = [
  "@minecraft/server",
  "@minecraft/server-ui",
  "@minecraft/server-admin",
  "@minecraft/server-gametest",
  "@minecraft/server-net",
  "@minecraft/server-common",
  "@minecraft/server-editor",
  "@minecraft/debug-utilities",
];

build({
  entryPoints: ["src/index.ts"],
  outfile: "assets/behavior_pack/scripts/main.js",
  bundle: true,
  minify: false,
  format: "esm",
  external,
  sourcemap: "external",
})
  .then(() => {
    console.log("Bundling finished!");
  })
  .catch((error) => {
    console.error(error);
  });
