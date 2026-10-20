// ==========================================================================
// دار حكاية للعطور (HIKAYA Haute Parfumerie)
// 9. Local Development & Preview Server (Node.js)
// Port: 8080 - Accessible on LAN for Mobile Testing
// ==========================================================================

const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');

const PORT = 8080;
const ROOT = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

function getLocalIp() {
  const ifaces = os.networkInterfaces();
  for (const name of Object.keys(ifaces)) {
    for (const iface of ifaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
  return 'localhost';
}

let productsVersion = Date.now();
const uploadsDir = path.join(ROOT, 'assets', 'images', 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

function processAndSaveBase64Images(products) {
  if (!Array.isArray(products)) return products;
  products.forEach((p, pIdx) => {
    const pid = p.id || ('prod_' + Date.now() + '_' + pIdx);
    if (p.image && typeof p.image === 'string' && p.image.startsWith('data:image')) {
      const match = p.image.match(/^data:image\/(\w+);base64,(.+)$/);
      if (match) {
        const ext = match[1] === 'jpeg' ? 'jpg' : match[1];
        const filename = `${pid}_main.${ext}`;
        const filePath = path.join(uploadsDir, filename);
        try {
          fs.writeFileSync(filePath, Buffer.from(match[2], 'base64'));
          p.image = `assets/images/uploads/${filename}`;
        } catch (e) {
          console.warn('Error saving image:', e.message);
        }
      }
    }
    if (Array.isArray(p.images)) {
      p.images = p.images.map((img, i) => {
        if (img && typeof img === 'string' && img.startsWith('data:image')) {
          const match = img.match(/^data:image\/(\w+);base64,(.+)$/);
          if (match) {
            const ext = match[1] === 'jpeg' ? 'jpg' : match[1];
            const filename = `${pid}_${i}.${ext}`;
            const filePath = path.join(uploadsDir, filename);
            try {
              fs.writeFileSync(filePath, Buffer.from(match[2], 'base64'));
              return `assets/images/uploads/${filename}`;
            } catch (e) {
              console.warn('Error saving gallery image:', e.message);
            }
          }
        }
        return img;
      });
    }
  });
  return products;
}

const server = http.createServer((req, res) => {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  let reqPath = decodeURI(req.url.split('?')[0]);

  // Realtime Products Version Check (Ultra-lightweight ~30 bytes)
  if (reqPath === '/api/products-version') {
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify({ version: productsVersion }));
    return;
  }

  // Realtime Products API
  if (reqPath === '/api/products') {
    const productsFile = path.join(ROOT, 'products.json');
    if (req.method === 'GET') {
      fs.readFile(productsFile, 'utf8', (err, data) => {
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(data || '[]');
      });
      return;
    } else if (req.method === 'POST') {
      let body = '';
      req.on('data', chunk => { body += chunk; });
      req.on('end', () => {
        try {
          let parsed = JSON.parse(body);
          parsed = processAndSaveBase64Images(parsed);
          productsVersion = Date.now();
          fs.writeFile(productsFile, JSON.stringify(parsed, null, 2), 'utf8', () => {
            res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
            res.end(JSON.stringify({ success: true, count: Array.isArray(parsed) ? parsed.length : 1, version: productsVersion }));
          });
        } catch (e) {
          res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
          res.end(JSON.stringify({ error: 'Invalid JSON' }));
        }
      });
      return;
    }
  }

  // Realtime Exchange Rate API (SAR / YER)
  if (reqPath === '/api/exchange-rate') {
    const settingsFile = path.join(ROOT, 'settings.json');
    const productsFile = path.join(ROOT, 'products.json');
    if (req.method === 'GET') {
      fs.readFile(settingsFile, 'utf8', (err, data) => {
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(data || JSON.stringify({ exchangeRate: 413 }));
      });
      return;
    } else if (req.method === 'POST') {
      let body = '';
      req.on('data', chunk => { body += chunk; });
      req.on('end', () => {
        try {
          const parsed = JSON.parse(body);
          const newRate = Number(parsed.exchangeRate || parsed.rate || 413);
          const settingsData = { exchangeRate: newRate };
          fs.writeFile(settingsFile, JSON.stringify(settingsData, null, 2), 'utf8', () => {
            // Also update SAR prices in products.json automatically
            fs.readFile(productsFile, 'utf8', (pErr, pData) => {
              try {
                let products = JSON.parse(pData || '[]');
                products.forEach(p => {
                  p.priceSAR = Math.round(p.priceYER / newRate);
                  if (p.oldPriceYER) p.oldPriceSAR = Math.round(p.oldPriceYER / newRate);
                });
                productsVersion = Date.now();
                fs.writeFile(productsFile, JSON.stringify(products, null, 2), 'utf8', () => {
                  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
                  res.end(JSON.stringify({ success: true, exchangeRate: newRate }));
                });
              } catch (err) {
                res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
                res.end(JSON.stringify({ success: true, exchangeRate: newRate }));
              }
            });
          });
        } catch (e) {
          res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
          res.end(JSON.stringify({ error: 'Invalid JSON' }));
        }
      });
      return;
    }
  }

  // Realtime Categories API
  if (reqPath === '/api/categories') {
    const catFile = path.join(ROOT, 'categories.json');
    if (req.method === 'GET') {
      fs.readFile(catFile, 'utf8', (err, data) => {
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(data || '[]');
      });
      return;
    } else if (req.method === 'POST') {
      let body = '';
      req.on('data', chunk => { body += chunk; });
      req.on('end', () => {
        try {
          const parsed = JSON.parse(body);
          fs.writeFile(catFile, JSON.stringify(parsed, null, 2), 'utf8', () => {
            res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
            res.end(JSON.stringify({ success: true }));
          });
        } catch (e) {
          res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
          res.end(JSON.stringify({ error: 'Invalid JSON' }));
        }
      });
      return;
    }
  }

  // Realtime Bank Accounts API
  if (reqPath === '/api/banks') {
    const banksFile = path.join(ROOT, 'banks.json');
    if (req.method === 'GET') {
      fs.readFile(banksFile, 'utf8', (err, data) => {
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(data || '{}');
      });
      return;
    } else if (req.method === 'POST') {
      let body = '';
      req.on('data', chunk => { body += chunk; });
      req.on('end', () => {
        try {
          const parsed = JSON.parse(body);
          fs.writeFile(banksFile, JSON.stringify(parsed, null, 2), 'utf8', () => {
            res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
            res.end(JSON.stringify({ success: true, banks: parsed }));
          });
        } catch (e) {
          res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
          res.end(JSON.stringify({ error: 'Invalid JSON' }));
        }
      });
      return;
    }
  }

  // Realtime Orders API
  if (reqPath === '/api/orders') {
    const ordersFile = path.join(ROOT, 'orders.json');
    if (req.method === 'GET') {
      fs.readFile(ordersFile, 'utf8', (err, data) => {
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(data || '[]');
      });
      return;
    } else if (req.method === 'POST') {
      let body = '';
      req.on('data', chunk => { body += chunk; });
      req.on('end', () => {
        try {
          const newOrder = JSON.parse(body);
          fs.readFile(ordersFile, 'utf8', (err, data) => {
            let orders = [];
            try { orders = JSON.parse(data) || []; } catch (e) {}
            orders.unshift(newOrder);
            fs.writeFile(ordersFile, JSON.stringify(orders, null, 2), 'utf8', () => {
              res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
              res.end(JSON.stringify({ success: true, orderId: newOrder.id }));
            });
          });
        } catch (e) {
          res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
          res.end(JSON.stringify({ error: 'Invalid JSON' }));
        }
      });
      return;
    }
  }

  if (reqPath === '/' || reqPath === '') {
    reqPath = '/index.html';
  } else if (reqPath === '/admin' || reqPath === '/admin/') {
    reqPath = '/admin.html';
  } else if (reqPath === '/app' || reqPath === '/mobile' || reqPath === '/app/' || reqPath === '/mobile/') {
    reqPath = '/mobile-app.html';
  }

  const filePath = path.join(ROOT, reqPath);

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end('<h1>404 - الصفحة غير موجودة في دار حكاية</h1>');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Access-Control-Allow-Origin': '*'
    });
    fs.createReadStream(filePath).pipe(res);
  });
});

server.listen(PORT, '0.0.0.0', () => {
  const ip = getLocalIp();
  console.log('\n' + '='.repeat(64));
  console.log('  👑 دار حكاية للعطور (HIKAYA Haute Parfumerie) - خادم العرض');
  console.log('='.repeat(64));
  console.log(`\n📱 لفتح متجر حكاية على هاتفك المحمول (متصل بنفس شبكة الواي فاي):\n👉 http://${ip}:${PORT}/`);
  console.log(`\n💻 لفتح المتجر على جهاز الكمبيوتر:\n👉 http://localhost:${PORT}/`);
  console.log(`\n🔐 رابط لوحة التحكم الإدارية لدار حكاية:\n👉 http://${ip}:${PORT}/admin.html`);
  console.log('\n' + '='.repeat(64) + '\n');
});
