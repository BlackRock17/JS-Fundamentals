function charactersInRange (a, b) {
    let firstChar = NaN;
    let secondChar = NaN;
    let result = '';

    if (a.charCodeAt(0) < b.charCodeAt(0)) {
        firstChar = a.charCodeAt(0);
        secondChar = b.charCodeAt(0);
    } else {
        firstChar = b.charCodeAt(0);
        secondChar = a.charCodeAt(0);
    }

    for (let i = firstChar + 1; i < secondChar; i++) {
        result += String.fromCharCode(i) + ' '
    }

    console.log(result);
}

charactersInRange('C',
'#')