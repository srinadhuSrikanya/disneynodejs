let numbers=[1,2,3,4];
let another =numbers;
numbers=[];
numbers.length=0;
numbers.splice(0,numbers.length);
while(numbers.length>0);
numbers.pop();
console.log(numbers);
console.log(another);
