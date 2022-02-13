//https://github.com/airbnb/javascript


// let country = "USA"
// console.log(country) 
// console.log(country.length)


// function getAddressLength(address){
//     return address.length
// }

// // console.log(getAddressLength('USA'))
// // The function WORKS but we don't see the console.log
// function double(number) {
//   console.log(number * 2) // we don't see this
//   return number * 2 // "result" of the function, will exit the function

// }

// let result = double(4) // result is 8 - but nothing logged in the Consolenode


// function getNextCentury(year) {
// 	// your code
//     console.log(year + 100)
//     return year + 100
// }

// // Sample usage - Do not modify
// getNextCentury(2020) // 2120
// getNextCentury(3000) // 3100

// function sum(a, b) {
// 	return a + b
// }

// // Sample usage (do not modify)
// sum(3, 5) // will return 8 (a = 3, b = 5)
// sum(4, 1) // will return 5 (a = 4, b = 1)


// let name = "Alex"
// let shouting = name.toUpperCase()

// console.log(shouting)
// console.log(name)


// function getUpperCaseName(name){
// 	// your code
//     return name.toUpperCase()
// }

// // Sample usage (do not modify)
// console.log(getUpperCaseName("sam")) // SAM
// console.log(getUpperCaseName("alex")) // ALEX
// console.log(getUpperCaseName("Johnny")) // JOHNNY

// function getLowerCaseName(name) {
// 	// your code
//     return name.toLowerCase()
// };

// // Sample usage (do not modify)
// console.log(getLowerCaseName("SAM"))
// console.log(getLowerCaseName("ALEX"))
// console.log(getLowerCaseName("JoHNnY"))


// /**
//  * @param {Object[]} course
//  * @param {string} course[].name
//  * @param {boolean} course[].isCompleted
//  */
//  function getCourseName(course) {
//     // your code
//     return `${course.name}`
//   }

//   // Sample usage - do not modify
//   let course1 = {
//     name: "Learn English",
//     isCompleted: true
//   };
//   let course2 = {
//     name: "Learn JavaScript",
//     isCompleted: false
//   };

//   console.log(getCourseName(course1)); // "Learn English"
//   console.log(getCourseName(course2)); // "Learn JavaScript"



// function upgradeUser(user) {
// 	// your code
//     `${user.hasPaid = true}`;
//     return user;
// }



// // Sample usage - do not modify
// console.log(upgradeUser({id: 1, hasPaid: false}));
// console.log(upgradeUser({id: 2, hasPaid: false}));


// {
//     "login": "Jacepwnce",
//     "id": 93041492,
//     "node_id": "U_kgDOBYuzVA",
//     "avatar_url": "https://avatars.githubusercontent.com/u/93041492?v=4",
//     "gravatar_id": "",
//     "url": "https://api.github.com/users/Jacepwnce",
//     "html_url": "https://github.com/Jacepwnce",
//     "followers_url": "https://api.github.com/users/Jacepwnce/followers",
//     "following_url": "https://api.github.com/users/Jacepwnce/following{/other_user}",
//     "gists_url": "https://api.github.com/users/Jacepwnce/gists{/gist_id}",
//     "starred_url": "https://api.github.com/users/Jacepwnce/starred{/owner}{/repo}",
//     "subscriptions_url": "https://api.github.com/users/Jacepwnce/subscriptions",
//     "organizations_url": "https://api.github.com/users/Jacepwnce/orgs",
//     "repos_url": "https://api.github.com/users/Jacepwnce/repos",
//     "events_url": "https://api.github.com/users/Jacepwnce/events{/privacy}",
//     "received_events_url": "https://api.github.com/users/Jacepwnce/received_events",
//     "type": "User",
//     "site_admin": false,
//     "name": null,
//     "company": null,
//     "blog": "",
//     "location": null,
//     "email": null,
//     "hireable": null,
//     "bio": null,
//     "twitter_username": null,
//     "public_repos": 5,
//     "public_gists": 0,
//     "followers": 1,
//     "following": 2,
//     "created_at": "2021-10-23T13:12:05Z",
//     "updated_at": "2022-01-10T18:42:26Z"
//   }



// /**
//  * @param {Object[]} user
//  * @param {string} user[].firstName
//  * @param {string} user[].lastName
//  * @param {number} user[].age
//  */
//  function getFormattedFullName(user) {
// 	// your code
//     return `${user.firstName} ${user.lastName.toUpperCase()}`;
// }

