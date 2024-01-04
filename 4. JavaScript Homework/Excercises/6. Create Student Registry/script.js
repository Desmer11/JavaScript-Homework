
function Students(nameFromUser, breedFromUser,ageFromUser, isLazy){
    this.name = nameFromUser;
    this.breed = breedFromUser;
    this.age = ageFromUser;
    this.isLazy = isLazy;

    this.bark = function(){
        return 'WOOF WOOF WOOF!!!'
    }

}