import fs from 'node:fs';
import path from 'node:path';

const clientDir = path.resolve('dist/client');
const distDir = path.resolve('dist');

if (fs.existsSync(clientDir)) {
  fs.cpSync(clientDir, distDir, { recursive: true });

  // For every route html file, also create a directory with index.html for maximum static compatibility
  const files = fs.readdirSync(clientDir);
  for (const file of files) {
    if (file.endsWith('.html') && file !== 'index.html' && file !== '404.html') {
      const routeName = file.replace(/\.html$/, '');
      const routeDir = path.join(distDir, routeName);
      fs.mkdirSync(routeDir, { recursive: true });
      fs.copyFileSync(path.join(clientDir, file), path.join(routeDir, 'index.html'));
    }
  }

  console.log('Successfully prepared static dist for deployment.');
}
