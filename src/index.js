#!/usr/bin/env node
const
 fs = require('fs'),
 path = require('path');

const envPath = path.resolve(process.cwd(), '.env');
const envExamplePath = path.resolve(process.cwd(), '.env.example');
const envRegex = /(^\s*\S*=).*$/gm;

try {
    if (fs.existsSync(envPath)) {
      console.log('Generating .env.example...');
      const data = fs.readFileSync(envPath, { encoding:'utf8', flag: 'r' });
      fs.writeFileSync(envExamplePath, data.replaceAll(envRegex, '$1'));
      console.log('.env.example generated')
    } else {
        console.log('No .env file found in folder ' + process.cwd());
    }
} catch(err) {
    console.error(err)
}
