
// Write a program in programming language JS that will print in
// console all threesome numbers in given interval for
// which the Pythagorean condition is met.
// a*a + b*b = c*c


let start = 1;
let end = 20;

for(let a = start; a < end; a++) {
    console.log(a);
    for(let b = start; b <= end; b++) {
        console.log(b)
        for(let c = start; c <= end; c++) {
            if(a*a + b*b === c*c) {
                console.log(`The condition is met by the numbers: ${a}`)
            }
        }
    }


}










