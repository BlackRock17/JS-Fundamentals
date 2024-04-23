function solve(num1, operator, num2) {
    let result = num1;

    switch (operator) {
        case '+':
            result += num2;
            break;
        case '-':
            result -= num2;
            break;
        case '/':
            result /= num2;
            break;
        case '*':
            result *= num2;
            break;
    }

    console.log(result.toFixed(2));
}

solve(25.5,
    '-',
    3)