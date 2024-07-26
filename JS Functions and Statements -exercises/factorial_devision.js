function factorialDivision(n1, n2) {
    
    function factorial(n) {
        if (n === 0 || n === 1) {
            return 1;
        }
        return n * factorial(n - 1);
    }

    
    const fact1 = factorial(n1);
    const fact2 = factorial(n2);

    
    const result = fact1 / fact2;

    
    return result.toFixed(2);
}


console.log(factorialDivision(5, 2)); 
console.log(factorialDivision(6, 2)); 