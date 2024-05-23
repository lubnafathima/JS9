// 1. Create an empty object named `myObject`.
let myObject = {};

// 2. Add a property `name` with the value "John" to the object `myObject`.
// myObject.name = "John";

// 3. Access the value of the `name` property from `myObject` using dot notation.
// console.log(myObject.name);

// 4. Add a new property `age` with the value 25 to the object `myObject`.
// myObject.age = 25;

// 5. Access the value of the `age` property from `myObject` using bracket notation.
// console.log(myObject.age);

// 6. Check if the property `city` exists in `myObject`. Return `true` if it exists, otherwise `false`.
// if (myObject.city) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// 7. Remove the `name` property from the object `myObject` using the `delete` operator.
// delete myObject.name;

// 8. Iterate over the properties of `myObject` and log each property and its value to the console.
// for(let key in myObject) {
//     console.log(key + " is " + myObject[key]);
// }

// 9. Create a method `greet` in `myObject` that logs "Hello, John!" to the console. Call this method.
// myObject.greet = function () {
//     console.log('Hello, John!');
// }
// myObject.greet();

// 10. Create a new object named `anotherObject` by cloning the properties of `myObject`.
// let anotherObject = myObject;

// 11. Use object destructuring to create variables `name` and `age` with the values from `myObject`.

// 12. Add a property `experience` to `myObject` and set its value to an object representing work experience (e.g., `{ company: "ABC Corp", years: 2 }`).
// myObject.experience = {
//     company: "ABC Corp", 
//     years: 2,
// }

// 13. Access the company name from the `experience` property in `myObject`.
// console.log(myObject.experience.company);

// 14. Create a method `updateAge` in `myObject` that takes a new age as a parameter and updates the `age` property.
// myObject.updateAge = function (updateAge) {
//     myObject.age = updateAge;
// }
// myObject.updateAge(30);

// 15. Add a property `address` to `myObject` with values for street, city, and postal code.
// myObject.address = {
//     street: "123 Main Street",
//     city: "Nashville",
//     "postal code": "37011",
// }

// 16. Create a new object `detailsObject` with properties for education, such as `school` and `degree`. Merge it with `myObject`.

// 17. Check if `myObject` has any properties. Return `true` if it does, otherwise `false`.
// for (let key in myObject) {
//     if(key) {
//         console.log("true");
//     } else {
//         console.log("false");
//     }
// }

// 18. Update the `name` property in `myObject` to "Jane".
// myObject.name = "Jane";

// 19. Add a computed property `isAdult` to `myObject` that returns `true` if the person is 18 or older, otherwise `false`.
// let isAdult;
// if(myObject.age >= 18) {
//     isAdult = true;
// } else {
//     isAdult = false;
// }

// myObject.isAdult = isAdult;

// 20. Remove the `age` property from `myObject`.
// delete myObject.age;

// 21. Create a method `changeAddress` in `myObject` that takes new values for street, city, and postal code and updates the `address` property.
// let changeAddress = {
//     street: "456 Oak Avenue",
//     city: "Los Angeles",
//     "postal code": "90001",
// }

// myObject.address = changeAddress;

// 22. Add a property `grades` to `myObject` with values as an object representing subject grades (e.g., `{ math: "A", science: "B" }`).
// myObject.grades = { 
//     math: "A", 
//     science: "B" 
// }

// 23. Remove the `grades` property from `myObject`.
// delete myObject.grades;

// 24. Update the `address` property in `myObject` by adding a new field, `country`, with a value.
// myObject.address.country = "USA";

// 25. Create a computed property `fullName` in `myObject` that concatenates the `firstName` and `lastName` properties if they exist.
// if(myObject.firstName && myObject.lastName) {
//     myObject.fullName = myObject.firstName + " " + myObject.lastName;
// } else {
//     myObject.fullName = myObject.name;
// }

// 26. Add a property `hobbies` to `myObject` with an array of strings representing hobbies.
// myObject.hobbies = ["Painting", "Baking"];

// 27. Remove a specific hobby from the `hobbies` property in `myObject`.
// delete myObject.hobbies[1];

// 28. Update the `greet` method in `myObject` to include the person's age in the greeting.
// myObject.greet = function (age) {
//     console.log('Hello, John! of ' + age + ' years old.');
// }

// 29. Add a property `interests` to `myObject` with values as an object representing different interests (e.g., `{ sports: true, music: false }`).
// myObject.interests = { 
//     sports: true, 
//     music: false 
// }

// 30. Toggle the value of a specific interest in the `interests` property of `myObject`.

// 
console.log(myObject);
// console.log(anotherObject);