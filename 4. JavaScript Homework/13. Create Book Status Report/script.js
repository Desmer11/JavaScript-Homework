var BookStatusReport = document.getElementById("BookStatusReport")
var bookName = document.getElementById("bookName") 
var author = document.getElementById("author")
var status = document.getElementById("status")

var btnRead = document.getElementById("btnRead");
var bookList = document.getElementById("bookList");


var books = [];
console.log(books)

function Books(bookName, author, status) {
    this.bookName = bookName;
    this.author = author;
    this.status = status;
}
console.log(Books)

function showBooks(bookArr, element) {
    element.innerHTML = "";
    for(let books of bookArr) {
        element.innerHTML += `<li><b>Name: </b> ${books.bookName} <b>Author: </b>${books.author}, <b>Status: </b>${books.status}</li>`
    }
}


btnRead.addEventListener("click", function(event) {
    event.preventDefault();

    var bookName = document.getElementById("bookName") 
    var author = document.getElementById("author")
    var status = document.getElementById("status")

    var newBook = new Books(bookName.value, author.value, status.value);

    books.push(newBook);
    console.log(books);
    showBooks(books, bookList);

    bookName.value = "";
    author.value = "";
    status.value = ""
})






