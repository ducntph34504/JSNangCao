// Setting object properties with the same name as a variable
const firstName = 'John';
const lastName = 'Duc';
const age = 19;

const person = {
  firstName,
  lastName,
  age,
};

console.log(person.lastName);

// Destructuring object properties

const todo = {
  id: 1,
  title: 'become rich',
  user: {
    name: 'Duc',
  },
};
console.log(todo);

const {
  id: todoId, // rename id to todoId
  title,
  user: { name }, // destructuring multiple levels
} = todo;
console.log(todoId, title, todo.user);

// Destructuring arrays & using the rest/spread operator
const numbers = [23, 67, 33, 49, 52];

const [first, second, ...rest] = numbers;

console.log(first, second, rest);