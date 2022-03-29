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


// let grades = [12, 8, 13, 9, 15];

// let sum = 0;

// grades.forEach(grade => {
//     if (grade >= 10){
//         sum = sum + grade;
//     }
//     return sum
// })
// console.log(sum)



// const sumGradesAbove10 = grades => {
//     let sum = 0;
//     grades.forEach(grade => {
//         if (grade >= 10) {
//             sum += grade;
//         };
//     });
//     return sum
// };

// console.log(sumGradesAbove10([10, 5, 18, 3, 14, 19, 9])) // 61
// console.log(sumGradesAbove10([18, 4, 9, 20, 8])) // 38


// let grades = [10, 15, 13];

// const double = grades.map( grade => {
//     return grade * 2;
// })

// console.log(double)

// const tripleGrades = grades => {
//    let result = grades.map( grade => {
//        return grade * 3;
//     })
//     return result
// }

// console.log(tripleGrades([10, 20])) // [30, 60]
// console.log(tripleGrades([5, 12, 20, 10])) // [15, 36, 60, 30]


// let grades = [10, 15, 5];

// let sum = grades.reduce(function (total, current){
//     return total + current;
// }, 0);

// console.log(sum)


// const sumNumbers = grades => {
//     let result = grades.reduce((total,current)=>{
//         return total + current;
//     }, 0)
//     return result
// }



// console.log(sumNumbers([10, 20, 30])) // 60
// console.log(sumNumbers([2, 4, 2, 10])) // 18




// const multiplyNumbers = numbers => {
//     let result = numbers.reduce((total,current)=>{
//         return total * current;
//     }, 1);
//     return result;
// }

// console.log(multiplyNumbers([10, 20, 30])) // 6000
// console.log(multiplyNumbers([2, 4, 2, 10])) // 160


// const userAge = user => `The user is ${user.age} years old`

// let user = {
//     firstName: `Anton`,
//     age: 28
// }   

// console.log(userAge(user))


// const getCourseName = course => course.name;

// let course1 = {
//     name: `Learn Enlgish`,
//     isCompleted: true
// }

// let course2 = {
//     name: `Learn JS`,
//     isCompleted: false
// }

// console.log(getCourseName(course1)); // "Learn English"
// console.log(getCourseName(course2)); // "Learn JavaScript"

// const upgradeUser = person => person.hasPaid !== true

// let person1 = {
//     name: `Anton`,
//     hasPaid: true
// }
// let person2 = {
//     name: `Sam`,
//     hasPaid: false
// }

// console.log(upgradeUser(person1))
// console.log(upgradeUser(person2))




// const getFormattedFullName = user => `${user.firstName} ${user.lastName}`


// let user1 = {
//     firstName: "Sam",
//     lastName: "Doe",
//     age: 20
//   };

//   let user2 = {
//     firstName: "Charlie",
//     lastName: "Fort",
//     age: 31
//   };

//   console.log(getFormattedFullName(user1)); // "Sam DOE"
//   console.log(getFormattedFullName(user2)); // "Charlie FORT"


// const getInitialName = user => `${user.firstName[0]} ${user.lastName[0]}`

// let user1 = {
//     firstName: "Sam",
//     lastName: "Doe",
//     age: 20
//   };

//   let user2 = {
//     firstName: "Charlie",
//     lastName: "Fort",
//     age: 31
//   };

//   console.log( getInitialName(user1)); // "Sam DOE"
//   console.log( getInitialName(user2)); // "Charlie FORT"



// let user ={
//     fName: "Sam",
//     lName: "Doe"
// };

// user.age = 20;

// console.log(user)

// const getVotingMessage = user => {
//   if (user.age >= 18){
//       return `Can vote`
//   } else {
//       return `you cannot vote`
//   }
// }

// let user1 = {
//     firstName: "Sam",
//     lastName: "Doe",
//     age: 15
//   };

//   let user2 = {
//     firstName: "Charlie",
//     lastName: "Fort",
//     age: 31
//   };

//   console.log(getVotingMessage(user1)); // "You cannot vote"
//   console.log(getVotingMessage(user2)); // "You can vote"


// const addNumberOfChapters = (course, count) => {
//     course.numberOfChapters = count;
//     return course
// }

// // Sample usage - do not modify
// let course1 = {
//     name: "Learn English",
//     isCompleted: true
// };
// let course2 = {
//     name: "Learn JavaScript",
//     isCompleted: false
// };


// console.log(addNumberOfChapters(course1, 80));
// console.log(addNumberOfChapters(course2, 60));


// const getNumberOfTags = game => game.tags.length



// let game = {
//     name: "Risk",
//     tags: ["Strategy", "War", "Family friendly"],
//     releaseYear: 1957
//   };

//   console.log(getNumberOfTags(game));




// const getLastGrade = student => student.grades[student.grades.length - 1];
// const getLengthGrade = student => student.grades.length;

// function sumGrades(student) {
//     let result = student.grades.reduce((total, current) => {
//         return total + current;
//     }, 0);
//     return result;
// };

// // function sumItteral(student) {
// //     let sum = 0;
// //     for (let i = 0; i <= student.grades.length; i++) {
// //         return sum = sum + i
// //     }
// //     return sum
// // }

// const upperName = student => student.name.toUpperCase()

// let student = {
//     name: "Sam Doe",
//     age: 24,
//     grades: [13, 15, 15, 14, 18]
// };

