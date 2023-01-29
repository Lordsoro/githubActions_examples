
const { createCanvas } = require('canvas');

async function addMemeToReadme(positive_phrase, negative_phrase, result_tests) {
    let phrase;
    if (result_tests === 'success') {
        phrase = positive_phrase;
    } else {
        phrase = negative_phrase;
    }

    const canvas = createCanvas(800, 600);
    const ctx = canvas.getContext('2d');

    // Add text to canvas
    ctx.font = '48px sans-serif';
    ctx.fillText(phrase, 50, 50);


}

module.exports = addMemeToReadme;
