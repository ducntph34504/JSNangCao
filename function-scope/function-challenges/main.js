const getCelcius = (a) => {
    const celsius = ((a - 32) * 5/9); 
    return Math.round(celsius);
};
console.log(`${getCelcius(100)} \xB0C`);

const minMax = (arr) => {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    return {min, max};
}
console.log(minMax([12, 44, 56, 15, 99, 58, 71, 0, 15421]));

((length, width) => {
const area = length * width;

const output = `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`;

console.log(output);
})(9, 3);