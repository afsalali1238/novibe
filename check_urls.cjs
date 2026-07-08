const fs = require('fs');
const http = require('http');
const https = require('https');

const content = fs.readFileSync('src/data/nodes.ts', 'utf8');
const urls = [...content.matchAll(/url:\s*"([^"]+)"/g)].map(m => m[1]);
console.log(`Checking ${urls.length} URLs...`);

async function checkUrl(url) {
  try {
    const res = await fetch(url, { method: 'HEAD', headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' } });
    if (!res.ok && res.status !== 403 && res.status !== 405) { // 403/405 are sometimes returned by anti-bot protections for HEAD
      const getRes = await fetch(url, { method: 'GET', headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' } });
      if (!getRes.ok) return { url, status: getRes.status };
    }
    return { url, status: res.status };
  } catch (err) {
    return { url, error: err.message };
  }
}

async function main() {
  const promises = urls.map(checkUrl);
  const results = await Promise.all(promises);
  
  const failed = results.filter(r => r.error || (r.status >= 400 && r.status !== 403 && r.status !== 405));
  if (failed.length > 0) {
    console.log("FAILED URLs:");
    console.log(failed);
  } else {
    console.log("All URLs are valid (200 OK or bot-protected).");
  }
}

main();
