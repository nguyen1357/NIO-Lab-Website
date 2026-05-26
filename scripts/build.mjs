import * as esbuild from 'esbuild'
import { rimraf } from 'rimraf'
import stylePlugin from 'esbuild-style-plugin'
import autoprefixer from 'autoprefixer'
import tailwindcss from 'tailwindcss'
import { readFile, writeFile, copyFile, readdir, unlink } from 'node:fs/promises'
import path from 'node:path'

const args = process.argv.slice(2)
const isProd = args[0] === '--production'

await rimraf('dist')

/**
 * @type {esbuild.BuildOptions}
 */
const esbuildOpts = {
  color: true,
  entryPoints: isProd ? ['src/main.tsx'] : ['src/main.tsx', 'index.html'],
  outdir: 'dist',
  entryNames: isProd ? '[name][hash]' : '[name]',
  metafile: isProd,
  write: true,
  bundle: true,
  format: 'iife',
  sourcemap: isProd ? false : 'linked',
  minify: isProd,
  treeShaking: true,
  jsx: 'automatic',
  loader: {
    '.html': 'copy',
    '.png': 'file',
  },
  plugins: [
    stylePlugin({
      postcss: {
        plugins: [tailwindcss, autoprefixer],
      },
    }),
  ],
}

if (isProd) {
  // Cloudflare Pages serves this repo from its root with no build step, so the
  // production bundle (with a content hash for cache-busting) must live at the
  // repo root and be referenced by index.html. esbuild builds into dist/, then
  // we publish the main entry to the root and rewrite index.html to match.
  const result = await esbuild.build(esbuildOpts)
  const outputs = Object.keys(result.metafile.outputs)
  const jsOut = outputs.find((f) => f.endsWith('.js'))
  const cssOut = outputs.find((f) => f.endsWith('.css'))
  const jsName = path.basename(jsOut)
  const cssName = cssOut ? path.basename(cssOut) : null

  // Drop superseded root bundles so stale hashes don't linger in the deploy.
  for (const f of await readdir('.')) {
    if (/^main-?[A-Za-z0-9]+\.(js|css)$/.test(f) && f !== jsName && f !== cssName) {
      await unlink(f)
    }
  }

  await copyFile(jsOut, jsName)
  if (cssOut) await copyFile(cssOut, cssName)

  let html = await readFile('index.html', 'utf8')
  html = html.replace(/main-?[A-Za-z0-9]+\.js/g, jsName)
  if (cssName) html = html.replace(/main-?[A-Za-z0-9]+\.css/g, cssName)
  await writeFile('index.html', html)

  console.log(`Published ${jsName}${cssName ? ` and ${cssName}` : ''}; index.html updated.`)
} else {
  const ctx = await esbuild.context(esbuildOpts)
  await ctx.watch()
  const { hosts, port } = await ctx.serve()
  console.log(`Running on:`)
  hosts.forEach((host) => {
    console.log(`http://${host}:${port}`)
  })
}
