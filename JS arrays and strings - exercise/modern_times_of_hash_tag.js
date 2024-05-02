function solve(text) {
    let words = text.split(' ');

    for (let word of words) {
        if (word[0] === '#' && word.length > 1 && /^[a-zA-Z]+$/.test(word.slice(1))) {
            console.log(word.slice(1));
        }
    }
}

solve('The symbol # is known #variously in English-speaking #regions as the #number sign')