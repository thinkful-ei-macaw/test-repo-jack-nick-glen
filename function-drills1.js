'use strict';
function getYearOfBirth(age){
    return 2020 - age;
}
function createGreeting(name, age) {
    const yob = getYearOfBirth(age);
    return `Hi my name is ${name} and I'm ${age}. I was born in ${yob}`;
}
const greeting1 = createGreeting('Jack', 999);
console.log(greeting1);