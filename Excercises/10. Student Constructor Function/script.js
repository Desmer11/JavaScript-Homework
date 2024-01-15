


let students = [];

function Student(firstName, lastName, academy, grades = [], birthYear) {
    
    this.firstName = firstName;
    this.lastName = lastName;
    this.academy = academy;
    this.grades = grades;
    this.birthYear = birthYear;

   


    this.getGradesAverage = function(){
        
        let sum = 0;
        for (let i = 0; i < grades.length; i++) {
          sum += grades[i];
        }
        return `${sum}`


    }
    this.getAge = function() {
        let dateNow = 2024;
        let age = (dateNow) - (this.birthYear);
        return ` ${age}`;
    }

    this.getInfo = function(){
        return `${this.firstName} ${this.lastName}, Academy: ${this.academy}, Birth Year: ${birthYear}, Age:${this.getAge()} Grades: ${this.getGradesAverage()}  `    }


        return `${this.getInfo()}`
}


let Jonas = new Student("Jonas", "Kotevski", "Stenhus", [10,7,2,4,10], 1990);

console.log(Jonas.getInfo())
console.log(Jonas)