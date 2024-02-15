
function Person(firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.getFullName = function() {
        console.log(`Name: ${this.firstName} ${this.lastName} Age: ${this.age}`)
    }




}
let marte = new Person("Marte","Chewbacca", 29)
console.log(marte)
marte.getFullName()

// --------------------------------------------------------------------------
function Student(firstName, lastName, age, academyName, studentId ) {

    Person.call(this, firstName, lastName, age)
    
    this.academyName  = academyName  
    this.studentId = studentId

    this.getInfo = function() {
        console.log(`Name: ${this.firstName} ${this.lastName}
        Age: ${this.age} Academy: ${academyName} Student ID: ${studentId}`)
    }

}
let marte2 = new Student("Marte","Chewbacca", 29, "Medical", "29007")
console.log(marte2)
marte2.getInfo()

// -------------------------------------------------------------------------------


















































