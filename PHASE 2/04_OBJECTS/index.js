// Objects 

// Creating an object
let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
};

console.log('Person Object:', person);

// Accessing object properties
console.log('First Name:', person.firstName);
console.log('Last Name:', person['lastName']);

// accessing non-existing property
console.log('Middle Name:', person.middleName); // undefined

// variable as a key
let key = 'age';
console.log('Age using variable key:', person[key]);
console.log('Age using direct key:', person.key); // undefined


// object destructuring - extracting properties into variables

let { firstName, lastName, gender } = person;
console.log('Destructured First Name:', firstName);
console.log('Destructured Last Name:', lastName);
console.log('Destructured Gender:', gender); // undefined



// modifying object properties
person.age = 31;
console.log('Updated Age:', person.age);
person['firstName'] = 'Jane';
console.log('Updated First Name:', person.firstName);

// adding new properties
person.gender = 'female';
console.log('   Added   Gender:', person.gender);

// deleting properties
delete person.lastName;
console.log('After Deleting Last Name:', person);

// Nested objects
let employee = {
    name: 'Alice',
    position: 'Developer',
    address: {
        street: '123 Main St',
        city: 'Metropolis',
        zip: '12345',
    },
};

console.log('Employee Object:', employee);
console.log('Employee City:', employee.address.city);


// Property VALUES can be ANYTHING


// 1️⃣ Function as Value (METHOD)
let obj = {
    run: function() {
        console.log('Running...'); // Function inside object = method
    }
};
obj.run(); // invoking the method


// 2️⃣ Array as Value
let student = {
    name: 'Bob',
    subjects: ['Math', 'Science', 'History'],
};
console.log('Student Subjects:', student.subjects);
console.log('First Subject:', student.subjects[0]);

// 3️⃣ Object as Value (NESTED OBJECT)
let car = {
    brand: 'Toyota',
    model: 'Camry',
    specifications: {
        engine: '2.5L',
        horsepower: 203,
        features: {
            bluetooth: true,
            sunroof: false,
        },
    },
};  

console.log('Car :', car);
console.log('Car Specifications:', car.specifications);
console.log('Car Bluetooth Feature:', car.specifications.features.bluetooth);



// Example:
// document.createElement();

// Breakdown:

// document → object
// createElement → key
// createElement() → method





