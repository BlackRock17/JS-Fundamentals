function solve(num) {
    let sum = 0;

    while (num > 0) {
        sum += num % 10;

        num = Math.trunc(num / 10)
    }

    console.log(sum);
}

function solvetextnum(num) {
    let sum = 0;
    let textnumber = num.toString();

    for (let i = 0; i < textnumber.length; i++) {
        sum += Number(textnumber[i])
    }

    console.log(sum)

}

solvetextnum(234)