// console.log(getLastGrade(student)); //18 
// console.log(getLengthGrade(student))
// console.log(sumGrades(student))
// console.log(upperName(student))
// //console.log(sumItteral(student))



// function getSumOfGrades(student) {
//     let sum = 0;
//     student.grades.map(item => {
//         return sum += item
//     })
//     return sum
// }

// // Sample usage - do not modify
// let student = {
//     name: "Sam Doe",
//     age: 24,
//     grades: [13, 15, 15, 14, 18]
// };

// console.log(getSumOfGrades(student)); // 75


// function getSumOfGrades(student) {
//     let result = student.grades.reduce((total, current) => {
//         return total + current
//     }, 0)
//     return result
// }

// // Sample usage - do not modify
// let student = {
//     name: "Sam Doe",
//     age: 24,
//     grades: [13, 15, 15, 14, 18]
// };

// console.log(getSumOfGrades(student)); // 75



// let student = {
//     fName: "  Anton",
//     lName: "Bekhtgold",
//     age: 25,
//     currentCourse: {
//         name: "Learn JS",
//         instructor: "Iliya Filimonov",
//         isCompleted: false
//     }
// }


// console.log(student)
// console.log(student.currentCourse.instructor.toUpperCase())
// console.log(student.currentCourse.name.split(" "))
// console.log(student.fName.toLowerCase().trim())
// console.log(student.age.toString())

// function getFullName(tweet) {
// 	return `${tweet.author.details.firstName} ${tweet.author.details.lastName}`
// }

// // Sample usage - do not modify
// let tweet = {
//   id: 1080733626234937,
//   message: `I just launched https://developer.mozilla.org
// 	👉 Resources for developers, by developers
// 	👉 Web technology for developers
// 	👉 Modern JavaScript & best practices
// 	👉 Documentation for Web developers`,
//     link: "https://developer.mozilla.org",
//     created_at: "2029-01-03 11:46:00",
//     author: {
// 	    id: 111834593,
// 	    details: {
//         firstName: "Alex",
//         lastName: "Smith",
// 	    },
// 	    handle: "ASmith"
//     }
// };
// console.log(getFullName(tweet)); // "Alex Smith"


// let user = {
//     fName: "Anton",
//     lName: "Bekhtgold",
//     age: 25,
//     canVote: function (age) {
//         return age >= 18;
//     }
// }

// console.log(user.canVote(18))

// let users = [
//     {
//         firstName: "Anton",
//         lastName: "Bekhtgold",
//         age: 25
//     },
//     {
//         firstName: "Pavel",
//         lastName: "           LATMENCEV",
//         age: 32   
//     },
//     {
//         firstName: "Sanya",
//         lastName: "Etmizin",
//         age: 25   
//     }
// ]

// console.log(users[0].firstName.toUpperCase())
// console.log(users[1].lastName)
// console.log(users[1].lastName.toLowerCase().trim())
// console.log(users[2].age)


// function getLastUserFullName(users) {
// 	return `${users[1].firstName} ${users[1].lastName}`
// }

// // Sample usage - do not modify
// let users = [
// 	{
// 	  firstName: "Sam",
// 	  lastName: "Blue",
// 	  age: 21,
// 	},
//   {
//     firstName: "Charlie",
//     lastName: "Bon",
//     age: 38,
//   }
// ];

// console.log(getLastUserFullName(users)); // "Charlie Bon"


// function getFirstStudentGrade(students) {
// 	return students[0].learnEnglish.grade
// }

// // Sample usage - do not modify
// let students = [
//   {
//     name: "Sam Doe",
//     age: 24,
//     learnEnglish: {
//       startYear: 2020,
//       grade: 18
//     }
//   },
//   {
//     name: "Charlie Bron",
//     age: 31,
//     learnEnglish: {
//       startYear: 2021,
//       grade: 19
//     }
//   }
// ];
// console.log(getFirstStudentGrade(students)); // 18


// let users = [
// 	{
// 	  firstName: "Sam",
// 	  lastName: "Blue",
// 	  age: 21,
// 	},
//   {
//     firstName: "Charlie",
//     lastName: "Bon",
//     age: 38,
//   }
// ];

// users.forEach(user => {
//     console.log(user)
// })


// let users = [
// 	{
// 	  firstName: "Sam",
// 	  lastName: "Blue",
// 	  age: 21,
// 	},
//   {
//     firstName: "Charlie",
//     lastName: "Bon",
//     age: 38,
//   }
// ];

// users.map(user => {
//     console.log(user)
// })


// let recipes = [
// 	{
// 	  title: "Pasta pesto",
// 	  preparationMinutes: 30,
// 	  rating: 4.5
// 	},
//   {
//     title: "Lasagna",
//     preparationMinutes: 45,
//     rating: 3.9
//   }
// ];

// // let titles =recipes.map(recipe => {
// //     //console.log(recipe)
// //     return recipe.title
// // })
// // console.log(titles)

// let ratings = recipes.map(recipe => {
//     return recipe.rating
// })

// console.log(ratings)

// let sum = ratings.reduce((total,current)=>{
//     return total + current
// },0)

// console.log(sum)

// console.log(sum.toString())


// const getSumGrades = grades => {
//   let iteral = grades.map(item => {
//       return item.grade
//   })
//   return iteral[0] + iteral[1]
// }

// let grades = [
// 	{
// 	  name: "Sam Blue",
// 	  grade: 14
// 	},
//   {
//     name: "Charlie Bron",
//     grade: 16
//   }
// ];
// console.log(getSumGrades(grades)); // 30

