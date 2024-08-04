function wordOccurrences(input) {
    const keywords = input[0].split(' ');
    
    const wordCounts = {};
    keywords.forEach(word => wordCounts[word] = 0);

    for (let i = 1; i < input.length; i++) {
        const words = input[i].split(' ');
        words.forEach(word => {
            if (wordCounts.hasOwnProperty(word)) {
                wordCounts[word]++;
            }
        });
    }

    const sortedResults = Object.entries(wordCounts)
        .sort((a, b) => b[1] - a[1]);

    sortedResults.forEach(([word, count]) => {
        console.log(`${word} - ${count}`);
    });
}

// Тестване на функцията
console.log("Резултат за първия вход:");
wordOccurrences([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);

console.log("\nРезултат за втория вход:");
wordOccurrences([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'
]);