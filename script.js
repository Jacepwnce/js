// let string = "45385593107843568"

// function fakeStr(string) {
//   let result = "";
//   for (let i = 0; string[i]; i++) {
//     if (string[i] < 5) {
//       result += "0"
//     } else(result[i] > 0)
//       result += "1"
//     }
//     return result;
//   }


// console.log(fakeStr(string));

// function sumElements(items) {
//   result = 0;
//   // items.forEach(function (item){
//   //    result += Number.parseInt(item, 10);
//   // })
//   // return result

//   items.reduce(function (total, current){
//     return Number.parseInt(total, 10) + current
//   },0);
//   return result;

//   // for (let item of items){
//   //   result += Number.parseInt(item, 10);
//   // }
//   // return result
// }

// console.log(sumElements([9, 3, '7', '3'])); // 22
// console.log(sumElements(['5', '0', 9, 3, 2, 1, '9', 6, 7])); // 42


// function wave(str){
//  let resultArr = [];
//   for (let i = 0; i < str.length; i++ ){
//     let result = str.split("");
//     if (result[i] !== ""){
//       result[i] = result[i].toUpperCase();
//       resultArr.push(result.join(''));
//     }
//   }
//   return resultArr
// }



// console.log(wave("hello"))

// function capitalize(word) {
// 	// let result = word.toLowerCase()
//     //  return result[0].toUpperCase() + result.substring(1)
//     return word[0].toUpperCase() + word.substring(1).toLowerCase()
// }

// // Sample usage - do not modify
// console.log(capitalize("sam")); // "Sam"
// console.log(capitalize("ALEX")); // "Alex"
// console.log(capitalize("chARLie")); // "Charlie"

// function convertNumberToString(number) {
// 	// your code
//     let str = number.toString()
//     return number
// }

// // Sample usage - do not modify
// console.log(convertNumberToString(42)); // "42"
// console.log(convertNumberToString(97)); // "97"
// console.log(convertNumberToString(11)); // "11


// function sumMix (x){
//   let result = 0;  
//   x.forEach(function (el){
//     result += Number.parseInt(el, 10);
//   })
//   return result
// }


// function noSpace(x) {
//   return  x.split(' ').join('')
  
// }
// console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B')); // '8j8mBliB8gimjB8B8jlB'
// console.log(noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd')); // '88Bifk8hB8BB8BBBB888chl8BhBfd'


// function getPositiveTemperatures(temperatures) {
// 	temperatures.filter(function (temp){
//         return temp > 0;
//     });
//     return temperatures
// }

// // Sample usage - do not modify
// console.log(getPositiveTemperatures([-5, 12, 3])); // [12, 3]
// console.log(getPositiveTemperatures([1, -3, -2, 4, 10])); // [1, 4, 10]



// Вы получаете массив чисел, возвращаете сумму всех положительных.
// Пример [1, -4, 7, 12] => 1 + 7 + 12 = 20
// Примечание: если суммировать нечего, сумма по умолчанию равна 0.
// function positiveSum (x){
//   let result = 0;
//   x.map(function (item){
//     if (item > 0){
//     return result += item;
//     }
//   })
//   return result;
// }

// function positiveSum (num){
//   let result = 0;
//   for(let i = 0; i < num.length; i++){
//     if (num[i] > 0) {
//       result += num[i];
//     }
//   }
//   return result;
// }


// console.log(positiveSum([1, 2, 3, 4, 5])); // 15
// console.log(positiveSum([1, -2, 3, 4, 5])); // 13
// console.log(positiveSum([])); // 0


//Выведите простые числа от 2 до 100. Простое число - это число, которое делится только на себя и на 1. Пример простых чисел: 3, 5, 7, 11, 13, 17.

//[Ссылка на простые числа](https://ru.wikipedia.org/wiki/%D0%9F%D1%80%D0%BE%D1%81%D1%82%D0%BE%D0%B5_%D1%87%D0%B8%D1%81%D0%BB%D0%BE)

// function getStringSizes(strings) {
//     return strings.map(function (string){
//       return string.length;
//     })
//   }
  
