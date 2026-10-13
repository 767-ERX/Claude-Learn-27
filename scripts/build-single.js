// Construit dist/prepa2027.html : toute l'appli dans un seul fichier (aperçu, partage, usage sans serveur).
// Usage : node scripts/build-single.js
const fs = require("fs"), path = require("path");
const root = path.join(__dirname, "..");
const read = f => fs.readFileSync(path.join(root, f), "utf8");
global.self = global; require(path.join(root, "content/index.js"));
const inline = f => "<script>\n" + read(f).replace(/<\/script/gi, "<\\/script") + "\n</script>";
let html = read("index.html");
const scripts = ["js/registry.js", "content/index.js"].concat(self.MODULE_FILES.filter(f => fs.existsSync(path.join(root, f))), ["js/studio-data.js"]).map(inline).join("\n")
  + "\n<script>window.BUNDLED = true;</script>\n" + inline("js/app.js");
html = html
  .replace(/<script src="[^"]+"><\/script>\n?/g, "")
  .replace("</body>", scripts + "\n</body>")
  .replace('<link rel="stylesheet" href="styles.css">', "<style>\n" + read("styles.css") + "\n</style>")
  .replace(/<link rel="manifest"[^>]*>\n?/, "")
  .replace(/<link rel="(icon|apple-touch-icon)"[^>]*>\n?/g, "");
fs.mkdirSync(path.join(root, "dist"), { recursive: true });
fs.writeFileSync(path.join(root, "dist/prepa2027.html"), html);
console.log("dist/prepa2027.html", (html.length / 1024).toFixed(0) + " Ko");
