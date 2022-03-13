// // // Задача №1

// // // создать функцию, которая удаляет первый и последний символы строки. Вам дан один параметр, исходная строка. Вам не нужно беспокоиться о строках, содержащих менее двух символов.
// // // console.log(removeChar('eloquent')); // loquen
// // // console.log(removeChar('country')); // ountr
// // // console.log(removeChar('person')); // erso

// // function removeChar(strings) { // создаем фукцию в которую по итогу будет вкладываться нужная нам строка. 
// //     let string = ''; // Создаем переменную, к которой будет применяться метод (.substring(https://learn.javascript.ru/string))
// //     string = strings.substring(1, strings.length - 1); // применяем метод. Согласно условию задачи нам требуется убрать первый символ и последний.
// //     return string; // Возвращаем результат преобразования в переменную
// // };

// // // Проверка
// // console.log(removeChar('eloquent')); // loquen
// // console.log(removeChar('country')); // ountr


// // // Задача №2

// // //Реализуйте функцию, которая высчитывает сумму всех элементов массива, которые делятся без остатка на 3.

// // // const coll1 = [8, 9, 21, 19, 18, 22, 7]; 
// // // calculateSum(coll1); // 48 
// // // const coll2 = [2, 0, 17, 3, 9, 15, 4] 
// // // calculateSum(coll2); // 27

// // const coll1 = [8, 9, 21, 19, 18, 22, 7];
// // const coll2 = [2, 0, 17, 3, 9, 15, 4];
// // let result = 0

// // function calculateSum(items) { // создается функция для расчета суммы .
// //     items.forEach(function (item) { // вызыватеся метод (.forEach) для того, чтобы он и итерировал наш массив.(вызов обратной функции)
// //         if (item % 3 === 0) { // прописываем условия задачи. 
// //             result += item;
// //         };
// //     });
// //     return result;
// // };

// // //Проверка
// // console.log(calculateSum(coll1)); //48
// // // console.log(calculateSum(coll2)); // 27

// // //Не знаю почему, но при вызове 2-ух не закоментированных ( console.log(calculateSum(coll1)) и console.log(calculateSum(coll2)) ), первый ответ он выдаёт правильный, а второй выдаёт, как 75. Если же их запускать по отдельности, то всё ок.

// let arrays = [25, 45, 80, 90];
// let sum = 0
// let arr = arrays.map(array => {
//     console.log(array)
//     sum = sum + array
//     return sum
// })

// console.log(sum)


// function greetUser (name) {
//     return "Hello " + name;
// }

// console.log(greetUser("Anton"))

// function getAgeMessage (age){
//     return "You are " + age + " years old";
// }

// console.log(getAgeMessage(28))


// function welcomeUser (x){
//     return "Welcome " + x;
// }

// console.log(welcomeUser("Anton"))
// console.log(welcomeUser("Galina"))
// console.log(welcomeUser("Sergey"))

// function getAgeDescription (x){
//     return "You are currently " + x + " years old"
// }

// console.log(getAgeDescription(28));

// function showEmailConfirmation (x){
//     return "We just sent an email to " + x +". Please check your inbox!"
// }

// console.log(showEmailConfirmation("jacepwnce@yandex.ru"))

// function getFullName (firstName, lastName){
//     return firstName + lastName;
// }

// console.log(getFullName("Anton", " Bekhtgold"))


// let grades = [85, 105, 10006];

// console.log(grades[0]);
// console.log(grades[1]);
// console.log(grades[2]);

// function describeShopLocation(coordinates) {
// 	return `The shop is located at: ${coordinates[0]} ${coordinates[1]}`
// }

// // Sample usage - do not modify
// console.log(describeShopLocation([5.123, 2.374]))
// console.log(describeShopLocation([-2.207, 9.319]))


// const getLatLngElevation = userLocation => {
// 	const {lat, lng, elevation = 0} = userLocation;
//     return `The latude is ${lat}, the longtiude is ${lng} and the elevation is ${elevation} meters`
// }

// // Sample usage - do not modify
// const userLocation = {
//   lat: 24.235235,
//   lng: 2.5734,
// };

// console.log(getLatLngElevation(userLocation)); 
// // The latitude is 24.235235, the longitude is 2.5734 and the elevation is 0 meters



// let grades = [5,6,7,8];
// grades[0]= 10;
// console.log(grades)


// function incrementFirstTemperature(temperatures) {
//     temperatures[0] = temperatures[0] + 1;
//     return temperatures
//   }
  
//   // Sample usage
//   console.log(incrementFirstTemperature([3, 5, 4, 7]))
//   console.log(incrementFirstTemperature([-5, 12, 15, 18, 13]))


// function getMessage(items) {
// 	return "You have " + items.length + " items!";
// }

// // Sample usage - do not modify
// console.log(getMessage([-5, 12, 15])) // "You have 3 items"
// console.log(getMessage([13, 10])) // "You have 2 items"
// console.log(getMessage([])) // "You have 0 items"

// function getLastTemperatureMessage(temperatures) {
// 	// your code
//     return "The last temperatures is at position " + (temperatures.length - 1).toString()
// }

