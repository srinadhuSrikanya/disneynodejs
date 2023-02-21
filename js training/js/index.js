let name ='sri';
console.log(name);

let interestRate=2.5;
interestRate=1;
console.log(interestRate);

////////////////

let person={
    name : 'raj',
    age  :'23'
};

//dot notation
person.name='sri';

//Bracket notation
person['name']='raj'

console.log(person.name);

/////////////////////////////

//Arrays

let colors= ['red','blue'];
colors[2]='green';
console.log(colors.length);



//functions

function greet(name,lastName){
    console.log('hello'  +name +' '+lastName);
}

greet('srikanya','kalyan');


//calculate the function
function square(number){
    return number*number;
}
console.log(square(2));