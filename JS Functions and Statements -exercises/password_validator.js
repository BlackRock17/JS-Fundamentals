function checkPassword(password) {
    let isValid = true;
    let errors = [];

    if (password.length < 6 || password.length > 10) {
        isValid = false;
        errors.push("Password must be between 6 and 10 characters");
    }

    if (!/^[a-zA-Z0-9]+$/.test(password)) {
        isValid = false;
        errors.push("Password must consist only of letters and digits");
    }

    if ((password.match(/\d/g) || []).length < 2) {
        isValid = false;
        errors.push("Password must have at least 2 digits");
    }

    if (isValid) {
        console.log("Password is valid");
    } else {
        errors.forEach(error => console.log(error));
    }
}

// Примери за използване:
checkPassword("login");           // Твърде кратка, няма цифри
checkPassword("MyPass123");       // Валидна
checkPassword("Pa$sword123");     // Съдържа специален символ
checkPassword("MyPassword");      // Няма цифри
checkPassword("Mp3");             // Твърде кратка, само една цифра