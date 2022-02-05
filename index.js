//Реализуйте функцию, которая высчитывает сумму всех элементов массива, которые делятся без остатка на 3.

const coll1 = [8, 9, 21, 19, 18, 22, 7]; 
calculateSum(coll1); // 48 
const coll2 = [2, 0, 17, 3, 9, 15, 4] 

calculateSum(coll2); // 27


const coll1 = [8, 9, 21, 19, 18, 22, 7]
const coll2 = [2, 0, 17, 3, 9, 15, 4]
let result = 0

function calculateSum(items) {
    items.forEach(function (item) {
        if (item % 3 === 0) {
            result += item
        }
    })
    return result
}

console.log(calculateSum(coll1))
console.log(calculateSum(coll2))

