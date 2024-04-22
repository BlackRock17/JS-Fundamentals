function solve(number) {
    let isSame = true;
    let numberAsString = number.toString();
    let sum = Number(numberAsString[0]);
    

    for (let i = 1; i < numberAsString.length; i++) {
        if (numberAsString[i] !== numberAsString[i - 1]){
            isSame = false
        }
        sum += Number(numberAsString[i])
    }

    console.log(isSame);
    console.log(sum)
}

solve(2222222)