// function getSumGrades(students) {
//     let iteral = students.map(item => {
//         return item.learnEnglish.grade
//     })
//    let result = iteral.reduce((total,current)=> {
//         return total + current
//     },0)
//     return result
// }

// // Sample usage - do not modify
// let students = [
//   {
//     name: "Sam Doe",
//     age: 24,
//     learnEnglish: {
//       startYear: 2020,
//       grade: 18
//     }
//   },
//   {
//     name: "Charlie Bron",
//     age: 31,
//     learnEnglish: {
//       startYear: 2021,
//       grade: 19
//     }
//   }
// ];
// console.log(getSumGrades(students)); // 37

// function getFullNames(users) {
// 	let iteral = users.map(user => {
//         return `${user.firstName} ${user.lastName}`
//     })
//     return iteral
// }

// // Sample usage - do not modify
// let users = [
//   {
//     firstName: "Sam",
//     lastName: "Blue",
//     age: 21,
//   },
//   {
//     firstName: "Charlie",
//     lastName: "Bon",
//     age: 38,
//   }
// ];
// console.log(getFullNames(users)); // [Sam Blue, Charlie Bon]




// function getAvarageSumEng(obj) {
//     let result = obj.school.academicPerformance.english.reduce((total, current) => {
//         return total + current;
//     }, 0)
//     return Math.round(result / obj.school.academicPerformance.english.length)
// }

// function getAvarageSumRus(obj) {
//     let sum = 0;
//     let result = obj.school.academicPerformance.rus.map(function (grade) {
//         return sum = sum + grade;
//     })
//     return Math.round(sum / obj.school.academicPerformance.rus.length)
// }

// function getAvarageSumMath(obj) {
//     let result = 0
//     let sum = obj.school.academicPerformance.math.forEach(function (grade) {
//         return result += grade;
//     });
//     return Math.round(result / obj.school.academicPerformance.math.length)
// }

// const upperName = obj => `${obj.firstName.toUpperCase()} ${obj.lastName.toUpperCase()}`


// function testSchool(obj) {
//     if (`${obj.firstName} ${obj.lastName}` === "Saveliy Sajin" && obj.age <= 18 && obj.school.number === 25 && obj.school.class === "5G") {
//         return `${obj.firstName} ${obj.lastName} lerning in scholl № ${obj.school.number} in class № ${obj.school.class}`
//     } else {
//         return false
//     }
// }

// function checkAgeToVote(obj) {
//     if (obj.age <= 18) {
//         return `${obj.firstName} ${obj.lastName} - YOU CANNOT VOTE, because you scholl boy`
//     } else {
//         return `${obj.firstName} ${lastName} - You can vote`
//     }
// }

// function myLive(obj){
//     if (`${obj.firstName} ${obj.lastName}` === "Saveliy Sajin" && obj.age <= 18 && obj.school.number === 25 && obj.school.class === "5G"){
//         return `I\`m ${obj.firstName} ${obj.lastName}, im living on the street:${obj.school.live.street.toUpperCase()} houes № ${obj.school.live.numberHouse}. My favorite game is ${obj.school.live.hobbys.favoriteGame[obj.school.live.hobbys.favoriteGame.length - 1]}. My school have number ${obj.school.number}. My classes is ${obj.school.class}`
//     } else {
//         return false
//     }
// }

// let obj = {
//     firstName: "Saveliy",
//     lastName: "Sajin",
//     age: 12,
//     student: true,
//     school: {
//         number: 25,
//         class: "5G",
//         academicPerformance: {
//             english: [5, 5, 5, 4, 5, 4, 5],
//             math: [5, 5, 5, 5, 5, 5, 3],
//             rus: [5, 4, 5, 5, 3, 4, 5, 5],
//             liter: [5, 4, 3, 5, 5, 4, 5],
//             gheograph: [4, 4, 5, 5, 5, 5, 4]
//         },
//         live: {
//             street: "Mejdugorodnyaa",
//             numberHouse: 24,
//             family: {
//                 mother: "Elena",
//                 father: false,
//                 grandMother: "Galina",
//                 grandFather: false,
//                 brother: "Anton",
//             },
//             hobbys: {
//                 computerGame: true,
//                 watchigYoutube: true,
//                 favoriteGame: ["Roblox", "Gravity-Dash","Need for Speed","GTA"],
//                 booksRead:false
//             }
//         }
//     },

// };

// obj.school.live.hobbys.favoriteGame.push("WoWka")
//  console.log(getAvarageSumEng(obj))
//  console.log(getAvarageSumMath(obj))
//  console.log(getAvarageSumRus(obj))
//  console.log(upperName(obj))
//  console.log(testSchool(obj))
//  console.log(checkAgeToVote(obj))
//  console.log(obj.school.live)
//  console.log(myLive(obj))



// function positiveSum (array){
//     let sum = 0
//     for (let i = 0; i <= array.length; i++){
//        return sum += array[i] 
//     }
//     return sum
// }

// console.log(positiveSum([25,15,10,100]))

// function toJadenCase(string){
//     let arrString = string.split(" ");
//     let newStr = arrString.map(function(el){
//        return el[0].toUpperCase() + el.slice(1)
//     })
//     return newStr.join(" ")
// }

// console.log(toJadenCase('How can mirrors be real if our eyes aren"t real')); // How Can Mirrors Be Real If Our Eyes Aren"t Real



