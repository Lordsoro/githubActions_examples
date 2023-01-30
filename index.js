
const fs = require("fs");

async function addMemeToReadme(positive_phrase, negative_phrase, result_tests) {
    let phrase;
    if (result_tests === 'success') {
        phrase = positive_phrase;
    } else {
        phrase = negative_phrase;
    }

    // Read the README file
    let readmeContent = fs.readFileSync("README.md", "utf-8");

    
    readmeContent = readmeContent + "\n" + phrase;

    
    fs.writeFileSync("README.md", readmeContent);
}

module.exports = addMemeToReadme;

