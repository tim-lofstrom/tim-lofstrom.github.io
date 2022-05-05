const path = require('path');
const fs = require('fs');
const yamlFront = require('yaml-front-matter');

function getFrontMatter(path, directoryPath, file) {
    const filePath = path.join(directoryPath, file);
    const fileContents = fs.readFileSync(filePath);
    return yamlFront.loadFront(fileContents);
}

function getMetaData(data, file) {
    return {
        name: data.name,
        title: data.title,
        subtitle: data.subtitle,
        page: data.page,
        date: data.date,
        file: file
    };
}

const directoryPath = path.join(__dirname, 'src', 'assets', 'posts');
const files = fs.readdirSync(directoryPath);


const data = files.map(file => {
    const data = getFrontMatter(path, directoryPath, file);
    return getMetaData(data, file);
});

const jsonData = JSON.stringify(data);
fs.writeFileSync('src/assets/posts.json', jsonData);