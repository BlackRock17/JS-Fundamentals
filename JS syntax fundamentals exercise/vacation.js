function solve(numPeople, typePeople, day) {
    let price;

    if (day === 'Friday') {
        switch (typePeople) {
            case 'Students':
                price = 8.45;
                break;
            case 'Business':
                price = 10.90;
                break;
            case 'Regular':
                price = 15;
                break;
        }
    } else if (day === 'Saturday') {
        switch (typePeople) {
            case 'Students':
                price = 9.80;
                break;
            case 'Business':
                price = 15.60;
                break;
            case 'Regular':
                price = 20;
                break;
        }        
    } else {
        switch (typePeople) {
            case 'Students':
                price = 10.46;
                break;
            case 'Business':
                price = 16;
                break;
            case 'Regular':
                price = 22.50;
                break;
        }
    }

    let totalPrice = price * numPeople;

    if (typePeople === 'Students' && numPeople >= 30) {
        totalPrice *= 0.85;
    } else if (typePeople === 'Business' && numPeople >= 100) {
        totalPrice -= price * 10;
    } else if (typePeople === 'Regular' && numPeople >= 10 && numPeople <= 20) {
        totalPrice *= 0.95;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}

solve(30,
    "Students",
    "Sunday")

solve(40,
    "Regular",
    "Saturday")