// function oddOrEven (arr){
//   let sum = arr.reduce(function(total,current){
//       return total + current
//   }, 0);

//   if(sum %2 === 0){
//       return "even"
//   } else {
//       return "odd"
//   }
// }



// console.log(oddOrEven([0, 1, 5])); // 'even'
// console.log(oddOrEven([0, 1, 3])); // 'even'
// console.log(oddOrEven([0, -1, -5])); // 'even'

// console.log(oddOrEven([0, 1, 4])); // 'odd'
// console.log(oddOrEven([0, -1, 2])); // 'odd'

// console.log(oddOrEven([0])); // 'even'


// function usdcny(usd) {
//     let x = (6.75 * usd)
//     return x.toFixed(2).toString() + " " + "Chinese Yuan"
//   }

//   console.log(usdcny(15))


// function positiveSum(arr) {
//   let result = 0;
//   let sum = arr.map(function (el){
//       if(el >= 0){
//           return result += el
//       }
//   })
//   return result
//   }

//   console.log(positiveSum([-8,5,-12,50,15]))

// function sumStr (a, b){
//     let x = Number.parseInt(a + b)
//     return x.toString()
// }

// function reverseWords(str){
//     let arr = str.split(" ")   
//     return arr.reverse().join(" ")
//   }

//   console.log(reverseWords("Hello world!"))


// function removeChar(str){
//     let x = str.split("").slice(1, str.length - 1 )
// //   let newStr = x.splice(1, str.length - 1)
// //   return newStr
// return x
//    };

//    console.log(removeChar("kakara"))

// function findDifference(a, b) {
//     let x = a.reduce(function (total, current){
//         return total * current;
//     }, 1)
//     let y = b.reduce(function (total, current){
//         return total * current;
//     }, 1)
//      if (x >= y){
//          return x - y
//      } else if (y >= x){
//          return y - x;
//      }
//   }


//   console.log(findDifference([4,9,21], [20,18,13]))



// function pillars(num_pill, dist, width) {
//     return ((num_pill * width) - (dist - (num_pill * width))) 
// }


//   console.log(pillars(4, 15, 10))


// function positiveSum(arr) {
// let result = 0;
// let sum = arr.map(function (el){
//     if(el >= 0){
//         return result += el
//     }
// })
// return result
// }



// function positiveSum(arr){
//     let result = 0
//     for(let i = 0; i <= arr.length; i++){
//         if(arr[i] >= 0){
//             return result + arr[i]
//         }
//     }
//     return result
// }

// function repeatStr (n, s) {
//   for (let i = 0; i = s; i++){
//      n === i
//   }
//   return 
//  }

//    console.log(repeatStr (6, "I"))
//    console.log(repeatStr (5, "Hello"))


// function finalGrade (exam, projects) {
//   if( exam >= 90 || projects >= 10){
//     return 100
//   } else if (exam >= 70 || projects >= 5){
//     return 90
//   } else if (exam >= 50 || projects > 2){
//     return 75
//   } else if(exam < 50 || projects < 10){
//     return 0
//   }
// }


// let x = [15, 25, 15, 8, 10, 15]

// let k = x.filter(function (el){
//   return el > 15
// })

// console.log(k)


// let name = "Anton";
// console.log(name.substring(0, 1))
// console.log(name.substring(0, 2))
// console.log(name.substring(0, 3))
// console.log(name.substring(0, 4))
// console.log(name.substring(0, 5))
// console.log(name.substring(1, 1))
// console.log(name.substring(1, 2))
// console.log(name.substring(1, 3))
// console.log(name.substring(1, 4))
// console.log(name.substring(1, 5))

// function skipFirstCharacter(text) {
// 	return text.substring(1)
// }

// // Sample usage - do not modify
// console.log(skipFirstCharacter("Xcode")); // "code"
// console.log(skipFirstCharacter("Hello")); // "ello"


// function capitalize(word) {
// 	return`${word[0].toUpperCase() + word.toLowerCase().slice(1)}`
// }
// const capitalize = word => `${word[0].toUpperCase() + word.toLowerCase().slice(1)}`

// // Sample usage - do not modify
// console.log(capitalize("sam")); // "Sam"
// console.log(capitalize("ALEX")); // "Alex"
// console.log(capitalize("chARLie")); // "Charlie"

// let answer = 42;
// let result = answer.toString()

// console.log(typeof(answer))
// console.log(typeof(result))
// console.log(answer)
// console.log(result)

// function convertNumberToString(number) {
// 	// your code
// }

// const convertNumberToString = number => number.toString()

// // Sample usage - do not modify
// console.log(convertNumberToString(42)); // "42"
// console.log(convertNumberToString(97)); // "97"
// console.log(convertNumberToString(11)); // "11"

// let str = "42";
// let num = Number.parseInt(str, 10) + 1

// console.log(num)

// function useApp(apps, app) {
//     apps.push(app)
//     return apps
// }


// // Sample usage - do not modify
// console.log(useApp(["Clock", "Twitter"], "Firefox")); // ["Clock", "Twitter", "Firefox"]
// console.log(useApp([], "Safari")); // ["Safari"]



// let items = ["item1", "item2", "item3"];
// let copyItems = [];

// // for(let i = 0; i < items.length; i++){
// //     copyItems.push(items[i]);
// // }

// items.forEach(item => {
//     copyItems.push(item);
// });

// console.log(copyItems);


// /**
//  * @param {number[]} numbers
//  */
// function sumPositiveNumbers(numbers) {
//      let result = 0;

