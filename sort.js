// function sortDemo()
// {
//   arr.sort()
//   console.log(arr);
// }
// var arr=[ -3, 1, 10, 12, 1];
// sortDemo();



var array = [];
array.push({Registration_Number: "'1"},
{Registration_Number: "'11"},
{Registration_Number: "'12"},
{Registration_Number: "'-5"},
{Registration_Number: "'8"}
);

array.sort((x,y) => {
 var xInt = new Number(x.Registration_Number.substring(1,x.length));
 var yInt = new Number(y.Registration_Number.substring(1,x.length)); 
 return xInt - yInt;
});

console.log(array);
