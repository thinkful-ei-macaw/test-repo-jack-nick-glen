'use strict';

function getYearOfBirth(age) {
    let result = 2020 - age;
    if (result < 0) {
        throw new Error("Age cannot be negative");
    } else {
        return result;
    }
}

function createGreeting(name, age) {
    if (typeof name === 'string' || typeof age === 'number') {
        throw new Error("Arguments not valid");
    } else {
        const yob = getYearOfBirth(age);
        return `Hi my name is ${name} and I'm ${age}. I was born in ${yob}`;
    }
}
try {
    const greeting1 = createGreeting('Jack', "blargh");
    console.log(greeting1);
} catch (e) {
    console.log(e.message);
}