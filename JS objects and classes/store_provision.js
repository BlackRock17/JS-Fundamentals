function storeStock(currentStock, deliveryStock) {
    let stockObject = {};

    function addToStock(arr) {
        for (let i = 0; i < arr.length; i += 2) {
            let product = arr[i];
            let quantity = parseInt(arr[i + 1]);
            
            if (stockObject.hasOwnProperty(product)) {
                stockObject[product] += quantity;
            } else {
                stockObject[product] = quantity;
            }
        }
    }

    addToStock(currentStock);
    addToStock(deliveryStock);

    for (let product in stockObject) {
        console.log(`${product} -> ${stockObject[product]}`);
    }
}

// Тестване на функцията
let currentStock1 = ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'];
let deliveryStock1 = ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'];

console.log("Резултат за първия вход:");
storeStock(currentStock1, deliveryStock1);

console.log("\nРезултат за втория вход:");
let currentStock2 = ['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'];
let deliveryStock2 = ['Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'];
storeStock(currentStock2, deliveryStock2);