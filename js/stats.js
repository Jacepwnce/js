/* stats.js */

/**
 * @param {array} grades
 */
export function getSumOfGrades(grades) {
  // your code
  let sum = 0;

  grades.forEach(function (grade) {
    sum = sum + grade;
  })
  return sum;
}

/**
 * @param {array} grades
 */
export function getAverageGrade(grades) {
  // your code
  let result = 0;
  let avarege = grades.length;

  grades.forEach(function (grade){
    result = (result + grade) / avarege;
  })
  return result;
}