// // Sample usage - do not modify
// console.log(getLastTemperatureMessage([-5, 12, 15])) // "The last temperature is at position 2"
// console.log(getLastTemperatureMessage([13, 10])) // "The last temperature is at position 1"



// let grades = [];

// grades.push(25);
// grades.push(10);
// grades.push(1000);
// grades.push(-80);
// grades.push(50);

// console.log(grades)
//  let grades = [20,15,88,1000]
 
// function returnArray (grades){
//     grades.push(10);
//     grades.push(888)
//     return grades
// }

// console.log(returnArray(grades))


// function convertToString(grades) {
// 	return grades.join(" & ")
// }

// // Sample usage - do not modify
// console.log(convertToString([10, 15, 13, 19])) // "10 & 15 & 13 & 19"
// console.log(convertToString([7, 13, 20, 15])) // "7 & 13 & 20 & 15"


// function exportCSV(grades) {
// 	return grades.join(", ")
// }

// // Sample usage - do not modify
// console.log(exportCSV([10, 15, 13, 19])) // "10, 15, 13, 19"
// console.log(exportCSV([7, 13, 20, 15])) // "7, 13, 20, 15"

// const getFullName = user => {
// 	return user.info?.name.toLowerCase() ?? "user"
// }

// // Sample usage - do not modify
// console.log(getFullName({info: {name: "ALEX"}})); // "alex"
// console.log(getFullName({info: null})); // "user"
// console.log(getFullName({})); // "user"








// const getStatus = (host, user, booking) => {
    // if (booking.status === "pending") {
    //   return `Hey ${user}, we're awaiting confirmation from ${host}.`;
    // } else if (booking.status === "confirmed") {
    //   return `Hey ${user}, ${host} is excited to be hosting you.`;
    // } else if (booking.status === "canceled") {
    //   return `Unfortunately ${user}, ${host} has canceled your booking request.`;
    // } else if (booking.status === "done") {
    //   return `${host} hopes you had a great stay.`;
    // } else {
    //   return "Unknown booking status."
    // }

//     const message = {
//         pending: `Hey ${user}, we're awaiting confirmation from ${host}.`,
//         confirmed: `Hey ${user}, ${host} is excited to be hosting you.`,
//         canceled: `Unfortunately ${user}, ${host} has canceled your booking request.`,
//         done:`${host} hopes you had a great stay.`
//     };
//     return message[booking.status] ?? "Unknown booking status."
//   }
  
  
//   // Sample usage - do not modify
//   const booking1 = {
//     status: "pending"
//   };
//   console.log(getStatus("Sam", "Alex", booking1)); // "Hey Alex, we're awaiting confirmation from Sam."
  
//   const booking2 = {
//     status: "confirmed"
//   }
//   console.log(getStatus("Charlie", "Blake", booking2)); // "Hey Blake, Charlie is excited to be hosting you."


// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7
// const basicOp = (operation, value1, value2) => {
//     // if (operation === "+") {
//     //     return value1 + value2;
//     // } else if (operation === "-") {
//     //     return value1 - value2;
//     // } else if (operation === "*") {
//     //     return value1 * value2;
//     // } else if (operation === "/") {
//     //     return value1 / value2;
//     // } else {
//     //     0;
//     // }


//     const enter = {
//         "+": value1 + value2,
//         "-": value1 - value2,
//         "*": value1 * value2,
//         "/": value1 / value2
//     }
//     return enter[operation] ?? 0
// };
// console.log(basicOp("+", 4, 7)); // 11
// console.log(basicOp("-", 15, 18)); // -3
// console.log(basicOp("*", 5, 5)); // 25
// console.log(basicOp("/", 49, 7)); // 7



// const getNumberOfTestsTaken = grades => {
// 	// grades.forEach( item => {
//     //     console.log(item.grade)
//     // })
//     let result = Object.keys(grades);
//     return result.length
// };

// // Sample usage - do not modify
// const grades = [{
//   date: "2018-12-13",
//   grade: 14
// }, {
//   date: "2018-12-15",
//   grade: 18
// }];

// console.log(getNumberOfTestsTaken(grades)); // 2


// const logNames = users => {
// 	users.forEach(user => {
//         console.log(`${user.firstName} ${user.lastName}`)
//     })
// }

// // Sample usage - do not modify
// const sampleUsers = [{
//   id: 1,
//   firstName: "Sam",
//   lastName: "Green"
// }, {
//   id: 2,
//   firstName: "Alex",
//   lastName: "Blue"
// }];

// logNames(sampleUsers); // logs: "Sam Green" and "Alex Blue"


// const getSumOfGrades = results => {
//     let sum = 0
// 	results.forEach(item =>{
//        sum = sum + item.grade
//     })
//     return sum
// };

// // Sample usage - do not modify
// const results = [{
//   date: "2018-12-13",
//   grade: 14
// }, {
//   date: "2018-12-15",
//   grade: 18
// }];

// console.log(getSumOfGrades(results)); // 32


