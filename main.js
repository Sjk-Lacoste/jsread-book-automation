'use strict';

let fs = require('fs');

const book = 'test_file.txt';

fs.readFile(book, 'utf8', (err, str) => {

    // Cast string to lower case
    str = cleanString(str);
    
    const words = splitString(str);
    
    let wordsObj = {};

    words.forEach(el => {
        // Do not count empty spaces.
        if (el.trim() == '') return;
        wordsObj.hasOwnProperty(el) ? wordsObj[el]++ : wordsObj[el] = 1;
    });

    let word, count = 0;

    // Find the most used word
    for (const prop in wordsObj) {
        if(prop.length == 7){
            if (wordsObj[prop] > count) {
                word = prop;
                count = wordsObj[prop];
            }
        }
    }

    console.log(word, count);

});

function splitString(str) {
    return str.split(/\s+/);
}

function cleanString(str) {
    const regex = /[.,"();*#\[\]?!@%_“$:”0-9‘]/g;
    return str.toLowerCase().replace(regex, '');
}