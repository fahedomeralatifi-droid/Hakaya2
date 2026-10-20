const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const URL_FILE = path.join(__dirname, 'tunnel_url.txt');

function startTunnel() {
  console.log('[Tunnel] Starting persistent SSH tunnel with keepalive...');
  const proc = spawn('ssh', [
    '-o', 'StrictHostKeyChecking=no',
    '-o', 'ServerAliveInterval=15',
    '-o', 'ServerAliveCountMax=4',
    '-R', '80:127.0.0.1:8080',
    'nokey@localhost.run'
  ], {
    stdio: ['ignore', 'pipe', 'pipe']
  });

  proc.stdout.on('data', (data) => {
    const text = data.toString();
    console.log(text);
    const match = text.match(/https:\/\/[a-z0-9]+\.lhr\.life/i);
    if (match) {
      const url = match[0];
      console.log(`\n========================================\n🚀 PUBLIC URL: ${url}\n========================================\n`);
      fs.writeFileSync(URL_FILE, url, 'utf8');
    }
  });

  proc.stderr.on('data', (data) => {
    const text = data.toString();
    if (!text.includes('Pseudo-terminal will not be allocated')) {
      console.error(`[Tunnel stderr] ${text}`);
    }
  });

  proc.on('close', (code) => {
    console.log(`[Tunnel] Process exited with code ${code}. Reconnecting in 3s...`);
    setTimeout(startTunnel, 3000);
  });
}

startTunnel();
