// var result = ''

// for (var i = 0; i < 5; i++){
//     for (var j = 0; j < 6; j++){
//         if (j === 5){
//             result += j;
//         }else result += j + ', ';
//     }   
//     console.log(result);
//     result = '';
// }


// var result = '';
// var counter = 1;

// for (var i = 0; i < 5; i++){
//     for (var j = 0; j < 5; j++){
//         result += counter++ + '';
//     }
//     console.log(result);
//     result = '';
// }
  

// var result = ' '

//  for (var i = 1; i <= 10; i++){
//      for (var j = 1; j <= 10; j++){
//          result = i + ' * ' + j + ' = ' + i * j;
//          console.log(result);
//          result = '' 
//      }
//      console.log(' ');
//      console.log(' ');
//  }   


// var result = ``;

// for (var i = 1; i <= 10; i++){
//     for (var j = 1; j <= 10; j++){
//         result = `${i} * ${j} = ${i * j}`;
//         console.log(result);
//     }
//     console.log(' ');
//     console.log(' ');
// }


// var numbers = [7, 2, 88, 11, 102, 3];
// var max = numbers [0];
// var secondMax = -Infinity;

// for (var i = 0; i < numbers.length; i++ ){
//     if (max < numbers[i]) {
//         secondMax = max;
//         max = numbers[i];
//     }
//     if (secondMax < numbers[i] && numbers[i] < max){
//         secondMax = numbers[i];
//     }
// }

// console.log(max);
// console.log(secondMax);


// function sayName (name) {
//     alert(`my name is ${name}`);
// }

// console.log (typeof sayName);
// sayName('Exo');


// function sayName1 () {
//     alert(`my name is Exo`);
// }

// console.log (typeof sayName1);
// sayName1('Exo');


// function calc (a, b){
//     console.log(a);
//     console.log(b);
//     return a + b;
// }

// var y = calc(30, 40);

// console.log(y);


// var b = 10;

// function f (){
//     b = 20;
// }
// f();
// console.log(b);


// function f (a, b, c){
//     alert(a);
//     console.log(b + c);
// }

// f(40, 7, 10, 50, 60);


// var max = Math.max(7, 9, 20, -5);
// console.log(max);


// var result = Math.floor(2.3);
// console.log(result);


// function floor (number){
//     if (number === null){
//         alert('Write number');
//         return;
//     }
//     return number - (number % 1);
    
// }

// var y = floor(null);

// console.log(y);


// alert(0.1 + 0.2 === 0.3000000000000004);


// function round (number){
//     if (number % 1 >= 0.5) {
//         return number - (number % 1) + 1;
//     }else {
//         return number - (number % 1);
//     }
// }
// var y = round(4.7);
// console.log(y);


// var arr = new Array('3');

// console.log(arr.length, arr);


// function min (arr){
//     var min = arr[0];

//     for (var i = 0; i < arr.length; i++) {
//         if () {
            
//         }
//     }
// }

// min([4, -40, 8]);
// var minNum = min(4, 7, 9, -10);
// console.log(minNum);