// // Sample usage - do not modify
// let user1 = {
//   firstName: "Sam",
//   lastName: "Doe",
//   age: 20
// };

// let user2 = {
//   firstName: "Charlie",
//   lastName: "Fort",
//   age: 31
// };

// console.log(getFormattedFullName(user1)); // "Sam DOE"
// console.log(getFormattedFullName(user2)); // "Charlie FORT"


// /**
//  * @param {Object[]} user
//  * @param {string} user[].firstName
//  * @param {string} user[].lastName
//  * @param {number} user[].age
//  */
//  function getIntials(user) {
// 	return `${user.firstName[0]}${user.lastName[0]}` 
// }

// // Sample usage - do not modify
// let user1 = {
//   firstName: "Sam",
//   lastName: "Doe",
//   age: 20
// };

// let user2 = {
//   firstName: "Charlie",
//   lastName: "Fort",
//   age: 31
// };

// console.log(getIntials(user1)); // "SD"
// console.log(getIntials(user2)); // "CF"









// Реализуйте reverse(), которая принимает на вход массив и располагает элементы внутри него в обратном порядке. Решение этой задачи подразумевает самостоятельную реализацию функции без использования встроенного метода reverse().

// const names = ['john', 'smith', 'karl']; // ['john', 'smith', 'karl']


const names = ['john', 'smith', 'karl'];

function reverseNames(names) {
    return [names[0], names[1], names[2]] = [names[2], names[1], names[0]];
}

console.log(reverseNames(names));


/////////////////////////////////////////////////////////////////////////////////
// Массивы



// let grade1 = 15;
// let grade2 = 18;

// let sum = grade1 + grade2;
// let avarege = sum / 2;

// console.log(sum);
// console.log(avarege);
// //

// function avaregeSum(grade1, grade2){
//     let sum = grade1 + grade2;
//      let avarege = sum / 2;
//      return avarege;

// }

// console.log(avaregeSum(1, 15))
// /////////////////////////////////////////////////////////////////////////////////


// let grades = [5, 10, 25, 15]; // массив

// // чтение индекса массива
// console.log(grades[0]);// 5
// console.log(grades[1]);// 10
// console.log(grades[2]);// 25
// console.log(grades[3]);// 15
// console.log(grades[4]);// вышли за пределы массива undefined
// /////////////////////////////////////////////////////////////////////////////////

// // обращение к последнему элементу массива
// console.log(grades[grades.length - 1]);// 15
// /////////////////////////////////////////////////////////////////////////////////

// //Примеры функций 

// // #1

// function getFirstitem(items){
//     return items;
// }
// console.log(getFirstitem([15, 45, 25, 50]));


// #2

// function getFullName(firstName, lastName){
//     return `${firstName} ${lastName}`;
// }

// console.log(getFullName('Same', 'Dose'));

// #3

// function getFullName(names){
//     return `${names[0]} ${names[1]}`;
// }
// console.log(getFullName(['Sava', 'Sajin']));
/////////////////////////////////////////////////////////////////////////////////

// Задача #1
// Завершите функцию describeShopLocation так, чтобы она вернула строку: The shop is located at LAT, LON. Замените LAT и LON на соответствующие элементы массива.

// function describeShopLocation(coordinates) {
// 	return 'The shop is located at:' + `${coordinates[0]} ${coordinates[1]}`; 
// }

// // Sample usage - do not modify
// console.log(describeShopLocation([5.123, 2.374]))
// console.log(describeShopLocation([-2.207, 9.319]))
/////////////////////////////////////////////////////////////////////////////////

// ПРОЕКТ №1 СДЕЛАН КОД  return ((firstRectangle[0] * firstRectangle[1])- (secondRectangle[0] * secondRectangle[1]));
/////////////////////////////////////////////////////////////////////////////////

// Изменение элементов массива

// let grades = [5, 3, 8];
// // grades[0] = 10;
// // console.log(grades);

// function fixGrades(grades) {
//     grades[0] = 6;
//     return grades
// }
// console.log(fixGrades(grades));
/////////////////////////////////////////////////////////////////////////////////

// Задача №2

// function incrementFirstTemperature(temperatures) {
//     // your code
//     temperatures[0] = temperatures[0] + 1;
//     temperatures[1] = temperatures[1] + 3;
//     temperatures[2] = temperatures[2] + 6;
//     temperatures[3] = temperatures[3] + 3;
//     return temperatures;
//   }

