
// -----------------------Generating arrays-------------------------------------------

console.log("Generating arrays")


let arrayDivide3 = [];
   
for (i = 1; i <=1000; i++){
        
        if(i % 3 == 0){
            arrayDivide3.push(i);

        }
    }
console.log(arrayDivide3)


let arrayDivide4 = []

for (i = 1; i <= 1000; i++) {
    
    if (i % 4 == 0) {
        arrayDivide4.push(i);
    }
}
console.log(arrayDivide4)


let arrayLastDigit = []

for (i = 1; i <= 1000; i++) {
    
    if (i % 10 == 1) {
        arrayLastDigit.push(i);
    }
}
console.log(arrayLastDigit)




// -----------------------Cleaning Arrays-------------------------------------------
console.log("Clean Arrays")

let test = [true, false, 12, 13, 44, 2345, "Bob", "Jill", false, undefined, 1000, null, "Jack", "", "", 99, "Greg", undefined, NaN, 1, 22];


let strings = [];
let numbers = [];
let truthValues = [];


function stringFunc() {

    for(item of test) {
        if(typeof item === "string") {
            strings.push(item)
        }
    }
    console.log(strings);

    for(item of test) {
        if(typeof item === "number" && !isNaN(item)){
            numbers.push(item);
        }
    }
    console.log(numbers)

    for(item of test) {
        if(item) {
            truthValues.push(item);
        }
    }
    console.log(truthValues)

}


stringFunc();






