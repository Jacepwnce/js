var number = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  
// number.push('Not a number1')
// number.push('Not a number2')
// number.push('Not a number3')
// number.push('Not a number4')
// number.push('Not a number5')
//console.log(number.length) 5


// i++ => i = 5 =>; 5 < 5(false) Цикл отрабатывает до значения (false)      

//Нахождение чётных элемнтов в массиве
for (var i = 0; i < number.length; i++) {
    if (number[i] % 2 === 0) {
console.log(number [i])
    } 
}

for (var i = 0; i < number.length; i++){
    if (number [i] % 2 !== 0){
        console.log(number [i])
    }
}

for (var i = 0; i < number.length; i++){
    if (number [i] % 2 !== 0){
        break
    }
    console.log(number [i])
}



