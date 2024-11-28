// Question 1
/**
 * You are given an object book with the properties title, author, and yearPublished. Perform the following operations:
1.	Access the author property and print it.
2.	Modify the yearPublished property to 2022.
3.	Add a new property genre to the book object with the value “Fiction”.
4.	Delete the title property from the book object.

 */
var book = {
    'title' : "Hello World",
    'author' : "Sethu Maruthi",
    'yearPublished' : 2024
}
console.log(book); // Initially printing the object book.
console.log(book['author']); // Accessing the author property and printing it.
book['yearPublished'] = 2022; // Modify the yearPublished property to 2022.
book['genre'] = "Fiction"; // Add a new property genre to the book object with the value “Fiction”
delete book['title']; // Delete the title property from the book object.
console.log(book); // Finally printing the object.


//Question 2
/**
 * You are given an object employee with the properties name, age, position, and salary. Perform the following operations:
1.	Access the position property and print it.
2.	Modify the salary property to 50000.
3.	Add a new property department to the employee object with the value “HR”.
4.	Delete the age property from the employee object.

 */
var employee = {
    'name' : "Sethu Maruthi",
    'age' : 21,
    'position' : "Software Developer",
    'salary' : 25000
}
console.log(employee); // Initially printing the object employee.
console.log(employee['position']); // Access the position property and print it.
employee['salary'] = 50000; // Modify the salary property to 50000.
employee['department'] = "HR"; // Add a new property department to the employee object with the value “HR”.
delete employee['age']; // Delete the age property from the employee object.
console.log(employee); // Finally printing the object.


// Question 3
/**
 * You are given an object product with the properties id, name, price, and category. Perform the following operations:
1.	Access the price property and print it.
2.	Modify the category property to “Electronics”.
3.	Add a new property inStock to the product object with the value true.
4.	Delete the id property from the product object.
 */
var product = {
    'id' : 1,
    'name' : 'Redmi Note 8',
    'price' : 10000,
    'category' : 'Mobile Phones'
}
console.log(product); // Initially printing the object product.
console.log(product['price']); // Access the price property and print it.
product['category'] = "Electronics"; // Modify the category property to “Electronics”.
product['inStock'] = true; // Add a new property inStock to the product object with the value true.
delete product['id']; // Delete the id property from the product object.
console.log(product); // Finally printing the object.


// Question 4
/**
 * You are given an object car with the properties make, model, year, and color. Perform the following operations:
1.	Access the make property and print it.
2.	Modify the color property to “Black”.
3.	Add a new property engineType to the car object with the value “V6”.
4.	Delete the year property from the car object.
 */
var car = {
    'make' : "Sport Hatchback",
    'model' : "Civic Type R",
    'year' : 2021,
    'color' : 'Red'
}
console.log(car); // Initially printing the object car.
console.log(car['make']); // Access the make property and print it.
car['color'] = "Black"; // Modify the color property to “Black”.
car['engineType'] = "V6"; // Add a new property engineType to the car object with the value “V6”.
delete car['year']; // Delete the year property from the car object.
console.log(car); // Finally printing the object.


// Question 5
/**
 * You are given an object student with the properties name, age, grade, and school. Perform the following operations:
1.	Access the school property and print it.
2.	Modify the grade property to 95.
3.	Add a new property hobbies to the student object with the value ["reading", "sports"].
4.	Delete the age property from the student object.
 */
var student = {
    'name' : "Sethu Maruthi",
    'age' : 21,
    'grade' : "B",
    'school' : "DAV Public School"
}
console.log(student); // Initially printing the object student.
console.log(student['school']); // Access the school property and print it.
student['grade'] = 95; // Modify the grade property to 95.
student['hobbies'] = ["reading", "sports"]; // Add a new property hobbies to the student object with the value ["reading", "sports"].
delete student['age']; // Delete the age property from the student object.
console.log(student); // Finally printing the object.


// Question 6
/**
 * You are given an object user with the following structure:
const user = {
  username: "john_doe",
  profile: {
    firstName: "John",
    lastName: "Doe",
    age: 28,
    address: {
      street: "456 Elm St",
      city: "Gotham",
      zip: "54321"
    }
  },
  preferences: {
    theme: "dark",
    notifications: true
  }
};
Perform the following operations:
1.	Access the city property from the address object and print it.
2.	Modify the theme property in the preferences object to “light”.
3.	Add a new property phone to the profile object with the value “555-9876”.
4.	Delete the zip property from the address object.
 */
const user = {
    username: "john_doe",
    profile: {
      firstName: "John",
      lastName: "Doe",
      age: 28,
      address: {
        street: "456 Elm St",
        city: "Gotham",
        zip: "54321"
      }
    },
    preferences: {
      theme: "dark",
      notifications: true
    }
};
console.log(user); // Initially printing the object user.
console.log(user['profile']['address']['city']); // Access the city property from the address object and print it.
user['preferences']['theme'] = "light"; // Modify the theme property in the preferences object to “light”.
user['profile']['phone'] = "555-9876"; // Add a new property phone to the profile object with the value “555-9876”.
delete user['profile']['address']['zip']; // Delete the zip property from the address object.
console.log(user); // Finally printing the object.


// Question 7
/**
 * You are given an object company with the following structure:
const company = {
  name: "Tech Solutions",
  employees: [
    {
      name: "Alice",
      position: "Developer",
      contact: {
        email: "alice@tech.com",
        phone: "555-2345"
      }
    },
    {
      name: "Bob",
      position: "Manager",
      contact: {
        email: "bob@tech.com",
        phone: "555-6789"
      }
    }
  ],
  location: "New York"
};
Perform the following operations:
1.	Access the email of the second employee (Bob) and print it.
2.	Modify the phone number of Alice to “555-1111”.
3.	Add a new property department with the value “Engineering” to the first employee (Alice).
4.	Delete the location property from the company object.
 */
const company = {
    name: "Tech Solutions",
    employees: [
      {
        name: "Alice",
        position: "Developer",
        contact: {
          email: "alice@tech.com",
          phone: "555-2345"
        }
      },
      {
        name: "Bob",
        position: "Manager",
        contact: {
          email: "bob@tech.com",
          phone: "555-6789"
        }
      }
    ],
    location: "New York"
};
console.log(company); // Initially printing the object user.
console.log(company['employees'][1]['contact']['email']); // Access the email of the second employee (Bob) and print it.
company['employees'][0]['contact']['phone'] = "555-1111"; // Modify the phone number of Alice to “555-1111”.
company['employees'][0]['department'] = "Engineering"; // Add a new property department with the value “Engineering” to the first employee (Alice).
delete company['location']; // Delete the location property from the company object.
console.log(company); // Finally printing the object.