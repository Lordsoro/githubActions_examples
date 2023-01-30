const fs = require('fs');

async function addMemeToReadme(positive_phrase, negative_phrase, result_tests) {
    let phrase;
    if (result_tests === 'success') {
        phrase = positive_phrase;
    } else {
        phrase = negative_phrase;
    }
    
    fs.readFile('README.md', 'utf-8', (err, data) => {
        if (err) throw err;
        const newData = data + `\n\n# ${phrase}`;
        fs.writeFile('README.md', newData, (err) => {
            if (err) throw err;
            console.log('README.md has been modified');
        });
    });
}

module.exports = addMemeToReadme;
