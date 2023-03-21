// const square =function(x){
//     return x*x
// }
// const square=(x)=>{
//     return x*x
// }
// console.log(square(3));

// const square =(x) =>x*x
// console.log(square(4))




const Event ={
    name: 'birthday party',
    guest:['raj','sri','kanya'],
    printguestList (){ 
    console.log('guest list for '+this.name)

    // this.guestlist.forEach((guest) =>{
    //     console.log(guest+' is attending'+this.name)

    // })
}
}
Event.printguestList()
