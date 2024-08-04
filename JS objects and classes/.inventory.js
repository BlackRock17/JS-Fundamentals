function heroesRegister(input) {
    let heroes = [];

    for (let heroData of input) {
        let [name, level, items] = heroData.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];

        heroes.push({ name, level, items });
    }

    heroes.sort((a, b) => a.level - b.level);

    for (let hero of heroes) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items.join(', ')}`);
    }
}

// Тестване на функцията
let input1 = [
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
];

console.log("Резултат за първия вход:");
heroesRegister(input1);

console.log("\nРезултат за втория вход:");
let input2 = [
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
];
heroesRegister(input2);