const { readFileSync } = require('fs');
const { execSync } = require('child_process');
const path = require('path');

const content = readFileSync("../package.json");

const packageInfo = JSON.parse(content);

const compilerFolderLocation = path.join(__dirname, "../");
console.log("folderLocation", compilerFolderLocation);


if (packageInfo) {
    const version = packageInfo.version;
    console.log('version', version);
    execSync(`npm i ${compilerFolderLocation}/mahal-webpack-loader-${packageInfo.version}.tgz`);
}
else {
    throw "no package found";
}