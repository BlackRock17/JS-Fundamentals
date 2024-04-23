function solve(firstYield) {
    let yield = firstYield;
    let days = 0;
    let spiceLeft = 0;
    const workersConsume = 26;
    const yieldDrops = 10; 

    while (yield > 99) {
        spiceLeft += yield - workersConsume;
        yield -= yieldDrops;
        days += 1;
    }

    if (spiceLeft >= workersConsume) {
        spiceLeft -= workersConsume;
    }

    console.log(days);
    console.log(spiceLeft)
}

solve(450)