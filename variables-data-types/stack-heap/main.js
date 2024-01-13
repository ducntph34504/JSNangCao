const name = 'Duc';
const age = 20;

const person = {
  name: 'Tuan',
  age: 30,
};

let newName = name;
newName = 'Duc Nguyen';

let newPerson = person;
newPerson.name = 'Tuan Bui';

console.log(name, newName); 
console.log(person, newPerson); 