
let array = [3, 4, 2, 1,9]
console.log("Array", array);




function calculator() {
    let result = 0
    for(let i = 0; i < array.length; i++ ) {
        result = result + array[i]

    }
    return result;




}

console.log("Calculator: "+calculator(array));

document.getElementById("p1").innerText = array;
document.getElementById("p2").innerText = calculator();

alert(array)
alert(calculator())