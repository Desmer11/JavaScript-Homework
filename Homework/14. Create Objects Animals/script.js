function Animals(nameFromUser, typeFromUser, speakFromUser){
    this.name = nameFromUser;
    this.type = typeFromUser;
    this.speak = speakFromUser;

}


let Animal1 = new Animals("Ghost", "Wolf", "Howl!!!");
console.log(Animal1);

let Animal2 = new Animals("", "", "");
console.log(Animal2);

let Animal3 = new Animals("", "", "");
console.log(Animal3);


let animal = document.getElementById("animal")
let type = document.getElementById("type")
let Speak = document.getElementById("Speak")
let button = document.getElementById("btn");

















