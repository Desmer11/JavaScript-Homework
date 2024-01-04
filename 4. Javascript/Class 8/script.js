console.log("---------- Objects -------------")


// Literal notation
console.log("Literal notation")

let pane = {
    firstName: "Panche",
    lastName: "Manaskov",
    age: 31,
    company: "Dept",
    job: "Developer",
    canSing: false,

    saySomething: function(text) {
        return `${this.firstName} says ${text}`


    }

}

console.log(pane);

// --------------------------- Áccess a property in a object
console.log("Áccess a property in a object")

console.log(pane.firstName);
console.log(pane.age);


let sayText = pane.saySomething("Hello G7!")
console.log(sayText);

//--------------------------------- Change Value of Property
console.log("Change Value of Property")

pane.job = "Software Developer";

pane.hobby = "Reading Books";
console.log(pane.hobby);
console.log(pane);

let aleksandar = {};
console.log(aleksandar);

aleksandar.firstName = "Aleksandar";
console.log(aleksandar);
console.log(aleksandar.firstName);

// ----------------------------------- Dot Notation ----------------
console.log("Dot Notation");

let dog = new Object();
console.log(dog);

dog.name = "Caesar"
dog.breed = "Dansk Spids"
dog.bark = function() {
    return "LOUD!!!!!!!!!!!!!!!!"
}

console.log(dog);
console.log(dog.name);
console.log(dog.bark());




// ------------------------------- Constructor Notation --------------------
console.log("Constructor Notation");

function Dog(nameFromUser, breedFromUser,ageFromUser, isLazy){
    this.name = nameFromUser;
    this.breed = breedFromUser;
    this.age = ageFromUser;
    this.isLazy = isLazy;

    this.bark = function(){
        return 'WOOF WOOF WOOF!!!'
    }

}

let myDog = new Dog("Rex", "German Sheperd", 2, false);
console.log(myDog);

let secondDog = new Dog("Sparky", "Dzukela", 5, true)
console.log(secondDog);

let thirdDog = new Dog("Aura", "Danish Spids, Border Collie, Labrador", 3, false)
console.log(thirdDog);

secondDog.breed = "Belgian Sheperd";
console.log(secondDog);

secondDog.isBarking = true;
console.log(secondDog);
console.log(myDog);

delete secondDog.breed;
console.log(secondDog)

//  Value and Reference type

let a = 5;
let b = 10;

b = a;
a = 20;

console.log("a: ", a);
console.log("a: ", b);


let obj1 = {
    fName: "Jonas"

}

let obj2 = {
    fName: "Marte"
}

// obj2 = obj1
obj2 = {...obj1}

obj1.fName = "Caesar";
obj2.fName = "Aura"

console.log(obj1.fName);
console.log(obj2.fName);


//  Excercise 5




let students = [];

function Student(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

let button = document.getElementById("btn");
let list = document.getElementById("list");

function showStudents(studentsArr, element) {
    element.innerHTML = "";
    for(let student of studentsArr) {
        element.innerHTML += `<li><b>Student: </b> ${student.firstName} ${student.lastName}, <b>Age: </b>${student.age}</li>`
    }
}


button.addEventListener("click", function(event) {
    event.preventDefault();

    let name = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let age = document.getElementById("age");

    let newStudent = new Student(name.value, lastName.value, age.value);

    students.push(newStudent);
    console.log(students);
    showStudents(students, list);

    name.value = "";
    lastName.value = "";
    age.value = ""
})




