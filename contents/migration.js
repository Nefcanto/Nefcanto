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

const baseSource = path.join(process.cwd(), 'contents', 'PublicPanel', 'Views');
const baseTarget = path.join(process.cwd(), 'contents');

for (let i = 0; i < files.length; i++) {
    const relativePath = files[i].replace(baseSource, '');
    console.log(relativePath)
    const segments = relativePath.split('/');
    console.log(segments);
    const formattedSegments = segments.map(i =>
        i
            .replace(/([A-Z])/g, ' $1')
            .trim()
            .split(' ')
            .map(i => i.toLowerCase())
            //.filter(i => i.length > 0)
            .reduce((path, i) => path + '-' + i)
    );
    console.log(formattedSegments);
    const targetPath = path.join(baseTarget, path.join.apply(null, formattedSegments)).replace('.cshtml', '.html');
    console.log(targetPath);
    fs.mkdirSync(path.dirname(targetPath), { recursive: true })
    fs.copyFile(files[i], targetPath, (err) => {
        if (err) throw err;
        console.log(`${files[i]} is copied to ${targetPath}`);
    });
}