//   // Sample usage
//   console.log(incrementFirstTemperature([3, 5, 4, 7]));
//   console.log(incrementFirstTemperature([-5, 12, 15, 18, 13]));
/////////////////////////////////////////////////////////////////////////////////

//  ДЛИННА МАССИВА

// let numbers = [10, 30, 40, 10, 50];

// console.log(numbers.length);
/////////////////////////////////////////////////////////////////////////////////


// Задачка№ 3

// function getMessage(items){
//     return 'You have ' + items.length + ' items'
// }
// console.log(getMessage([-5, 12, 15])) // "You have 3 items"
// console.log(getMessage([13, 10])) // "You have 2 items"
// console.log(getMessage([])) // "You have 0 items"
/////////////////////////////////////////////////////////////////////////////////

// Проект №2 код 
// /**
//  * @param {array} grades
//  */
//  export function getNumberOfGrades(grades) {
// 	// your code
//   return grades.length;
// }

// /**
//  * @param {array} grades
//  */
// export function getFirstGrade(grades) {
// 	// your code
//   return grades[0];
// }

// /**
//  * @param {array} grades
//  */
// export function getLastGrade(grades) {
// 	// your code
//   return grades[grades.length - 1];
// }
////////////////////////////////////////////////////////////////////////////////

// ДОБАВЛЕНИЯ ЭЛЕМЕНТА В МАССИВ 

// let numbers = [];
// numbers.push(10);
// console.log(numbers);

// numbers.push(200);
// console.log(numbers);

// let temperatures = [10, 15, 48, 50, 35, 40];
// temperatures.push(200);
// console.log(temperatures);

// .push() - добавляет элемент в конец массива
/////////////////////////////////////////////////////////////////////////////////

// let numbers = [10, 15, 48, 50, 35, 40];
// let value = numbers.push(15);//возвращает новую длинну массива
// console.log(value);

// Если мы присвоим результат вызова метода .push() какой-то переменной, это будет число, представляющее новую длину массива:

// .push()- возвращает новую длинну массива
/////////////////////////////////////////////////////////////////////////////////

// Возврат внутри функции

// function addTemperature(temperatures){
//    /*return */ temperatures.push(10);
//     return temperatures;
// }
// // 404 строчка ошибочная и вместо добавления в массив элемента вернёт его длинну.
// console.log(addTemperature([-5, 12, 15]));
/////////////////////////////////////////////////////////////////////////////////

// Проект №3
// /**
//  * @param {array} grades
//  * @param {number} grade
//  */
//  export function addGrade(grades, grade) {
//     // your code
//     grades.push(grade);
//     return grades;
//   }

//   /**
//    * @param {array} grades
//    */
//   export function getNumberOfGrades(grades) {
//     // your code
//     return grades.length;
//   }

//   /**
//    * @param {array} grades
//    */
//   export function getFirstGrade(grades) {
//     // your code
//     return grades[0];
//   }

//   /**
//    * @param {array} grades
//    */
//   export function getLastGrade(grades) {
//     // your code
//     return grades[grades.length - 1];
//   }
////////////////////////////////////////////////////////////////////////////////

// array.includes() - Метод, который определяет существует ли элемент в массиве или нет и возвращает ture или false

// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers.includes(1));
// console.log(numbers.includes(2));
// console.log(numbers.includes(3));
// console.log(numbers.includes(4));
// console.log(numbers.includes(5));
// console.log(numbers.includes(6));
/////////////////////////////////////////////////////////////////////////////////

// Array.join() - преобразует массив в строку путем склеивания элементов.

// let numbers = [3, 1, 6];
// let string = numbers.join(';');
// console.log(string);

// Другим распространенным примером является преобразование массива в CSV формат:

// let numbers = [3, 1, 6];
// let string = numbers.join(', ');
// console.log(string);
// CSV означает значения, разделенные запятыми, и является популярным форматом, поскольку его можно легко импортировать в Excel.

/////////////////////////////////////////////////////////////////////////////////

// function convertToString(grades) {
//     return grades.join(' & ');
// }

// console.log(convertToString([10, 15, 13, 19]));
// console.log(convertToString([7, 13, 20, 15]));

// function exportToCSV(grades) {
//     return grades.join(', ');
// }
// console.log(exportToCSV([10, 15, 13, 19]));
// console.log(exportToCSV([7, 13, 20, 15]));

/////////////////////////////////////////////////////////////////////////////////

// Проект №4
// /*  stats.js */

