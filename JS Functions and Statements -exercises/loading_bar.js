function loadingBar (percent) {
    const filledSquares = percent / 10;
    const emptySquares = 10 - filledSquares;

    const bar = '[' + '%'.repeat(filledSquares) + '.'.repeat(emptySquares) + ']';

    if (percent === 100) {
        console.log("100% Complete!");
        console.log(bar);
    } else {
        console.log(`${percent}% ${bar}`);
        console.log("Still loading...");
    }
}

loadingBar(100)