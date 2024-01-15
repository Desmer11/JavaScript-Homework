let array = ["Hello", "there","students","of","SEDC", "!"]


function myFunction() {
    let sentence = `${array[0]} ${array[1]} ${array[2]} ${array[3]} ${array[4]} ${array[5]}`;
    
    return sentence

}


console.log("My Function Says: "+myFunction());
alert(myFunction());

document.getElementById("p1").innerText = myFunction();

