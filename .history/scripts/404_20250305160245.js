import fs from 'fs'
import path from 'path'

// 404.html 的内容
const html = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Single Page Apps for GitHub Pages</title>
    <script type="text/javascript">
      (function(l) {
        if (l.search[1] === '/' ) {
          var decoded = l.search.slice(1).split('&').map(function(s) { 
            return s.replace(/~and~/g, '&')
          }).join('?');
          window.history.replaceState(null, null,
              l.pathname.slice(0, -1) + decoded + l.hash
          );
        }
      }(window.location))
    </script>
  </head>
  <body>
  </body>
</html>`

// 确保 dist 目录存在
if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist')
}

// 写入 404.html
fs.writeFileSync(path.resolve('dist', '404.html'), html) 