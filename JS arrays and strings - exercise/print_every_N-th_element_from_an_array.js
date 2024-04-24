function solve(arr, step) {
    let result = [];

    for (let i = 0; i < arr.length; i+= step) {
        result.push(arr[i])
    }

    return result;
}

function quickSolve(arr, step) { 
    let result = arr.filter((element, index) => index % step === 0);
    return result
}

console.log(quickSolve([51, 47, 32, 61, 21], 2));