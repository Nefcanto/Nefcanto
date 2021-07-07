const fs = require('fs');
const path = require('path');
let files = [];

function getAllFiles(directory) {
    fs.readdirSync(directory).forEach(file => {
        const absolute = path.join(directory, file);
        if (fs.statSync(absolute).isDirectory()) return getAllFiles(absolute);
        else return files.push(absolute);
    });
}

getAllFiles(path.join(process.cwd(), 'contents', 'PublicPanel', 'Views'));

const basePath = path.join(process.cwd(), 'contents', 'PublicPanel', 'Views');
for (let i = 0; i < 10; i++) {
    const relativePath = files[i].replace(basePath, '');
    console.log(relativePath)
}