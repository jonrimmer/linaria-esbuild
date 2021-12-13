const linaria = require("@linaria/esbuild");
const esbuild = require("esbuild");

esbuild
  .build({
    entryPoints: ["src/App.tsx"],
    bundle: true,
    outfile: "out.js",
    plugins: [linaria.default()],
  })
  .catch(() => process.exit(1));
