// // Реализуйте функцию, которая извлекает из массива элемент по указанному индексу, если индекс существует, либо возвращает значение по-умолчанию. Функция принимает на вход три аргумента:
// // Массив
// // Индекс
// // Значение по умолчанию (равно null)
// // const cities = ['moscow', 'london', 'berlin', 'porto'];
// // get(cities, 1); // 'london'
// // get(cities, 4); // null
// // get(cities, 10, 'paris'); // 'paris'
// // get(cities, -1, 'oops'); // 'oops'

// const cities = ['Moscow', 'London', 'Berlin', 'Porto']

// function get(cities, index, def = null) {
//   if (index >= cities.length || index < 0) { // Здесь прописываем инструкцию для массива. Если индекс массива не существует, то он выводит def 
//     return def
//   } else {
//     return cities[index] // Здесь в функцию возращается требуемый нам индекс 
//   }
// }

// // Проверка
// console.log(get(cities, 1)); // 'London'
// console.log(get(cities, 4)); // null
// console.log(get(cities, 10, 'Paris')); // 'Paris'
// console.log(get(cities, -1), 'Oops'); // 'Oops'
// console.log(get(cities, 11, 'Tomsk')); // Tomsk



// // Задача 2
// // Напишите функцию,  которая разбивает слова в регистре.

// // "camelCasing"  =>  "camel Casing"
// // "identifier"   =>  "identifier"
// // "" =>  ""

// // Для решения данной задачи использовался метод split (https://devacademy.ru/article/izuchaem-metod-split-v-javascript-na-primerakh)

// function split(string) {     // объявляем функцию split с получаемым аргументом string (строка)
//   let mySplit = string.split(/(?=[A-Z])/); // для того , чтобы метод split отработал нам нужно прописать условия после которых он отработает. В задаче требуется, разделить слова по заглавным буквам слов
//   return mySplit 
// }

// // Проверка
// console.log(split('camelCasing')) // 'camel' 'Casing'
// console.log(split('identifier')) // 'identifier'
// console.log(split('doingSomethingBoring')) //'doing' Something' 'Boring'


// // Напишите функцию, которая возвращает сумму всех позитивных чисел.
// // По умолчанию сумма равна 0.

// // Сделал по видео из YouTube - https://www.youtube.com/watch?v=DkQc5t_LfSQ

// let Array = [1, -4, 7, 12] // Массив
// let sum = 0 // Создается переменная, которая будет принимать результат суммы положительных чисел

// // Не придумал других вариантов, кроме как посмотреть в инернете. В интеренете решение производятся через цикл, так же как и в книге по JS 

// for (let i = 0; i < Array.length; i++) {  // создаётся цикл (for) где (1) i = инкремент, который говорит нам о то, что это цикл. (2) i < Array.length - тут показывается, количество шагов, которые выолнятся в цикле. (3) i++ - тут мы показываем, каким образом будет производиться переход в данном массиве 

//   if (Array[i] > 0) {   // Прописываем условия цикла. Нам требуется найти сумму положительных чисел и для этого задаем условие if (Arrai[i] > 0) - эта строчка производит поиск в массиве чисел которые больше значения (0). 

//     sum += Array[i] // Тут прописывается уже непосредствоено действие с найдеными в массиве числами.
//   }
// }
// console.log(sum) //20


// лекция object

let firstName = 'Anton';
let lastName = 'Bekhtgold';
let age = 25;
let email = 'jacepwncere@yandex.ru';
let isVerified = true;

//Все пять переменных представляют одного и того же человека, но глядя на сами переменные сложно об этом сказать, ведь у каждого человека есть и имя, и фамилия, возраст и т.д. Объекты позволяют сгруппировать все эти переменные в одну сущность:

let pesrson = {
    firstName: 'Anton',
    lastName: 'Bekhtgold',
    age: 25,
    email: 'jacepwncere@yandex.ru',
    isVerified: true
};

//Объекты отличаются от массивов тем, что они имеют keys и values. В то время как массивы содержат только values (ранее мы определили массивы как список значений). Keys - firstName , values - 'Anton'

// ЧТЕНИЕ КЛЮЧЕЙ

// function getUserAge (user){
//     return  `The user is ${user.age} years old`
// }

// let person = {
//     firstName: 'Anton',
//     lastName: 'Bekhtgold',
//     age: 25
// };

// console.log(getUserAge(person));

// ОБНОВЛЕНИЕ ЗНАЧЕНИЯ 

// let person = {
//     name: 'Sam',
//     age: 25
// };

// person.age = 29;

// console.log(person);



//task

// let course1 = {
//     name: "Learn English",
//     isCompleted: true
//   };
//   let course2 = {
//     name: "Learn JavaScript",
//     isCompleted: false
//   };

//   function getCourseName (course){
//       return `${course.name}`
//   }

//   console.log(getCourseName(course1)); // "Learn English"
//   console.log(getCourseName(course2)); // "Learn JavaScript"


//   function upgradeUser(user) {
//      user.hasPaid = !false;
//      return user
// }

// // Sample usage - do not modify
// upgradeUser({id: 1, hasPaid: false});
// upgradeUser({id: 2, hasPaid: false});

// console.log(upgradeUser({id: 1, hasPaid: false}))



// function getFormattedFullName(user) {
// 	return `${user.firstName} ${user.lastName}`

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



// function getIntials(user) {
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

// ДОБАВЛЕНИЕ НОВОЙ ПАРЫ KEY/VALUE 

// let user = {
//     firstName: 'Anton',
//     lastName: 'Bekhtgold'
// }

// user.age = 25;

// console.log(user);


// let config = {};

// config.currency = 'EU';
// config.theme = 'black';

// console.log(config);

//task

// function getVotingMessage(user) {
// 	if (user.age >= 18){
//         return 'You can vote'
//     } else {
//         return 'You cannot vote';
//     }
// }

// // Sample usage - do not modify
// let user1 = {
//   firstName: "Sam",
//   lastName: "Doe",
//   age: 15
// };

// let user2 = {
//   firstName: "Charlie",
//   lastName: "Fort",
//   age: 31
// };

// console.log(getVotingMessage(user1)); // "You cannot vote"
// console.log(getVotingMessage(user2)); // "You can vote"


// function addNumberOfChapters(course, count) {
  
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

// console.log(addNumberOfChapters(course1, 80))


// function getNumberOfTags(game) {
// 	// your code
//     return game.tags.length
// }

// // Sample usage - do not modify
// let game = {
//   name: "Risk",
//   tags: ["Strategy", "War", "Family friendly"],
//   releaseYear: 1957
// };

// console.log(getNumberOfTags(game));

// function getLastGrade(student) {
// 	// your code
//      return student.grades.length - 1
// }

// // Sample usage - do not modify
// let student = {
//   name: "Sam Doe",
//   age: 24,
//   grades: [13, 15, 15, 14, 18]
// };

// console.log(getLastGrade(student)); // 18

