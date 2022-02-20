/* bill.js */
export default class Bill {
    constructor() {
        this.amounts = [];
    }
  
    /** @param {string} amountStr */
    addAmount(amountStr) { // создаём метод класса
         return this.amounts.push(+amountStr); // добавляем элеммент в массив и с помощью оператора (+) - преобразовываем строчку в число
          
          
    }
      getCount(){ // создаём метод класса
          return this.amounts.length; //используем свойство для определения длинны массива
      }

      getTotal(){ // создаём метод класса
          let sum = this.amounts.reduce(function (total, current){  // используем метод reduce() - для нахождения суммы
            return total + current;
          },0);
         return sum;
        }

      getAverage(){ // создаём метод класса
          let avaregeSum = this.amounts.reduce(function(total, current){ // используем метод reduce() - для нахождения суммы 
              return (total + current);
          },0);
          return avaregeSum/ this.amounts.length; // для нахождения среднего значения потребуется сумму поделить на длинну массива
      }
  }