
let list = document.getElementById("list");

let students = [];

function Student(firstName, lastName, age, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
}


function showStudents(studentsArr, element) {
    element.innerHTML = "";
    for(let student of studentsArr) {
        element.innerHTML +=
        `
        <li><b>Student: </b> ${student.firstName} ${student.lastName},
        <b>Age: </b>${student.age}</li>
        <b>email: </b>${student.email}</li>`
    }
}

let button = document.getElementById("button");
button.addEventListener("click", function(event) {
    event.preventDefault();

    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let age = document.getElementById("age");
    let email = document.getElementById("email");

    let newStudent = new Student(firstName.value, lastName.value, age.value, email.value );

    students.push(newStudent);
    console.log(students);
    showStudents(students, list);

    firstName.value = "";
    lastName.value = "";
    age.value = ""
    email.value = ""
})




