const fs = require('fs');
const path = require('path');

fs.copyFileSync(path.resolve(__dirname, 'configs', '.env.prod'), path.resolve(__dirname, '.env'));

fs.mkdirSync('tmp/pgdata', { recursive: true })
