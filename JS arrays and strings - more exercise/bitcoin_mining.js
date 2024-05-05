function solve(arr) {
    let btc;
    let firstDayBuyBtc;
    let money = 0;
    const btcPrice = 11949.16;
    const goldPrice = 67.51;

    for (let i = 0; i <= arr.length; i++) {

        let goldGrams = arr[i];

        if (i % 3 === 0) {
            money += (goldGrams * goldPrice) * 0.7;
        } else {
            money += goldGrams * goldPrice
        }

        if ((money / btcPrice) >= 1){

            btc += Math.floor(money / btcPrice);
            money = money % btcPrice;

            if (!firstDayBuyBtc) {
                firstDayBuyBtc = i;
            }

        }
    }

    console.log(`Bought bitcoins: ${btc}`);

    if (btc > 1) {
        console.log(`Day of the first purchased bitcoin: ${firstDayBuyBtc}`)
    }

    console.log(`Left money: ${money.toFixed(2)} lv.`)
}

solve([100, 200, 300])