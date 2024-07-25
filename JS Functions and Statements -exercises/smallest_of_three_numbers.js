function smallestOfNumbers (a, b, c) {

    if (a < b && a < c) {
        console.log(a);
    } else if (b < c) {
        console.log(b);
    } else {
        console.log(c);
    }
}


smallestOfNumbers(2,
    5,
    3)
