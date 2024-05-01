function solve(wordsInput, template) {
    const words = wordsInput.split(', ');
    const templateWords = template.split(' ');

    const result = templateWords.map(tWord => tWord === '*'.repeat(tWord.length)
        ? words.find(w => w.length === tWord.length)
        : tWord)
        .join(' ')
    
    console.log(result);
}

solve('great',
'softuni is ***** place for learning new programming languages')