// const getAverageAge = users => {
// 	let sum = 0
//     let result = 0
//     users.forEach(user => {
//         sum = sum + user.age
//     })
//     return sum / users.length
// };

// // Sample usage - do not modify
// const users = [{
//   joined_on: "2018-12-13",
//   age: 14
// }, {
//   joined_on: "2018-12-15",
//   age: 18
// }];

// console.log(getAverageAge(users)); // 16


// const getTotalSales = users => {
//     let sum = 0;
//     users.forEach(user => {
//         sum =sum + (user.subscription?.info?.value ?? 0); 
//     })
//     return sum 
// }

// // Sample usage - do not modify
// const users = [
//   {id: 1, name: "Alex"},
//   {id: 2, name: "Sam", subscription: {info: {value: 59}}},
//   {id: 3, name: "Charlie", subscription: {info: {value: 31}}}
// ];
// console.log(getTotalSales(users)); // 90



// // const getFullNames = users => {
// // 	users.map(user => {
// //         return `${{user.firstName} ${user.lastName}`
// //     })
// // }

// // // Sample usage - do not modify
// // const users = [{
// //   id: 1,
// //   firstName: "Sam",
// //   lastName: "Green"
// // }, {
// //   id: 2,
// //   firstName: "Alex",
// //   lastName: "Blue"
// // }];

// console.log(getFullNames(users)); // ["SAM GREEN", "ALEX BLUE"]



// const getSumOfGrades = results => {
// 	let sum = 0;
//     results.forEach(result => {
//         return sum += result.grade
//     })
//     return sum
// };

// // Sample usage - do not modify
// const results = [{
//   date: "2018-12-13",
//   grade: 14
// }, {
//   date: "2018-12-15",
//   grade: 18
// }];

// console.log(getSumOfGrades(results)); // 32


// const allGroupsPublic = groups => {
// 	return groups.every(group => group.details?.isPublic)
// }

// // Sample usage - do not modify
// const sampleGroups = [{
//   id: 1,
//   title: "Football",
//   details: {
//     messageCount: 30,
//     isPublic: true
//     }
// }, {
//   id: 2,
//   title: "Family",
//   details: {
//     messageCount: 1014,
//     isPublic: false
//     }
// }];

// console.log(allGroupsPublic(sampleGroups)); // false


// const exportVerifiedUsers = users => {
// 	let result = users.filter( user => user.isVerified === true);
//     return result.map(item => item.name).join(", ")
// }

// // Sample usage - do not modify
// const sampleUsers = [{
//     name: "Sam",
//     isVerified: true
// }, {
//     name: "Alex",
//     isVerified: false
// }, {
//     name: "Charlie",
//     isVerified: true
// }];
// console.log(exportVerifiedUsers(sampleUsers)); // "Sam, Charlie"



// class Rectangle{
//     /**
//      * @param {number} width
//      * @param {number} height
//      */
//     constructor(width, height) {
//       this.width = width;
//       this.height = height;
//     }
//   }
  
//   const makeSquare = () => new Rectangle (4, 8)

      
  
//   // Sample usage - do not modify
//   console.log(makeSquare());



// class User {
//     /**
//      * @param {string} firstName
//      * @param {string} lastName
//      * @param {number} age
//      */
//     constructor (firstName, lastName, age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
  
//     getFullName () {
//         return `${this.firstName} ${this.lastName}`
//     }
//   }
  
//   // Sample usage - do not modify
//   console.log(new User("Sam", "Blue", 18));
//   console.log(new User("Alex", "Green", 25));
//   const user = new User("Anton", "Bekhtgold", 25)
//   console.log(user.getFullName())


// class definition
// class Course {
//     constructor(name, isCompleted) {
//       this.name = name;
//       this.isCompleted = isCompleted;
//     }
  
//     getDescription() {
//       if (this.isCompleted) {
//         return `You have completed the ${this.name} course.`;
//       } else {
//         return `You are currently studying the ${this.name} course.`;
//       }
//     }
//   }
  
//   // Sample usage - do not modify
//   const course1 = new Course("Learn JavaScript", false);
//   console.log(course1.getDescription()); // "You are currently studying the Learn JavaScript course"
//   const course2 = new Course("Learn Programming", true);
//   console.log(course2.getDescription()); // "You have completed the Learn Programming course"


// class definition
// define class here

// class User {
//     constructor (fName, lName,prefix,age){
//         this.fName = fName;
//         this.lName = lName;
//         this.prefix = prefix;
//         this.age = age;
//     }

//     getFullName(){
     
//         return `${this.prefix}. ${this.fName} ${this.lName}`
//     }

//     canVote(){
//         return this.age >= 18;
//     }
// }


// // Sample usage - do not modify
// const user1 = new User("Sam", "Doe", "Mrs", 20);
// console.log(user1.getFullName()); // "Mrs. Sam Doe"
// console.log(user1.canVote()); // true

// const user2 = new User("Alex", "Green", "Mr", 17);
// console.log(user2.getFullName()); // "Mr. Alex Green"
// console.log(user2.canVote()); // false


    