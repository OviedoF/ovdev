/**
 * Convierte las imágenes de public/works (png/jpg) a WebP (máx. 1600px, q80).
 * No borra los originales. Uso: node scripts/images-to-webp.cjs
 */
const sharp = require('sharp'), fs = require('fs'), path = require('path')
const root = path.join(__dirname, '..', 'public', 'works')
const files = []
;(function walk(d) { for (const f of fs.readdirSync(d)) { const p = path.join(d, f); fs.statSync(p).isDirectory() ? walk(p) : /\.(png|jpe?g)$/i.test(f) && files.push(p) } })(root)
let before = 0, after = 0, n = 0
;(async () => {
  for (const f of files) {
    const out = f.replace(/\.(png|jpe?g)$/i, '.webp')
    if (!fs.existsSync(out)) { await sharp(f).resize({ width: 1600, withoutEnlargement: true }).webp({ quality: 80 }).toFile(out); n++ }
    before += fs.statSync(f).size; after += fs.statSync(out).size
  }
  console.log(`converted ${n} (total ${files.length}): ${(before/1e6).toFixed(1)} MB -> ${(after/1e6).toFixed(1)} MB`)
})()
