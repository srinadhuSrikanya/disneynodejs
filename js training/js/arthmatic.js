let a= 2;
let b= 5;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a%b);
console.log(a**b);
console.log(a/b);

//increment
console.log(++a);
console.log(a++);
console.log(a);

//decrement
console.log(--a);

//comparion operator
let x=6;
console.log(x>7);
console.log(x<7);
console.log(x>=7);
console.log(x<=7);
/// equality operators

console.log(x === 7);

//strict equality
console.log(1===1);
console.log("1"===7);

//terenery operators
let points=110;
let type=points>100 ? 'gold':'silver';
console.log(type);

//logical operators
console.log(true && true);
 //AND
let highIncome=true;
let goodcreditscore=true;
let eligibleforLoan=highIncome && goodcreditscore;
console.log(eligibleforLoan);

//OR
let highIncome1=false;
let goodcreditscore1=true;
let eligibleforLoan1=highIncome || goodcreditscore;
console.log(eligibleforLoan1);