const table = document.getElementById('table');

const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const checkbox = document.getElementById('checkbox');
const button = document.getElementById('button');



let myLibrary = [];
let tableRows = 0;

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    return myLibrary[myLibrary.length] = book;
}

function displayBooks() {
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
            if (n == 4) return cell[n].innerHTML = `<button class="buttons" id=${tableRows-1}>Delete</button>`;
            cell[n].innerHTML = cellObj[n];
        }
    });
    addEventListenersToBtn();
};

function addEventListenersToBtn() {
    const buttons = document.querySelectorAll('.buttons');
    buttons.forEach (item => {
        item.addEventListener('click', () => {
            myLibrary.splice(item.id, 1);
            displayBooks();
        });
    });
}


button.addEventListener('click', () => {
    if (title.value && author.value && pages.value) {
        addBookToLibrary(title.value, author.value, pages.value, checkbox.value);
    }
    displayBooks();
});




