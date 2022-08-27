const { readFileSync } = require('fs');
const { execSync } = require('child_process');
const path = require('path');

execSync(`npm i mahal@latest`);
execSync(`npm i @mahaljs/test-utils@latest`);