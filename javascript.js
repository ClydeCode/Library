const table = document.getElementById('table');

const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const checkbox = document.getElementById('checkbox');
const button = document.getElementById('button');

let myLibrary = [];
let tableRows = 0;

class Book {
    
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    };

    changeStatus() {
        if (this.read == true) this.read = false;
        else
            this.read = true;
    }

    static addBookToLibrary(title, author, pages, read) {
        const book = new Book(title, author, pages, read);
        return myLibrary[myLibrary.length] = book;
    };
    
    static displayBooks() {
        while (1 < table.rows.length) {
            table.deleteRow(1);
            tableRows--;
        }
        myLibrary.forEach(book => {
            tableRows++;
            let cellObj = [book.title, book.author, book.pages, book.read];
            let cell = [];
            
            let row = table.insertRow(tableRows);
            
            for (let n = 0; n <= 4; n++) {
                cell[n] = row.insertCell(n);
                if (n == 4) return cell[n].innerHTML = `<button class="buttonsDel" id=${tableRows-1}>Delete</button>`;
                cell[n].innerHTML = cellObj[n];
                if (n == 3) {
                    if (cellObj[n] == true) {
                        cell[n].innerHTML = `<button class="buttonsRead" id=${tableRows-1}>Readed</button>`;
                    } else {
                        cell[n].innerHTML = `<button class="buttonsRead" id=${tableRows-1}>Not Readed</button>`;
                    }
                }
            }
        });
        this.addEventListenersToBtnRead();
        this.addEventListenersToBtnDel();
    };

    static addEventListenersToBtnRead() {
        const buttons = document.querySelectorAll('.buttonsRead');
        buttons.forEach(item => {
            item.addEventListener('click', () => {
                myLibrary[item.id].changeStatus();
                this.displayBooks();
            });
        });
    }
    
    static addEventListenersToBtnDel() {
        const buttons = document.querySelectorAll('.buttonsDel');
        buttons.forEach (item => {
            item.addEventListener('click', () => {
                myLibrary.splice(item.id, 1);
                this.displayBooks();
            });
        });
    }
}
        
button.addEventListener('click', () => {
    if (title.checkValidity() && author.checkValidity() && pages.checkValidity()) {
        Book.addBookToLibrary(title.value, author.value, pages.value, checkbox.checked);
    }
    Book.displayBooks();
});
        
title.addEventListener('input', () => {
    if (title.validity.tooShort) {
        title.setCustomValidity('title is too short');
        title.reportValidity();
    } else {
        title.setCustomValidity('');
    };
});   
        
     
        