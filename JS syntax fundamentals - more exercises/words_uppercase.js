function wordsUppercase(str) {

    const words = str.match(/\b\w+\b/g);
    
    const uppercaseWords = words.map(word => word.toUpperCase());
    
    const result = uppercaseWords.join(', ');
    
    console.log(result);
  }
  
  wordsUppercase('Hi, how are you?');
  wordsUppercase('hello');