//     for (let i = 0; i < numbers.length; i++) {
//        if(numbers[i] > 0){
//           result = result + numbers[i];
//        } 
//     }
//     return result

//     numbers.forEach(number => {
//        if( number > 0){
//            result += number
//        }
//     })
//     return result
// };

// // Sample usage - do not modify
// console.log(sumPositiveNumbers([15, -5, 10])); // 25
// console.log(sumPositiveNumbers([-3, 4, -2, 1])); // 5


// let numbers = [15,8,9,10,1,0,18,20,31,7];
// let filtNumbers = numbers.filter( number => {
//    return number >= 10;
// })

// console.log(filtNumbers)

// /**
//  * @param {number[]} temperatures
//  */
//  function getPositiveTemperatures(temperatures) {
// 	return temperatures.filter(temp => {
//       return temp > 0
//    })
// }

// // Sample usage - do not modify
// console.log(getPositiveTemperatures([-5, 12, 3])); // [12, 3]
// console.log(getPositiveTemperatures([1, -3, -2, 4, 10])); // [1, 4, 10]


// /**
//  * @param {number[]} years
//  * @param {number} searchYear
//  */
//  function getYear(years, searchYear) {
// 	return years.find(el => {
//       return el === searchYear
//    })
// }

// // Sample usage - do not modify
// console.log(getYear([2019, 2020, 2021], 2020)); // 2020
// console.log(getYear([2019, 2020, 2021], 1990)); // undefined



// /**
//  * @param {number[]} years
//  */
//  function getOddYears(years) {
// 	return years.filter(el => {
//       return el %2 !== 0
//    })
// }

// // Sample usage - do not modify
// console.log(getOddYears([2019, 2020, 2021])); // [2019, 2021]
// console.log(getOddYears([2000, 2015, 2018, 2020])); // [2015]



// function oddCount(n) {
//    let result = []
//    for (i = 0; i < n; i++) {
//       if ([i] > 0 && [i] % 2 !== 0) {
//          result.push(i)
//       }
//    }
//    return result.length
// }



// console.log(oddCount(7)) //=> 3, i.e [1, 3, 5]
// console.log(oddCount(15)) //=> 7, i.e [1, 3, 5, 7, 9, 11, 13]
// console.log(oddCount(8))
// console.log(oddCount(1000))
// console.log(oddCount(80))
// console.log(oddCount(90))
// console.log(oddCount(45))


// const reverseSeq = n => {
//   let result = []
//   for (let i = 0; i < n; i++){
//     result.push(i)
//   }
//   return result.reverse()
//  };

//  console.log(reverseSeq(7))


// function findNeedle(haystack) {
//   let find = haystack.find(el => {
//     return el === "needle"
//   })
//   return "found the needle at position " + haystack.indexOf("needle")
// }

// console.log(findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']))


// console.log(findNeedle(['hay', 'needle', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']))


// function getStringSizes(strings) {
// 	let newArr= strings.map(el => {
//     return el.length;
//   })
//   return newArr
// }

// // Sample usage - do not modify
// console.log(getStringSizes(["a", "abc"])); // [1, 3]
// console.log(getStringSizes(["Sam", "Alex", "Charlie"])); // [3, 4, 7]
// console.log(getStringSizes(["Hello", "Blue"])); // [5, 4]



// /**
//  * @param {Object[]} person
//  * @param {string} person[].firstName
//  * @param {string} person[].lastName
//  * @param {number} person[].age
//  */
//  function incrementAge(person) {
// 	 person.age = person.age + 1
//      return person
// }

// // Sample usage - do not modify
// const person = {
//   firstName: "Jennifer",
//   lastName: "Doe",
//   age: 18
// }
// console.log(incrementAge(person)); // {firstName: "Jennifer", lastName: "Doe", age: 19}


// const settings = {
//     theme: "Dark",
//     version: "2.4.1",
//     beta: false
//   };

//   const keys = Object.keys(settings);
//   console.log(keys); // ["theme", "version", "beta"]

//   keys.forEach(key => {
//     console.log(settings[key]);
//   });


// function sumMul(n, m) {
//     let result = 0;
//     for (let i = n; n < m; i++) {
//         if ([i] > 0) {
//             result += [i]
//         } else if ([i])
//         return result
//     }
// }



// console.log(sumMul(2, 9))  
// sumMul(3, 13)  
// sumMul(4, 123) 
// sumMul(4, -7)  


// function lovefunc(flower1, flower2){
//     if((flower1 %2 === 0 && flower2 %2 !== 0) || (flower2 %2 === 0 && flower1 %2 !== 0)){
//         return true
//     } else {
//         return false
//     }
//   }


//   console.log(lovefunc(1, 4))
//   console.log(lovefunc(2, 2))
//   console.log(lovefunc(0, 1))
//   console.log(lovefunc(0, 0))



// function gooseFilter (birds) {
//     var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
//     let soRt = geese.sort(bird => {
//     })
//     return soRt.splice(birds)
//   };



// function switchItUp(number) {
//     let result = [];
//     for (let i = 1; i <= number.length; i++){
//             if (number[i] === 1) {
//                 return result.push("jotaro")
//             } else if (number[i] === 2) {
//                 return "Два"
//             } else if (number[i] === 3) {
//                 return "Три"
//             } else if (number[i] === 4) {
//                 return "Четыре"
//             } else if (number[i] === 5) {
//                 return "Пять"
//             } else if (number[i] === 6) {
//                 return "Шесть"
//             } else if (number[i] === 7) {
//                 return "Семь"
//             } else if (number[i] === 8) {
//                 return "Восемь"
//             } else if (number[i] === 9) {
//                 return "Девять"
//             }
//             return result.push(number[i])
//     }
//     return result 

