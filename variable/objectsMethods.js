person={
    firstname:["Demo"],
    lastname:["user"],
    age:[50],
    height:[5.9],
    weight:[60],
    fullname: function(){
        return(this.firstname +" " +this.lastname);
    },
    // upper case function
    username: function (){
        return(this.firstname + " " +this.lastname).toUpperCase();
    }

};
console.log(person.fullname());
console.log(person.username());