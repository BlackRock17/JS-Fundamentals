function solve(arr) {
    let username = arr[0];
    let counter = 0;

    for (let i = 1; i <= arr.length; i++) {
        let password = arr[i].split('').reverse().join('');

        if (username === password) {
            console.log(`User ${username} logged in.`);
            break;
        } else {
            counter += 1;
            if (counter === 4) {
                console.log(`User ${username} blocked!`)
                break
            }
            console.log('Incorrect password. Try again.');
        }
    }
}

solve(['sunny','rainy','cloudy','sunny','not sunny'])