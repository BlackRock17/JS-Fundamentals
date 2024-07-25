function checkArrForPalindrome (arr) {
    
    function isPalindrome (num) {
        const strNumber = num.toString();
        return strNumber === strNumber.split('').reverse().join('')
    }

    for (number of arr) {
        console.log(isPalindrome(number))
    }
}

checkArrForPalindrome([123,323,421,121])