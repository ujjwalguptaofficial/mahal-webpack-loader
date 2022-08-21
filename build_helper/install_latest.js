const { readFileSync } = require('fs');
const { execSync } = require('child_process');
const path = require('path');

if (packageInfo) {
    const version = packageInfo.version;
    console.log('version', version);
    execSync(`npm i @mahaljs/html-compiler@latest`);
    execSync(`npm i mahal@latest`);
    execSync(`npm i mahal-test-utils@latest`);
}
else {
    throw "no package found";
}