console.log(42)
console.log(-42)
console.log(1.5)
console.log(-8 / 3)// 2.66666
console.log(0xAB)
console.log(2e3)//2000
console.log(NaN)// not a number
console.log(typeof NaN)
console.log(123 / 0)

var fortyTwo = 42
var delta = 8 / 3
 
console.log(fortyTwo.toString())
console.log(+delta.toFixed(1) + 4)// (+) ствится для перевода числа из STRING в NUMBERS
console.log(parseFloat(delta.toFixed(2)))// parseFloat для перевода числа из STRING в NUMBERS
console.log(parseInt(delta.toFixed(2)))// оставляет число без десятичных... работает только с целыми чилами

console.log(isNaN(NaN))
console.log(isNaN(42))


console.log(isFinite(1 / 0))
console.log(isFinite(9999999))