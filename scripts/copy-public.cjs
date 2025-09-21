const fs = require('fs');
const path = require('path');

function copyDir(src, dst) {
  if (!fs.existsSync(src)) return false;
  try {
    fs.cpSync(src, dst, { recursive: true, force: true });
    console.log(`Copied ${src} → ${dst}`);
    return true;
  } catch (e) {
    console.error(`Failed to copy ${src} → ${dst}:`, e);
    return false;
  }
}

const ROOT = path.join(__dirname, '..');
copyDir(path.join(ROOT, 'public'), path.join(ROOT, 'dist'));
copyDir(path.join(ROOT, 'admin'),  path.join(ROOT, 'dist', 'admin'));
