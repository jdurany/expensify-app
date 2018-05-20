//
// Object destructuring
// 

// const person = {
//   name: 'Jaume',
//   age: 37,
//   location: {
//     city: 'Barcelona',
//     temp: 20
//   }
// };

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//   title: 'Ego is the enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const {name: publisherName = 'Self-published'} = book.publisher
// console.log(publisherName);

//
// Array destructuring
// 

const address = ['Ptge Bocabella', 'Barcelona', 'Catalunya', '08013'];
const [, city, state = 'Girona'] = address;
console.log(`You're in ${city} ${state}.`);

const item = ['Coffee', '2EUR', '2.50EUR', '2.75EUR'];
const [beberage, , mediumPrice] = item;
console.log(`A medium ${beberage} costs ${mediumPrice}.`)