//   // Sample usage - do not modify
//   console.log(getStringSizes(["a", "abc"])); // [1, 3]
//   console.log(getStringSizes(["Sam", "Alex", "Charlie"])); // [3, 4, 7]
//   console.log(getStringSizes(["Hello", "Blue"])); // [5, 4]



// const getMessage = message => {
//   if (message.endsWith(".")){
//     return message
//   } else {
//     return message + "."
//   }
// }

// // Sample usage - do not modify
// console.log(getMessage("Hello world")); // "Hello world."
// console.log(getMessage("Welcome home.")); // "Welcome home."
// console.log(getMessage("Yes. Correct")); // "Yes. Correct."


// const getUnit = text => {
//   if (text.includes(`°C`)) {
//       return 'Celsius';
//   } else if (text.includes('°F')){
//       return 'Fahrenheit';
//   }

//   return 'N/A';
// }

// // Sample usage - do not modify
// console.log(getUnit("It was 90°F yesterday")); // Fahrenheit
// console.log(getUnit("Why is it 20°C")); // Celsius
// console.log(getUnit("It is expected to be cold.")); // N/A


// const message = "You are welcome.";
// message.replaceAll(" ", "_"); // "You_are_welcome";

// console.log(message); // "You are welcome"


// const getSlug = name => {
// 	// your code
//   if (name.length <= 15){
//     return name.toLowerCase.replaceAll("", "-");
//   }
// }

// // Sample usage - do not modify
// console.log(getSlug("IKEA table")); // "ikea-table"
// console.log(getSlug("200cm Bed")); // "200cm-bed"
// console.log(getSlug("Bedside lavalamp")); // "bedside-lavalam"
// console.log(getSlug("A B C noodles")); // "a-b-c-noodles"

// const getCountTodos = todos => {
// 	// your code
//   return todos.split(",").length
// }

// // Sample usage - do not modify
// console.log(getCountTodos("Laundry,Wash dishes,Clean table")); // 3
// console.log(getCountTodos("Feed cat,Degrease bike chain")); // 2


// // const users = [ 
// 	{ id: 1, name: "Sam Doe" }, 
// 	{ id: 2, name: "Alex Blue" }
// ];

// const userNamesArray = users.map(user => user.name);
// console.log(userNamesArray); // ["Sam Doe", "Alex Blue"];

// const csv = userNamesArray.join(", ");
// console.log(csv); // "Sam Doe, Alex Blue"

// const getLocationString = location => {
// 	// your code
      
   
// }
// // Sample usage - do not modify
// const location = [24.235235, 2.5734];
// console.log(getLocationString(location)); // "The latitude is 24.235235 and the longitude is 2.5734"

// const getFullName = user => {
// 	// your code
//     const [firstName, lastName] = user;
//     return `${firstName} ${lastName}`
// }

// // Sample usage - do not modify
// console.log(getFullName(["Sam", "Blue"])); // "Sam Blue"
// console.log(getFullName(["Alex", "Green"])); // "Alex Green"

// const getApps = (apps1, apps2) => {
// 	// your code 
//     const items = [...apps1, ...apps2];
//     return items
// }

// // Sample usage - do not modify
// console.log(getApps(["Calculator", "Whatsapp"], ["Chrome", "Firefox"])); // ["Calculator", "Whatsapp" "Chrome", "Firefox"]

// const getCourseDetail = (course, detail) => {
// 	// your code
//     return `The ${detail} ${course[detail]}`
//     })
// }


// // Sample usage - do not modify
// getCourseDetail({ id: 1, name: "Learn JS", year: 2022 }, "name"); // "The course name is Learn JS"
// getCourseDetail({ id: 1, name: "Learn JS", year: 2022 }, "year"); // "The course year is 2022"



// const getCountProperties = course => {
// 	// your code
//     return Object.keys(course);
// }

// // Sample usage - do not modify
// getCountProperties({ id: 1, name: "Learn JS", year: 2022, category: "Programming" })) // 4
// getCountProperties({ name: "Learn JS", category: "Programming" }); // 2
// getCountProperties({}); // 0