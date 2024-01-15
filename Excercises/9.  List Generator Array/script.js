let h3 = document.getElementById("h3")
let ul = document.getElementById("ul")



let array = ["Jones", "Marte", "Caesar", "Aura", "Kiro"]




function update() {
    for(let i=0; i<array.length; i++){
        
        let li = document.createElement("li");              // create a list item element
        li.textContent = array[i];                     // add the array item's value as textContent to the list item element
        ul.appendChild(li);



    }
}

let button = document.getElementById("button")
button.addEventListener('click', function (e){
    update()
    document.getElementById('button').disabled = true;
})