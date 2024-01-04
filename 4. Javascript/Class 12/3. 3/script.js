
// Find all palindromes in a given interval
// example palindromes 121, 3443, 22, 232

// console.log(parseInt(123 / 10));
// console.log(parseInt(123 % 10));

// let firstNumber = 100
// let lastNumber = 1000

// for (let a = firstNumber; a <= lastNumber; a++) {
//     let numString = a.toString();
//     let firstChar = numString.charAt(0);
//     let lastChar = numString.charAt(numString.length - 1);

//     if (firstChar === lastChar) {
//         console.log(a);

//     }

// }



// let startN = 100;
// let endN = 1000;

// for(let i = startN; i <= endN; i++) {
//     let strNum = i.toString();
//     let reversedString = [...strNum].reverse().join('')

//     if(strNum === reversedString) {
//         console.log(`Palindrom is: ${i} `)
//     }
// }

let startNumber = 100;
let endNumber = 1000;

for(let i = startNumber; i <= endNumber; i++) {
    let reversedNum = 0;
    let helper = i;

    while(helper > 0) {
        let temp = helper % 10;
        reversedNum = reversedNum * 10 + temp;
        helper = parseInt(helper / 10);


    }
    if(i === reversedNum) {
        console.log(`Palindrom: ${i}`)
    }


}



