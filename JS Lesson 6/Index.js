// function f(){
//     console.log(this.age);
// }

// var obj = {
//     age: 100,
//     f:function(){
//         f();
//     }
// }
// obj .f();

// function f (name){
//     this.name = name;
// }
// var o = new f ('Some name');
// console.log(o)

// function f (name){
//     this.myName = name;
// }
// f('Some text');
// console.log(myName)


// function F (name){
//     if(this === window || this == obj){
//         throw 'F isaconstructor';
//     }
//     this.myName=name;
// }

// var obj = {
//     f:F
// }
// obj.f();



// function F (name){
//     if(this === window || !(this instanceof F)){
//         throw 'F isaconstructor';
//     }
//     this.myName=name;
// }

// // var obj = {
// //     f:F
// // }
// // obj.f();

// var o = new F();
// o.f = F;
// o.f();


// function F (name){
//     if(! new.target){
//         throw 'F isaconstructor';
//     }
//     this.myName=name;
// }

// var o = new F();
// o.f = F;
// o.f();

// var arr = [-7,200,30,11,-2,100];
// for(var i = 0; i < arr.length;i++){
//     if(arr[i] > arr[i+1]){
//         var container = arr[i];
//         arr [i] = arr [i+1];
//         arr[i+1] = container;
//         i -=2;
//     }
// }

// console.log(arr);

// function f(){

// }
// var arr = [];
// arr.y = 10;
// console.log(arr);

// function F(){

// }
// F.y= 10;
// console.log(F.y);

// function F(age){
//     this.age = age;
// }
// F.y = 10;
// F.prototype.x = 200;
// var f = new f(100);
// consloe.log(f.age);
// consloe.log(f.x)


// Array.prototype.customPush = function(value){
//     this.push(value);
// }

// var a = [];
// a.customPush(5);
// console.log(a);



// Array.prototype.customPush = function(){
//     for(var i = 0; i < arguments.length;i++){
//     this[this.length]  = arguments[i];
// }
// }
// var a =[];
// a.customPush(5,5,56,6,987)
// console.log(a);


// var y;
// var x = (y = 10, alert(1), 3);
// console.log(x);
// console.log(y);

// custompop();
// customshift();
// customunshift();



// var arr = [415, 45, 5];
// arr.length = 1;

// console.log(arr);


// Array.prototype.myPop = function () {
//     var lastElem = this[this.length - 1];

//     this.length = this.length - 1;
//     return lastElem;
// }

// var test = [11, true, null];
// var t = test.myPop();

// console.log(test);
// console.log(t);


// var arr = [415, 45, 5];
// arr.indexOf(5);
// function indexOf(arr, value) {
//     var index = -1;

//     for(var i =0; i < arr.length; i++) {
//         if(arr[i] === value){
//             return i;
//         }
//     }
//     return -1;
// }    

// var test = [7, true, 'some test', []];
// indexOf(test, 'some test');

// console.log(test);


// var a = [12, 546, 88];

// function includes(arr, value) {
//     for(let i = 0; i < arr.length; i++) {
//         if (arr[i] === value) {
//             return true;
//         }        
//     }

//     return false;
// }

// console.log(includes(a, 885865));


// Array.prototype.myIncludes = function(value) {
//     for(let i = 0; i < this.length; i++) {
//         if (this[i] === value) {
//             return true;
//         }        
//     }

//     return false;
// }

// var a = [12, 546, 88];

// console.log(a.myIncludes(88));


// Array.prototype.myIncludes = function(value) {
//     for(let i = 0; i < this.length; i++) {
//         if (this[i] === value) {
//             return true;
//         }        
//     }

//     return false;
// }

// var a = [12, 546, 88];

// console.log(a.myIncludes.unshift[4444];


// var arr = [45, 52, true, [],];
// arr.splice(3, 1, 7000000);

// console.log(arr);

// var test = [11, true, null];
// var testCopy = test.slice();

// console.log(test.copy);


// var test = [{name: 'Samo'}, true, null];
// var testCopy = test.slice(1, 3);


// test.concat([45, 7878, 555]);

// console.log(test.concat([45,7878,555]);)




// test.join
// test.reverse
// test.concat