function oddOccurrences(input) {
    const words = input.toLowerCase().split(' ');
    
    const wordCounts = {};

    for (let word of words) {
        wordCounts[word] = (wordCounts[word] || 0) + 1;
    }

    const oddWords = Object.entries(wordCounts)
        .filter(([word, count]) => count % 2 !== 0)
        .map(([word]) => word);

    console.log(oddWords.join(' '));
}

// Тестване на функцията
console.log("Резултат за първия вход:");
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');

console.log("\nРезултат за втория вход:");
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');