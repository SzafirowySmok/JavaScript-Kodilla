// Zadanie 1
const word1 = 'Hello';
const word2 = 'World';
console.log(`${word1} ${word2}`);

// Zadanie 2
multiple = (x, y=1) => console.log(x * y);
multiple(6, 6);

// Zadanie 3
const average = (...numbers) => {
    let result = 0;
    numbers.forEach(number => (result += number));
    return result/numbers.length
};
console.log(average(2,3,4,5,6,7));

//Zadanie 3 II wersja
const average = (...numbers) => numbers.reduce((p, c) => p + c)/numbers.length;
console.log(average(2,3,4,5,6,7));

// Zadanie 4
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1]; 
console.log(average(...grades));

// Zadanie 5
const table = [1, 4, 'Iwona', false, 'Nowak'];
let [, ,firstname, ,secondname] = table;
console.log(firstname);
console.log(secondname);
