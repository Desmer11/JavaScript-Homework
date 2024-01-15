

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

