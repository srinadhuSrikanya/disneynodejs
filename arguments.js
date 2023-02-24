function sum(a,b){
    let total=0;
    for(let value of arguments)
    total+=value;
    return total;s
}
console.log(sum(1,2,3,4));