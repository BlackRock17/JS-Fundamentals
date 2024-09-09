function adventure(input) {
    const characterCount = Number(input.shift());
    const posse = {};

    for (let i = 0; i < characterCount; i++) {
        const [characterName, hpInput, bulletsInput] = input.shift().split(' ');
        
        posse[characterName] = {
            hp: Number(hpInput),
            bullets : Number(bulletsInput),
        };
    }

    const commands = {
        FireShot(characterName, target) {
            if (posse[characterName].bullets) {
                const currentBullets = --posse[characterName].bullets;
                console.log(`${characterName} has successfully hit ${target} and now has ${currentBullets} bullets!`);   
            } else {
                console.log(`${characterName} doesn't have enough bullets to shoot at ${target}!`)
            }
        },
        TakeHit(characterName, damage, attacker) {
            damage = Number(damage);
            posse[characterName].hp -= damage;
            const currentHP = posse[characterName].hp;
            if (currentHP > 0) {
                console.log(`${characterName} took a hit for ${damage} HP from ${attacker} and now has ${currentHP} HP!`)
            } else {
                delete posse[characterName];
                console.log(`${characterName} was gunned down by ${attacker}!`);
            }
        },
        Reload(characterName) {
            const currentBullets = posse[characterName].bullets;
            if (currentBullets < 6) {
                posse[characterName].bullets = 6
                const reloadedBullets = 6 - currentBullets;
                console.log(`${characterName} reloaded ${reloadedBullets} bullets!`);
            } else {
                console.log(`${characterName}'s pistol is fully loaded!`);
            }
        },
        PatchUp(characterName, amound) {
            amound = Number(amound);
            const currentHP = posse[characterName].hp;
            if (currentHP < 100) {
                const newHp = Math.min(currentHP + amound, 100);
                posse[characterName].hp = newHp;
                const recoveredAmound = newHp - currentHP;
                console.log(`${characterName} patched up and recovered ${recoveredAmound} HP!`)
            } else {
                console.log(`${characterName} is in full health!`);
            }
        }
    }

    let commandInput = input.shift();

    while (commandInput !== 'Ride Off Into Sunset') {
        const [command, characterName, ...args] = commandInput.split(' - ');

        commands[command](characterName, ...args);

        commandInput = input.shift();
    }

    Object.keys(posse)
        .forEach(characterName => {
            console.log(characterName);
            console.log(`HP: ${posse[characterName].hp}`);
            console.log(`Bullets: ${posse[characterName].bullets}`);
        })
}



adventure(["2",
    "Jesse 100 4",
    "Walt 100 5",
    "FireShot - Jesse - Bandit",
     "TakeHit - Walt - 30 - Bandit",
     "PatchUp - Walt - 20" ,
     "Reload - Jesse",
     "Ride Off Into Sunset"]);