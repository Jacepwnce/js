 var carColor = 'red'

//  if (carColor === 'green') {
// console.log('Цвет машины - зеленый')
//  } else if (carColor === 'Yellow') {
//     console.log('Цвет машины - жёлтый')
//  } else if (carColor === 'red') {
//     console.log('Цвет машины - красный')
//  } else {
//      console.log ('Цвет машины - не определён')
//  }

 // Сверху написана стандартная структура if....else

switch (carColor) {
    case 'red':
        console.log('Цвет машины - красный')
        break
        case 'green':
            console.log('Цвет машины - зеленый')
            break
        case 'Yellow' :
            console.log('Цвет машины - жёлтый')
            break
            default:
                console.log ('Цвет машины - не определён')
} 


//break - дает возможность прерывать выполнение сразу на несколько уровней. 