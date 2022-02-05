// let grades = [10, 15, 13];

// let newGrades = grades.map(function (grade){
//     return grade - 1;
// });

// console.log(newGrades);




// function tripleGrades(grades) {
//     return grades.map(function (grade) {
//         return grade * 3;
//     });
// }

// console.log(tripleGrades([10, 20])); // [30, 60]
// console.log(tripleGrades([5, 12, 20, 10])); // [15, 36, 60, 30]

// const grades = [2, 3, 4, 5, 35]
// //// create a function to use
// function makeGrades(grade) {
//     return grade * 3
// }
// //// call the function we made. more readable
// const newGrade = grades.map(makeGrades)
// console.log(grades)
// console.log(newGrade)


// let grades = [10, 15, 5];

// let sum = grades.reduce(function (total, current){
//     return total + current
// }, 1);

// console.log(sum);

// //редьюсер

// // function (total, current){
// //     return total + current;
// // };

// function sumNumbers(grades) {
//     return grades.reduce(function (total, current) {
//         return total + current;
//     }, 0);
// }

// // Sample usage - do not modify
// console.log(sumNumbers([10, 20, 30])) // 60
// console.log(sumNumbers([2, 4, 2, 10])) // 18