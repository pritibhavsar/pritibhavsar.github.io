const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const dataDir = path.join(process.cwd(), 'data');
const versionFile = path.join(dataDir, 'version.json');
const historyFile = path.join(dataDir, 'version_history.md');

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function readVersion() {
  try {
    const raw = fs.readFileSync(versionFile, 'utf8');
    return JSON.parse(raw);
  } catch (e) {
    return { version: '0.0.0', updated: null };
  }
}

function bumpPatch(v) {
  const parts = v.split('.').map(n => parseInt(n, 10));
  if (parts.length !== 3 || parts.some(isNaN)) return '0.0.1';
  parts[2] = parts[2] + 1;
  return parts.join('.');
}

function getLastCommitInfo() {
  try {
    const msg = execSync('git log -1 --pretty=%B', { encoding: 'utf8' }).trim();
    const author = execSync('git log -1 --pretty=%an', { encoding: 'utf8' }).trim();
    const date = execSync('git log -1 --pretty=%cI', { encoding: 'utf8' }).trim();
    return { msg, author, date };
  } catch (e) {
    return null;
  }
}

function main() {
  ensureDir(dataDir);

  const current = readVersion();
  const newVersion = bumpPatch(current.version || '0.0.0');
  const now = new Date().toISOString();

  const commit = getLastCommitInfo();
  const message = process.env.VERSION_MESSAGE || (commit && commit.msg) || 'Automated build';
  const author = commit ? commit.author : process.env.USER || 'unknown';
  const date = commit ? commit.date : now;

  const out = {
    version: newVersion,
    updated: now,
    last_commit: commit ? { author: author, date: date, message: commit.msg } : null
  };

  fs.writeFileSync(versionFile, JSON.stringify(out, null, 2), 'utf8');

  const header = `## v${newVersion} — ${now.split('T')[0]}\n`;
  const entry = `- ${message.replace(/\r?\n/g, ' ')}\n  - author: ${author}\n  - commit-date: ${date}\n\n`;

  if (!fs.existsSync(historyFile)) {
    fs.writeFileSync(historyFile, `# Version History\n\n${header}${entry}`, 'utf8');
  } else {
    fs.appendFileSync(historyFile, `${header}${entry}`, 'utf8');
  }
  // Update package.json version so it reflects the bumped version
  try {
    const pkgPath = path.join(process.cwd(), 'package.json');
    if (fs.existsSync(pkgPath)) {
      const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
      pkg.version = newVersion;
      fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n', 'utf8');
      console.log(`Updated package.json to version ${newVersion}`);

      // Optionally commit the changes (skip by setting SKIP_GIT=1)
      if (!process.env.SKIP_GIT) {
        try {
          const commitMsg = process.env.VERSION_MESSAGE || `chore(release): v${newVersion}`;
          execSync(`git add "${versionFile}" "${historyFile}" "${pkgPath}"`);
          execSync(`git commit -m "${commitMsg}"`);
          console.log('Committed version files to git.');
        } catch (e) {
          console.warn('Git commit failed (git may be unavailable or no changes to commit):', e.message);
        }
      }
    }
  } catch (e) {
    console.warn('Failed to update package.json:', e.message);
  }

  console.log(`Bumped version ${current.version} -> ${newVersion}`);
  console.log(`Wrote ${versionFile} and updated ${historyFile}`);
}

main();
