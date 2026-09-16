const fs = require('fs').promises;

async function writeFile() {
    try {
        await fs.writeFile('promise.txt', 'Hello Students');
        console.log('File written successfully.');
    } catch (error) {
        console.error('Error writing file:', error);
    }
}

async function readFile() {
    try {
        const data = await fs.readFile('promise.txt', 'utf8');
        console.log('File Content: ');
        console.log(data);
    } catch (error) {
        console.log('Error: ', error);
    }
}

async function appendFile() {
    try {
        await fs.appendFile('promise.txt', '\nWelcome to FSD Training');
        console.log('Data appended successfully');
    } catch (error) {
        console.log('Error', error);
    }
}

async function renameFile() {
    try {
        await fs.rename('promise.txt', 'promise_new.txt');
        console.log('Renamed');
    } catch (error) {
        console.log('Error', error);
    }
}

async function run() {
    await writeFile();
    await readFile();
    await appendFile();
    await renameFile();
}

run();