// /**
//  * @param {array} grades
//  * @param {number} grade
//  */
//  export function addGrade(grades, grade) {
// 	// your code
//   grades.push(grade);
//   return grades;
// }

// /**
//  * @param {array} grades
//  */
// export function getNumberOfGrades(grades) {
// 	// your code
//   return grades.length;
// }

// /**
//  * @param {array} grades
//  */
// export function getFirstGrade(grades) {
// 	// your code
//   return grades[0];
// }

// /**
//  * @param {array} grades
//  */
// export function getLastGrade(grades) {
// 	// your code
//   return grades[grades.length - 1];
// }

// /**
//  * @param {array} grades
//  */
// export function isTestTooEasy(grades) {
// 	// your code
//  if (grades.length >= 5){
//    return 'true'
//  } else {
//    return false;
//  }
// }

// /**
//  * @param {array} grades
//  * @param {number} grade
//  */
// export function gradeExists(grades, grade) {
// 	// your code
//   return grades.includes(grade);

// }

// /**
//  * @param {array} grades
//  */
// export function exportCSV(grades) {
// 	// your code
//   return grades.join(', ');
// }
////////////////////////////////////////////////////////////////////////////////

// array.forEach()- Метод .forEach() позволяет итерироваться по элементам массива.

// let grades = [10, 18, 20, 15, 18];
// let sum = 0;

// grades.forEach(function (grade){
//     sum = sum + grade;
//     // console.log(grade);
// })
// console.log(sum);


// function calculateSum(items) {
//     let sum = 0;

//     items.forEach(function (item) {
//         sum = sum + item;
//     });
//     return sum;
// }

// console.log(calculateSum([10, 20, 30])) // 60
// console.log(calculateSum([5, 2])) // 7
// console.log(calculateSum([])) // 0
/////////////////////////////////////////////////////////////////////////////////

// Проект №5
// /* stats.js */

// /**
//  * @param {array} grades
//  */
//  export function getSumOfGrades(grades) {
//     // your code
//     let sum = 0;

//     grades.forEach(function (grade) {
//       sum = sum + grade;
//     })
//     return sum;
//   }

//   /**
//    * @param {array} grades
//    */
//   export function getAverageGrade(grades) {
//     // your code
//     let result = 0;
//     let avarege = grades.length;

//     grades.forEach(function (grade){
//       result = (result + grade) / avarege;
//     })
//     return result;
//   }
/////////////////////////////////////////////////////////////////////////////////

// Array.map()-
// нахождение суммы элементов массива с условием

// let grades = [12, 8, 13, 9, 15];

// let sum = 0;

// grades.forEach(function (grade) {
//     if (grade >= 0) {
//         sum = sum + grade;
//     }
//     return sum;
// });

// console.log(sum);


//Каждый раз, когда вы сталкиваетесь с подобными сценариями, когда вам нужно преобразовать существующий массив в новый, вы должны использовать метод .map().

// .map() позволяет применить преобразование к каждому элементу массива.

// let grades = [10, 15, 13];

// let doubledGrades = grades.map(function (grade){
//     return grade * 2;
// });

// console.log(doubledGrades);
// console.log(grades);


// task 

// function tripleGrades(grades) {
//    let newGrade = grades.map(function(grade){
//        return grade * 3;
//    });
//    return newGrade;
// };

// // Sample usage - do not modify
// console.log(tripleGrades([10, 20])) // [30, 60]
// console.log(tripleGrades([5, 12, 20, 10])) // [15, 36, 60, 30]

// Array.reduce() - цель данного метода в уменьшении массива до одного значения.

// .reduce() - универсальная функция, которая сводит массив к одному значению. То, как он будет сводить этот массив к одному значению, настраивается разработчиком.

// let grades = [10, 15, 5];

// let sum = grades.reduce(function (total, current) {
//     return total + current;
// }, 0);

// console.log(sum);
// let grades = [10, 5, 15, 20]

// let sum = grades.reduce(function(total, current) {
//   console.log(`Total is ${total}`)
//   console.log(`Current is ${current}`)
//   console.log("---")
//   return total + current
// }, 0);

// console.log(`Sum is ${sum}`)

// task

// function sumNumbers(numbers) {
// 	let sum = numbers.reduce(function (total, current){
//         return total + current;
//     }, 0);
//     return sum;
// }

// // Sample usage - do not modify
// console.log(sumNumbers([10, 20, 30])) // 60
// console.log(sumNumbers([2, 4, 2, 10])) // 18