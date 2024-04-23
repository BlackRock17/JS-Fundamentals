function solve(numbers) {
    let result = 0;

    for (let i = 0; i < numbers.length; i++) {
        num = numbers[i];

        if (num % 2 === 0) {
            result += num;
        } else {
            result -= num;
        }
    }

    console.log(result);
}


solve([3,5,7,9])