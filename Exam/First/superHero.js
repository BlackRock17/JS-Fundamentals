function superheroAlliance(input) {
    let heroes = [];
    const n = parseInt(input[0]);
    
    for (let i = 1; i <= n; i++) {
        const [name, powers, energy] = input[i].split('-');
        heroes.push({
            name,
            powers: powers.split(','),
            energy: parseInt(energy)
        });
    }
    
    const output = [];
    for (let i = n + 1; i < input.length; i++) {
        if (input[i] === 'Evil Defeated!') break;
        
        const [command, ...params] = input[i].split(' * ');
        
        switch (command) {
            case 'Use Power':
                usePower(params[0], params[1], parseInt(params[2]));
                break;
            case 'Train':
                train(params[0], parseInt(params[1]));
                break;
            case 'Learn':
                learn(params[0], params[1]);
                break;
        }
    }
    
    heroes.forEach(hero => {
        output.push(`Superhero: ${hero.name}`);
        output.push(`- Superpowers: ${hero.powers.join(', ')}`);
        output.push(`- Energy: ${hero.energy}`);
    });
    
    return output.join('\n');
    
    function usePower(name, power, energyRequired) {
        const hero = heroes.find(h => h.name === name);
        if (hero && hero.powers.includes(power) && hero.energy >= energyRequired) {
            hero.energy -= energyRequired;
            output.push(`${name} has used ${power} and now has ${hero.energy} energy!`);
        } else {
            output.push(`${name} is unable to use ${power} or lacks energy!`);
        }
    }
    
    function train(name, trainingEnergy) {
        const hero = heroes.find(h => h.name === name);
        if (hero) {
            if (hero.energy === 100) {
                output.push(`${name} is already at full energy!`);
            } else {
                const energyGained = Math.min(100 - hero.energy, trainingEnergy);
                hero.energy += energyGained;
                output.push(`${name} has trained and gained ${energyGained} energy!`);
            }
        }
    }
    
    function learn(name, newPower) {
        const hero = heroes.find(h => h.name === name);
        if (hero) {
            if (hero.powers.includes(newPower)) {
                output.push(`${name} already knows ${newPower}.`);
            } else {
                hero.powers.push(newPower);
                output.push(`${name} has learned ${newPower}!`);
            }
        }
    }
}

// Test the function with the provided examples
const examples = [
    [
        "3",
        "Iron Man-Repulsor Beams,Flight-80",
        "Thor-Lightning Strike,Hammer Throw-10",
        "Hulk-Super Strength-60",
        "Use Power * Iron Man * Flight * 30",
        "Train * Thor * 20",
        "Train * Hulk * 50",
        "Learn * Hulk * Thunderclap",
        "Use Power * Hulk * Thunderclap * 70",
        "Evil Defeated!"
    ],
    [
        "2",
        "Iron Man-Repulsor Beams,Flight-20",
        "Thor-Lightning Strike,Hammer Throw-100",
        "Train * Thor * 20",
        "Use Power * Iron Man * Repulsor Beams * 30",
        "Evil Defeated!"
    ],
    [
        "2",
        "Iron Man-Repulsor Beams,Flight-100",
        "Thor-Lightning Strike,Hammer Throw-50",
        "Train * Thor * 20",
        "Learn * Thor * Hammer Throw",
        "Use Power * Iron Man * Repulsor Beams * 30",
        "Evil Defeated!"
    ]
];

examples.forEach((example, index) => {
    console.log(`Example ${index + 1}:`);
    console.log(superheroAlliance(example));
    console.log();
});