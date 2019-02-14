// Book Constractor
function Book(title, author, isbn){
    this.title = title
    this.author = author
    this.isbn = isbn
}

// UI Constractor
function UI(){

    //Add book to list
    UI.prototype.addBookToList = function(book){
        const list = document.getElementById('book-list');
        //Create tr element
        const row = document.createElement('tr');
        //Insert cols
        row.innerHTML = `
         <td>${book.title}</td>
         <td>${book.author}</td>
         <td>${book.isbn}</td>
         <td><a href="#" class="delete">X<a></td>
        `;
        
        list.appendChild(row);
    }

    UI.prototype.clearFields = function () {
        document.getElementById('title').value = "";
        document.getElementById('author').value = "";
        document.getElementById('isbn').value = "";
    }

}


//Event listeners

document.getElementById('book-form').addEventListener('submit', function(e){

    //Get form values
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const isbn = document.getElementById('isbn').value
    
    //Book
    const book = new Book(title, author, isbn)

    //Instantiate UI

    const ui = new UI();

    e.preventDefault();
    //Add book to list
    ui.addBookToList(book);

    //Clear Fields
    ui.clearFields();

    e.preventDefault();
})