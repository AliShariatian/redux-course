// Simple function
function sum1(a, b, c) {
   return a + b + c;
}
console.log(sum1(12, 8, 10));

// --------------------------

// Currying function
function sum2(a) {
   return function (b) {
      return function (c) {
         return a + b + c;
      };
   };
}

console.log(sum2(12)(8)(10));

////////////////////////////////////////////////

// Simple function
const sum3 = (a, b, c) => {
   return a + b + c;
};
console.log(sum3(12, 8, 10));

// --------------------------

// Currying function
const sum4 = (a) => (b) => (c) => a + b + c;

console.log(sum4(12)(8)(10));
