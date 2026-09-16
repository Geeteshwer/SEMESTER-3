const fs = require('fs');

fs.writeFileSync('Geetu.txt', 'Hello, myself Geetu', 'utf8',);
console.log('File written successfully.');

fs.appendFileSync('Geetu.txt', '\nI study in ABESEC', 'utf8');

const data = fs.readFileSync('Geetu.txt', 'utf8');
console.log(data);

// fs.unlinkSync('Geetu.txt');
// console.log('File deleted successfully.');

fs.mkdirSync('Folder');
console.log('Folder created successfully.');

// fs.rmdirSync('Folder');
// console.log('Folder deleted successfully.');

if (fs.existsSync('Geetu.txt')) {
    console.log('File exists.');
} else {
    console.log('File not found, need to create it.');
}