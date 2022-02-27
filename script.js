// let string = "45385593107843568"

// function fakeStr(string) {
//   let result = "";
//   for (let i = 0; string[i]; i++) {
//     if (string[i] < 5) {
//       result += "0"
//     } else(result[i] > 0)
//       result += "1"
//     }
//     return result;
//   }


// console.log(fakeStr(string));

// function sumElements(items) {
//   result = 0;
//   // items.forEach(function (item){
//   //    result += Number.parseInt(item, 10);
//   // })
//   // return result

//   items.reduce(function (total, current){
//     return Number.parseInt(total, 10) + current
//   },0);
//   return result;

//   // for (let item of items){
//   //   result += Number.parseInt(item, 10);
//   // }
//   // return result
// }

// console.log(sumElements([9, 3, '7', '3'])); // 22
// console.log(sumElements(['5', '0', 9, 3, 2, 1, '9', 6, 7])); // 42


// function wave(str){
//  let resultArr = [];
//   for (let i = 0; i < str.length; i++ ){
//     let result = str.split("");
//     if (result[i] !== ""){
//       result[i] = result[i].toUpperCase();
//       resultArr.push(result.join(''));
//     }
//   }
//   return resultArr
// }



// console.log(wave("hello"))

// function capitalize(word) {
// 	// let result = word.toLowerCase()
//     //  return result[0].toUpperCase() + result.substring(1)
//     return word[0].toUpperCase() + word.substring(1).toLowerCase()
// }

// // Sample usage - do not modify
// console.log(capitalize("sam")); // "Sam"
// console.log(capitalize("ALEX")); // "Alex"
// console.log(capitalize("chARLie")); // "Charlie"

// function convertNumberToString(number) {
// 	// your code
//     let str = number.toString()
//     return number
// }

// // Sample usage - do not modify
// console.log(convertNumberToString(42)); // "42"
// console.log(convertNumberToString(97)); // "97"
// console.log(convertNumberToString(11)); // "11


// function sumMix (x){
//   let result = 0;  
//   x.forEach(function (el){
//     result += Number.parseInt(el, 10);
//   })
//   return result
// }


// function noSpace(x) {
//   return  x.split(' ').join('')
  
// }
// console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B')); // '8j8mBliB8gimjB8B8jlB'
// console.log(noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd')); // '88Bifk8hB8BB8BBBB888chl8BhBfd'


