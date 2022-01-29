// Создайте функцию, которая выполняет четыре основные математические операции.
// Функция должна принимать три аргумента - операция(строка/символ), значение1(число), значение2(число).
// Функция должна возвращать числовой результат после применения выбранной операции.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

// задача 1
// function calculator (Operator, value1, value2) {
//     if (Operator === '+') {
//         return value1 + value2
//     } else if(Operator === '-') {
//         return value1 - value2
//     }
//     else if (Operator === '*') {
//         return value1 * value2
//     }
//     else if (Operator === '/') {
//         return value1 / value2
//     }
// }

// Задача
// Реализуйте функцию squareOfSum(), которая принимает на вход два числа и возвращает квадрат суммы этих чисел. Для вычисления значения используйте формулу из курса алгебры: a² + 2 * a * b + b².
// Примеры использования
// squareOfSum(2, 3) // 25
// squareOfSum(1, 10) // 121

// function squareOfSum(a, b){
//     return (a * a) + 2 * a * b + (b * b)
// }
// console.log(squareOfSum(2, 3))
// console.log(squareOfSum(1, 10))




// Задача
// Реализуйте функцию finalGrade(), которая вычисляет итоговую оценку студента на основе двух параметров: оценки за экзамен и количества законченных проектов.
// Функция принимает два аргумента:
// exam — оценка за экзамен, число от 0 до 100;
// projects — количество проектов, число от 0 и выше.
// Функция возвращает: число (итоговую оценку).
// Есть четыре возможных итоговых оценки:
// 100, если оценка за экзамен выше 90 или есть больше 10 проектов
// 90, если оценка за экзамен выше 75 и есть как минимум 5 проектов
// 75, если оценка за экзамен выше 50 и есть как минимум 2 проекта
// 0 в любом другом случае

// function finalGrade (exam, projects) {
//     if (exam > 90 || projects > 10 ) {
//         return 100
//     }
//     else if (exam > 75 && projects >= 5) {
//         return 90
//     }
//     else if (exam > 50 && projects >= 2) {
//         return 75
//     }
//     else {
//         return 0
//     }
//     }
//   console.log(finalGrade(96,12))
//   console.log(finalGrade(82,5))
//   console.log(finalGrade(60,4))
//   console.log(finalGrade(30,2))

// Реализуйте функцию, которая извлекает из массива элемент по указанному индексу, если индекс существует, либо возвращает значение по-умолчанию. Функция принимает на вход три аргумента:
// Массив
// Индекс
// Значение по умолчанию (равно null)
// const cities = ['moscow', 'london', 'berlin', 'porto'];
// get(cities, 1); // 'london'
// get(cities, 4); // null
// get(cities, 10, 'paris'); // 'paris'
// get(cities, -1, 'oops'); // 'oops'


// function getDistance (speed, time){
//     let distance = speed * time;
//     return distance;
// }

// let myDistance = getDistance (5, 10);
// console.log(myDistance)

// speedlimit = 51

// function amISpeeding(speed){
//     if (speed >= speedlimit){
//         console.log("Yes. You`re speedind");
//     } else {
//         (speed <= speedlimit)
//             console.log("NO. You`re not speeding");
//     } 
//     }
// amISpeeding (48)
// amISpeeding (85)

// let xPos = 300;
// let yPos = 150;

// function sendWarning (x, y){
//     if  ((x < xPos) && (y < yPos)){
//         console.log("Adjust the poition");
//     } else {
//         console.log ('things, fine');
//     }
// }

// sendWarning (500, 160)
// sendWarning (100, 100)
// sendWarning (201, 149)


// Напишите функцию,  которая разбивает слова в регистре.
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// "" =>  ""


