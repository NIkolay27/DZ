let string = 'some test string'; 


// 1. Сделать первую и последнюю буквы строки в верхнем регистре. При помощи конкатенации и через шаблонные строки.

// 1.вариант
let up;

up = string[0].toUpperCase() + string.slice(1,-1) + string.slice(-1).toUpperCase(); 
console.log(up);

// 2.вариант

let up2;

up2 = string.slice(0,1).toUpperCase() + string.slice(1,-1) + string.slice(-1).toUpperCase(); 
console.log(up2);

// 3.вариант

let up3;

let first = string[0].toLocaleUpperCase(); 
let last = string.slice(-1).toUpperCase();
let center = string.slice(1,-1);

// вывел значение через шаблонные строки

  up3 = `
  ${ first}${ center }${ last } 
  `;

  console.log(up3);



//  2. Найти положение слова 'string' в строке.
let st;
st = string.indexOf('string'); 
console.log(st);



// 3. Найти положение второго пробела в строке (“вручную” ничего не считать).
let  st2;
st2 = string.lastIndexOf(' '); 
console.log(st2);

// 4. Получить строку с 5-го по 9-й символы.    

let st3;
st3 = string.slice(5,9);
console.log(st3);


// 5. Получить число pi из Math и округлить его до 2-х знаков после точки.

let pi;
pi = Math.PI.toFixed(2);
console.log(pi);


// 6. Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51.

let max1;
let mmin1;

max1 = Math.max(15, 11, 16, 12, 51, 12, 13, 51);
console.log(max1);
min1 = Math.min(15, 11, 16, 12, 51, 12, 13, 51);
console.log(min1);



// 7. Получить случайное число и округлить его до двух цифр после запятой.

let random1;
random1 = Math.random().toFixed(2); // рандом получается о 0до 100 ,прибавил единицу чтоб в область вошло число 100
console.log(random1);



// 8. Получить случайное целое число от 0 до X. X - любое произвольное число.

let random2;

random2 = (Math.random()*100+1).toFixed() // рандом получается о 0до 100 ,прибавил единицу чтоб в область вошло число 100
console.log(random2);

// 9. Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?

let sum1;
let num1 = .6;
let num2 = .7;
sum1 = (num1 * 10 + num2 * 10)/10;  
console.log(sum1);

// 10. Создать объект с полем **product**, равным 'iPhone'.

 const tel = {
  product: 'iPhone'
 };
 console.log(tel);

// 11. Добавить в объект поле **price**, равное 1000 и поле **currency**, равное 'dollar'.

 tel.price = 1000;
 tel.currency = 'dollar';
 console.log(tel);

// 12. Добавить поле **details**, которое будет содержать объект с полями **model** и **color**
tel.details = {};  // создал пустое поле

tel.details.model = 'model';
tel.details.color = 'color';
console.log(tel);