// }

// console.log(switchItUp(7))


// const shout = {
//     _message: "HALLO",

//     get message () {
//         return this._message;
//     },

//     set message (value){
//         this._message = value.toUpperCase()
//     }
// }

// shout.message = "This is sparta"

// console.log(shout.message)


// const getValue = (user, keyToRead) => {
//     return user[keyToRead];
//   }

//   // Sample usage
//   console.log(getValue({id: 2, name: "Sam"}, "name")); // "Sam"
//   console.log(getValue({id: 2, name: "Sam"}, "id")); // 2

// const user = {
//     id: 1,
//     name: "Anton Bekhtgold",
//     age:25
// }

// const keys = Object.keys(user);
// //console.log(keys)


// keys.forEach(key => {
//     console.log(user[key])
// })

// const getCourseDetail = (course, detail) => {
// 	// const keys = Object.keys(course)
//     // keys.forEach(key => {
//     //         console.log(course[key])
//     // })
//     return `The course ${detail} ${course[detail]} `
// }


// // Sample usage - do not modify
// console.log(getCourseDetail({ id: 1, name: "Learn JS", year: 2022 }, "name")); // "The course name is Learn JS"
// getCourseDetail({ id: 1, name: "Learn JS", year: 2022 }, "year"); // "The course year is 2022"






// class Tasks {
//     /**
//     * @param {string[]} todos
//     */
//     constructor(todos) {
//       this._todos = todos;
//     }
//      get todos() {
//         return  this._todos.join(", ")
//      }
//   }

//   // Sample usage - do not modify
//   const tasks = new Tasks(["Laundry", "Clean kitchen"]);
//   console.log(tasks.todos); // "Laundry, Clean kitchen"


// class Payment {
//     /**
//     * @param {number} amount
//     */
//     constructor(amount) {
//       this.amount = amount;
//     }
//     get amount(){
//         return this._amount
//     }

//     set amount(value){
//         return this._amount = value * 100
//     }
//   }



//   // Sample usage - do not modify
//   const payment = new Payment(10); // 10 USD
//   console.log(payment.amount); // 1000 (value in cents)

//   // apply discount
//   payment.amount = 7; // 7 USD
//   console.log(payment.amount); // 700 (value in cents)



// class User {
//     constructor (fName, lName, age){
//         this.fName = fName;
//         this.lName = lName;
//         this.age = age;
//     }
//     canVote(){
//         return this.age >= 18;
//     }

//     getFullName(){
//         return `${this.fName} ${this.lName}`
//     }
// }

// class  Admin extends User{
//     getFullName(){
//         return `${this.fName} ${this.lName} [admin]`
//     }
//     updateConfig(){
//         return "Config updated"
//     }
// }


// const user = new User("Sam", "Green", 17);
// console.log(user.canVote()); // false
// console.log(user.getFullName()); // "Sam Green"

// const admin = new Admin("Alex", "Blue", 20);
// console.log(admin.canVote()); // true
// console.log(admin.getFullName()); // "Alex Blue [admin]"
// console.log(admin.updateConfig()); // "Config updated"


// console.log(admin.getFullName())

// class Phone {
//     constructor(name, price){
//         this.name = name;
//         this.price = price;
//     }

//     getDescription(){
//         return `${this.name} coast ${this.price}`
//     }
// }


// class Android extends Phone {
//     getVersion(){
//         return 12;
//     }
// }

// class iOS extends Phone {
//     getVersion(){
//         return 15
//     }
// }

// // Sample usage - do not modify
// const galaxy = new Android("Galaxy", 400);
// console.log(galaxy.getDescription()); // "The Galaxy costs 400"
// console.log(galaxy.getVersion()); // 12 (always for android phones)

// const iphone = new iOS("iPhone", 500);
// console.log(iphone.getDescription()); // "The iPhone costs 500"
// console.log(iphone.getVersion()); // 15 (always for iOS phones)



// class Employee {
//     constructor(firstName, lastName) {
//       this.firstName = firstName;
//       this.lastName = lastName;
//     }

//     getFullName() {
//       return `${this.firstName} ${this.lastName}`;
//     }

//     getInitials() {
//       return this.firstName[0] + this.lastName[0];
//     }
//   }


// class Manager extends Employee {
//     constructor(firstName, lastName, department) {
//       super(firstName, lastName); // super must be called first
//       this.department = department;
//     }

//     sendPerformanceReview() {
//       console.log(`Sent performance review for current quarter in ${this.department}`);
//     }

//     getFullName() {
//       return super.getFullName() + " [manager]";
//     }
//   }

//   // Sample usage
//   const manager = new Manager("Sam", "Blue", "Marketing");
//   console.log(manager.department); // "Marketing"
//   console.log(manager.getFullName()); // "Sam Blue [manager]"



// class User {
//     constructor(firstName, lastName, age) {
//       this.firstName = firstName;
//       this.lastName = lastName;
//       this.age = age;
//     }

//     getFullName() {
//       return `${this.firstName} ${this.lastName}`;
//     }

//     canVote() {
//       return this.age >= 18;
//     }
//   }


//   class Admin extends User {
//       constructor(firstName, lastName, age){
//           super(firstName, lastName);
//           this.userType = this.userType
//       }

