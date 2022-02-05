import {getSumOfGrades, getAverageGrade} from "./stats.js"

let gradesForm = document.querySelector("#grades-form")
let yourGrade = document.querySelector("#your-grade")

let grades = [14, 9, 13, 15, 18]

function render(grades) {
  console.log("Grades: " + grades.join(', '))
  let tbody = document.querySelector("#stats-table tbody")
  tbody.innerHTML = `<tr>
  <td>${grades.length}</td>
  <td>${getSumOfGrades(grades)}</td>
  <td>${getAverageGrade(grades)}</td>
  </tr>`
}

gradesForm.addEventListener("submit", event => {
  event.preventDefault()
  let newGrade = Number.parseInt(yourGrade.value, 10)
  grades.push(newGrade)
  yourGrade.value = ""
  render(grades)
})

render(grades)