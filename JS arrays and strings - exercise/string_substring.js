function solve(searchedWord, text) {
    const words = text.split(' ')

    for (let word of words) {
        if (word.toLowerCase() === searchedWord.toLowerCase()) {
            return console.log(`${searchedWord}`)
        } else {
            return console.log(`${searchedWord} not found!`)
        }
            
    }
}

function findWord(word, text) {
    let wordLower = word.toLowerCase();
    let pattern = new RegExp('\\b' + wordLower + '\\b', 'i');
    
    if (pattern.test(text)) {
      console.log(word);
    } else {
      console.log(`${word} not found!`);
    }
}

findWord('python',
'JavaScript is the best programming language');