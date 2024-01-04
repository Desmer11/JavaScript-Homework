
// Write a program in programming language JS that will print in
// console all threesome numbers in given interval for
// which the Pythagorean condition is met.
// a*a + b*b = c*c



function Pythagoras(first,last) {
    for (let a = first; a <= last; a++) {
        for (let b = a; b <= last; b++) {
            for(let c = b; c <= last; c++) {
                if ((a*a)+(b*b) === (c*c)) {
                    console.log(`Pythagorean Numbers are: a:${a} b: ${b} c: ${c}`);

                }
            }
        }
    }
}

let first = 1;
let second = prompt("Add the Limit")

Pythagoras(first, second);




