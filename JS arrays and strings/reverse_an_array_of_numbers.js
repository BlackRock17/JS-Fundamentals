function solve(n, elements) {
    let result = [];

    for (let i = 0; i < n; i++) {
        result.push(elements[i])
    }

    console.log(result.reverse().join(' '));
}

solve(4, [-1, 20, 99, 5])