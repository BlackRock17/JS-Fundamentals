function oddAndEvenSum (number) {
    const numberToString = number.toString();
    let odd = 0;
    let even = 0;

    for (let i = 0; i < numberToString.length; i++) {
        let numberToInt = parseInt(numberToString[i])

        if (numberToInt % 2 === 0) {
            even += numberToInt
        } else {
            odd += numberToInt
        }
    }

    console.log(`Odd sum = ${odd}, Even sum = ${even}`)
}


oddAndEvenSum(3495892137259234)