#!/usr/bin/env node
const
 fs = require('fs'),
 path = require('path');

const argumentEnvPath = process.argv[2];
const envPath = path.resolve(process.cwd(), argumentEnvPath === undefined ? '.env' : argumentEnvPath);
const envExamplePath = path.resolve(process.cwd(), '.env.example');
const envRegex = /(^\s*\S*?=).*$/gm;

try {
    if (fs.existsSync(envPath)) {
      const data = fs.readFileSync(envPath, { encoding:'utf8', flag: 'r' });
      fs.writeFileSync(envExamplePath, data.replaceAll(envRegex, '$1'));
      console.log('.env.example generated')
    } else {
        console.log('.env not found in' + process.cwd());
    }
} catch(err) {
    console.error(err)
}
