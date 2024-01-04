
let BooksArray =
["Harry Potter 1","Harry Potter 2","Harry Potter 3",
"Harry Potter 4","Harry Potter 5","Harry Potter 6"]



var btnRead = document.getElementById("btnRead");
var bookList = document.getElementById("bookList");

let ul = document.createElement("ul");                  // create an unordered list element

for(let i=0; i<BooksArray.length; i++){                 // iterate through the array
   
    var p = document.createElement('p');
    let li = document.createElement("li");              // create a list item element
    
    li.textContent = BooksArray[i];                     // add the array item's value as textContent to the list item element
    ul.appendChild(li);                                 // append the list item element to the unordered list element
    
    li.appendChild(p);
    p.style.backgroundColor = "RED";;
    p.style.color = "white";
    p.innerText = 'Not Read';

    var buttonYes = document.createElement('button');
    buttonYes.innerText = 'Read!';
    li.appendChild(buttonYes);
    var buttonNo = document.createElement('button');
    buttonNo.innerText = 'Not Read!';
    li.appendChild(buttonNo);

    buttonYes.onclick = function(){

        p.innerText = "Read";
        p.style.backgroundColor = "GREEN";
        p.style.color = "white";
        
    }
    buttonNo.onclick = function(){
        
        p.innerText = "Not Read";
        p.style.backgroundColor = "RED";;
        p.style.color = "white";
      
    }
}
   

document.getElementById("bookList").appendChild(ul);    // append the unordered list element to a HTML element with the id of "bookList"

