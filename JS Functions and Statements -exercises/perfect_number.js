function perfectNumber (number) {
    let checkNum = 0

    for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            checkNum += i;
        }
    }

    if (checkNum === number) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.")
    }
}

perfectNumber(28)