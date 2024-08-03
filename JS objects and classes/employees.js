function employees (employees) {

    for (let employee of employees){
        console.log(`Name: ${employee} -- Personal Number: ${employee.length}`);
    }

}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ])