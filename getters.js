const person={
    firstname:'kanya',
    lastname:'kalyan',
    get fullname(){
        return ('${person.firstname}${person.lastname}');
    },
        setfullname(value) {
         const parts=value.split('');
         this.firstname=parts[0];
         this.lastname=parts[1];
        }
    };

person.fullname='raj';
console.log(person);