//       getFullName() {
//         return `${this.firstName} ${this.lastName} [admin]`;
//       }

//       updateConfig() {
//         return "Config updated";
//       }
//   }

//   // Sample usage - do not modify
//   const user = new User("Sam", "Green", 17);
//   console.log(user.canVote()); // false
//   console.log(user.getFullName()); // "Sam Green"

//   const admin = new Admin("Alex", "Blue", 20, "superadmin");
//   console.log(admin.canVote()); // true
//   console.log(admin.getFullName()); // "Alex Blue [superadmin]"
//   console.log(admin.updateConfig()); // "Config updated"

// /**
//  * Constructor function
//  * @param {string} firstName
//  * @param {string} lastName
//  * @param {number} age
//  */
//  function User(firstName, lastName, age) {
//          this.firstName = firstName;
//          this.lastName = lastName;
//          this.age = age;
// }

// // This has to be a function (not an arrow function)
// User.prototype.getFullName = function() {
// 	 return `${this.firstName} ${this.lastName}`
// }

// // This has to be a function (not an arrow function)
// User.prototype.canVote = function() {
// 	return this.age >= 18
// }

// // Sample usage (do not modify)
// const user = new User("Sam", "Blue", 43);
// console.log(user.getFullName()); // "Sam Blue"
// console.log(user.canVote()); // true



// /**
//  * @param {string} name
//  */
//  const delayedWelcome = name => {
// 	setTimeout (() => {
//         console.log(`Welcome ${name}`);
//     }, 5000)

// }

// // Sample usage - do not modify
// delayedWelcome("Sam");
// delayedWelcome("Alex");




// const willItRain = weatherApiResponse => {
// 	return JSON.parse(weatherApiResponse)
// }


// // Sample usage - do not modify
// console.log(willItRain('{"now":{"temperature":18,"humidity":"30%","uvIndex":0,"rainExpected":true}}')); // true
// console.log(willItRain('{"now":{"temperature":25,"humidity":"90%","uvIndex":4,"rainExpected":false}}')); // false




// /**
//  * @param {string} status
//  * @param {string} location
//  */
//  const prepareStatus = (status, location) => {
//     const userId = 42;
//     const data = {
//       userId,
//       status,
//       location
//     };
//      return JSON.stringify(data)
//   }

//   // Sample usage - do not modify
//   console.log(prepareStatus("My first post!", "Amsterdam")); // '{"userId":42,"status":"My first post!","location":"Amsterdam"}'
//   console.log(prepareStatus("Hello World!", "Berlin")); // '{"userId":42,"status":"Hello World!","location":"Berlin"}'

// let mySelf = {
//     fName: "Anton",
//     lName: "Bekhtgold",
//     age: 25,
//     car: false,
//     friends: ["Andrey", "Nastya"]
// }


// let str = JSON.stringify(mySelf);
// console.log(str)
// console.log(JSON.parse(str))

// setTimeout(function (){
//     alert("Hello")
// },2000)

// let counter = 0
// setInterval(function (){
// console.log(++counter)
// },2000)


// let counter = 0;
// let interval = setInterval(function (){
//     console.log(++counter)
// }, 1000)

// setTimeout(function (){
//     clearInterval(interval)
// }, 7000)



// console.log('Клиент: хочу получить список пользователей')
// console.log('...')


// // // setTimeout(function () {
// // //     console.log('Сервер: запрашиваю список пользаков в БД')
// // //     console.log('...')

// // //     setTimeout(function () {
// // //         console.log('БД: формурую список и отдаю серверу')
// // //         console.log('...')

// // //         setTimeout(function () {
// // //             console.log('Сервер:трансформирую данные для клиента')
// // //             console.log('...')
// // //             setTimeout(function () {
// // //                 console.log('Клиент: получил данные')
// // //             }, 1000)
// // //         }, 500)
// // //     }, 500);
// // // }, 1000)



// let promise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log('Сервер: запрашиваю список пользаков в БД');
//         console.log('...');
//         resolve();
//     }, 1000);
// });

// promise.then(function () {
//         return new Promise(function (resolve, reject) {
//             setTimeout(function () {
//                 let users = [
//                     {uid:'id1', name: 'Max'},
//                     {uid: 'id2', name:'Elena'}
//                 ]
//                 console.log('БД: формурую список и отдаю серверу', users);
//                 console.log('...');
//                 resolve(users);
//             }, 500);
//         });
//     })
//     .then(function (dbUsers) {
//         return new Promise(function (resolve, reject) {
//             setTimeout(function () {
//                 console.log('Сервер:трансформирую данные для клиента')
//                 console.log('...')
//                 let users = dbUsers.map(el => {
//                     return {
//                         id: el.uid,
//                         fName:el.name,
//                         timestamp:Date.now() 
//                     }
//                 })
//                 resolve(users);
//             }, 500);
//         });
//     })
//     .then(function (users) {
//         setTimeout(function () {
//             console.log('Клиент: получил данные', users)
//         }, 1000)
//     })
//     .catch(function(error){
//         console.error(error)
//     })
//     .finally(function(){
//         console.log('finally')
//     })


//  

// fetch(url)
//     .then(function (response) {
//         return response.json()
//     })
//     .then(function (data) {
//         let ul = document.querySelector('#list')

//         let html = data.map(function (el) {
//             return '<li>' + el.id + ' ' + el.name + ' (' + el.email + ')</li>'
//         })
//         ul.insertAdjacentHTML('afterbegin', html.join(' '))
//     })

