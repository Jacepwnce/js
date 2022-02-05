/* stats.js */

/**
 * @param {array} grades
 */
 export function getSumOfGrades(grades) {
	// your code
  let result = 0
  grades.forEach(function(grade){
      result += grade
  })
  return result
}

/**
 * @param {array} grades
 */
export function getAverageGrade(grades) {
	// your code
    let avarage = 0
  grades.forEach(function(grade){
      avarage = ((avarage + grade) / grades.length)
  })
  return avarage
}