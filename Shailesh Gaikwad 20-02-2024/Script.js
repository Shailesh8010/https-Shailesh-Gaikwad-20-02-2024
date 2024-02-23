// // Hoisting

// console.log(x); 
// var x = 5;


// abc(); 
// function abc() {
//   console.log("I am Shailesh Gaikwad");
// }

// xyz(); 
// var xyz = function() {
//   console.log("Shailesh");
// };

// function pqr() {
//   console.log(x); 
//   var x = 10;
//   console.log(x); 
// }
// pqr();


// var msg = "Hi";
// function uvw() {
//   console.log(msg); 
//   var msg = "Hello";
//   console.log(msg); 
// }

// uvw();
// console.log(msg);





// Closures



// function outerFunc() {
//   var outerVar = 'I am from the outer function';
  
//   function innerFunc() {
//     console.log(outerVar);
//   }

//   return innerFunc;
// }

// var closureExmpl = outerFunc();
// closureExmpl();




// function adder(a) {
//   return function (b) {
//     return a + b;
//   };
// }

// const add13 = adder(13);
// const add27 = adder(27);

// console.log(add13(7));
// console.log(add27(3)); 




// const x = 32;
// function sum(a) {
//   console.log(a)
//   return function (b) {
//     console.log(b)
//     return function (c) {
//       console.log(c)
//       return function (d) {
//         console.log(d)
//         return a + b + c + d + x;
//       };
//     };
//   };
// }

// console.log(sum(3)(4)(5)(6)); 