//     let response = await fetch(url)
//     let data = await response.json();



//     let html = data.map(function (el) {
//         return '<li>' + el.id + ' ' + el.name + ' (' + el.email + ')</li>'
//     })
//     document.querySelector('#list').insertAdjacentHTML('afterbegin', html.join(' '))

// }


// function sleep(ms) {
//     return new Promise(function (resolve) {
//         setTimeout(function () {
//             resolve()
//         }, ms)
//     })
// }

// let p1 = sleep(1500).then(function () {
//     return {
//         fName: 'Promise 1500'

//     }
// })
// let p2 = sleep(3500).then(function () {
//     return {
//         name: 'Promise 3000'
//     }
// })

// let p3 = sleep(5000).then(function () {
//     return {
//         name: 'Promise 5000'
//     }
// })


// // Promise.all([p1, p2, p3]).then(function (data) {
// //     console.log('All', data) 
// // })

// // Promise.race([p1, p2, p3]).then(function (data) {
// //     console.log('Race',data)
// // })   

// async function start() {
//     let dataAll = await Promise.all([p1, p2, p3])
//     let dataRace = await Promise.race([p1, p2, p3])

//     console.log('dataAll', dataAll)
//     console.log('dataRace', dataRace)
// }

// let promise = new Promise(function(resove,reject){
//     setTimeout(function(){
//         resove(2)
//     },3000)
// })

// promise.then(function(num){
//     console.log(num *= 2)
//     return num *= 2
// })
// .then(function (num){
//     console.log(num *= 4)
//     return num *= 4
// })
// .finally(function (){
//     console.log('finaly')
// })


// class MyPromise {
//     constructor(callback) {
//         this.onCatch = null
//         this.onFinally = null
//         this.thenCbs = []



//         function resolver(data) {
//             this.thenCbs.forEach(cb =>{
//                data = cb(data)
//             })

//             if(this.onFinally){
//                 this.onFinally()
//             }


//         }

//         function rejecter(error) {
//             if(this.onCatch){
//                 this.onCatch(error)
//             }


//             if(this.onFinally){
//                 this.onFinally()
//             }
//         }

//         callback(resolver.bind(this), rejecter.bind(this))


//     }

//     then(cb) {
//         this.thenCbs.push(cb)
//         return this
//     }


//     catch (cb) {
//         this.onCatch = cb
//         return this
//     } 

//     finally(cb) {
//         this.onFinally = cb
//     }
// }


// const promise = new MyPromise(function(resolve,reject){
//     setTimeout(function(){
//         reject('Some error')
//         resolve(2)
//     },3000)
// })

// promise.then(function(num){
//     console.log(num *= 2)
//     return num *= 2
// })
// .then(function (num){
//     console.log(num *= 4)
//     return num *= 4
// })
// .catch(function (){
//     console.error(error)
// })
// .finally(function (){
//     console.log('finaly')
// })
// .then(num => console.log('Done', num))


// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('foo');
//     }, 300);
//   });

//   promise1.then((value) => {
//     console.log(value);
//     // expected output: "foo"
//   });

//   console.log(promise1);
//   // expected output: [object Promise]


  // let promiesCount = 0;

  // function testPromies() {
  //   let thisPromiesCount = ++promiesCount;

  //   let log = document.querySelector('#log');
  //   log.insertAdjacentHTML('beforeend', thisPromiesCount + '');


  //   let p1 = new Promise(function (resolve, reject) {
  //     log.insertAdjacentHTML('beforeend', thisPromiesCount + '');

  //     setTimeout(function () {
  //       resolve(thisPromiesCount)
  //     }, Math.random() * 2000 + 1000)
  //   });


  //   p1.then(function (value){
  //     log.insertAdjacentHTML('beforeend' + value + '')
  //   })

  //   log.insertAdjacentHTML('beforeend', thisPromiesCount + '')

  // }
  // if ("Promise" in window) {
  //   let  btn = document.querySelector("#btn");
  //    btn.addEventListener("click",testPromies);
  // }
  // else {
  //   log = document.getElementById('log');
  //   log.innerHTML = "Live example not available as your browser doesn't support the Promise interface.";
  // }
  // if ("Promise" in window) {
  //   let btn = document.querySelector("#btn");
  //   btn.addEventListener("click",testPromies);
  // } else {
  //   log = document.getElementById('log');
  //   log.innerHTML = "Демонстрация невозможна, поскольку ваш браузер не поддерживает интерфейс <code>Promise<code>.";
  // }

  // const delayedWelcome = name => {
  //   setTimeout(function (){
  //     console.log(`Welcome ${name}`);
  //   }, 3000)
   
  // }
  
  // // Sample usage - do not modify
  // delayedWelcome("Sam");
  // delayedWelcome("Alex");


// let num = 988;
// console.log(num)
// console.log(num.toString())
// console.log(typeof String(num))
// let string = "1088";
// console.log(string);
// console.log(typeof string);
// console.log(Number(string));
// console.log(typeof Number(string));
// let age = 'idk';
// alert (typeof age); //string
// let newAge = Number(age); // string -> number
// alert (typeof newAge); // number как тип данных
// alert (newAge); // NaN как значение
// alert (String(newAge)); // NaN остался, исходное значение мы потеряли
// alert(typeof String(newAge));
// let counter = 2;
// //counter++
// let a = ++counter
// console.log(a)






