const person={
    firstname:'sri',
    lastname:'kanya',
    set fullname(value){
        if(typeof value !=='string')
        throw new error('value is not a string.');

    
         const parts=value.split('');
         this.firstname=parts[0];
         this.lastname=parts[1];
        }
    };
    try{
        person.fullname=null;
    }
    catch(e){
        console.log(e);
    }
    console.log(person);
