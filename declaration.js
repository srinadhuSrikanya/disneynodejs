function walk(){
    console.log('walk');
}
// Anonymous function
let run=function(){
    console.log('run');
}
let move= run;
run();
move();