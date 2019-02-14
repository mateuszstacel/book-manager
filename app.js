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
    //Clear fields
    UI.prototype.clearFields = function () {
        document.getElementById('title').value = "";
        document.getElementById('author').value = "";
        document.getElementById('isbn').value = "";
    }

    //Show alert
    UI.prototype.showAlert = function(message, className) {
        //Create div
        const div = document.createElement('div');
        //Add class
        div.className = `alert ${className}`;
        //Add text
        div.appendChild(document.createTextNode(message));
        //Get parent
        const container = document.querySelector('.container');
        
        const form = document.querySelector('#book-form')
        //insert alert
        container.insertBefore(div, form)

        //timeout after 3 seconds
        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 3000)
    }

    UI.prototype.deleteBook = function(target){
        if(target.className === 'delete'){
            target.parentElement.parentElement.remove();
            this.showAlert('Book removed', 'success');
        }
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

    //validate
    if(title === '' || author === '' || isbn === ''){
        //Error alert
        ui.showAlert('Please fill in all fields', 'error');

    } else {
        //Add book to list
        ui.addBookToList(book);

        //show success
        ui.showAlert('Book have been added successfuly', 'success');

        //Clear Fields
        ui.clearFields();
    }

  
    e.preventDefault();
});

//event listener for delete
document.getElementById('book-list').addEventListener('click', function(e){
    const ui = new UI();

    //delete book
    ui.deleteBook(e.target);

    e.preventDefault();
})