let x;

// Creating an object
const person = {
  name: 'Duc Nguyen',
  age: 19,
  isAdmin: true,
  address: {
    street: '123 Yên Phụ',
    city: 'Hà Nội',
    state: '',
  },
  hobbies: ['music', 'game'],
};

// Accessing object properties
x = person.name; console.log(x);
x = person['age']; console.log(x);
x = person.address.city; console.log(x);
x = person.hobbies[0]; console.log(x);
delete person.age; console.log(person);

// Updating properties
person.name = 'Duc Nguyen';
person['isAdmin'] = false;

// Deleting properties
delete person.age;

// Create new properties
person.hasChildren = true;

// Add functions
person.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

person.greet();

// Keys with multiple words
const person2 = {
  'first name': 'Brad',
  'last name': 'Traversy',
};

x = person2['first name'];

