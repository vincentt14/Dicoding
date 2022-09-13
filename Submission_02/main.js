const books = [];
const RENDER_EVENT = 'render-all-books';

const inputBookTitle = document.getElementById('inputBookTitle');
const inputBookAuthor = document.getElementById('inputBookAuthor');
const inputBookYear = document.getElementById('inputBookYear');
const inputBookIsComplete = document.getElementById('inputBookIsComplete');
const bookSubmit = document.getElementById('bookSubmit');

const incompleteBookshelfList = document.getElementById('incompleteBookshelfList');
const completeBookshelfList = document.getElementById('completeBookshelfList');

const searchBookTitle = document.getElementById('searchBookTitle');
const searchSubmit = document.getElementById('searchSubmit');


bookSubmit.addEventListener('click', (event) => {
    event.preventDefault();
    const id = +new Date();
    const title = inputBookTitle.value;
    const author = inputBookAuthor.value;
    const year = inputBookYear.value;
    const isComplete = inputBookIsComplete.checked;

    const newBookObject = generateBookObject(id.toString(), title, author, year, isComplete);

    books.push(newBookObject);
    document.dispatchEvent(new Event(RENDER_EVENT));
    saveData();
});

const generateBookObject = (id, title, author, year, isComplete) => {
    return {
        id,
        title,
        author,
        year,
        isComplete
    }
}

document.addEventListener(RENDER_EVENT, () => {
    incompleteBookshelfList.innerHTML = '';
    completeBookshelfList.innerHTML = '';

    books.forEach((book) => {
        if (book.isComplete === true) {
            completeBookshelfList.innerHTML += makeBookshelfList(book);
        } else {
            incompleteBookshelfList.innerHTML += makeBookshelfList(book);
        }
    });
});

const makeBookshelfList = (book) => {
    const tempElement = `
        <article class="book_item">
            <h3>${book.title}</h3>
            <p>Penulis: ${book.author}</p>
            <p>Tahun: ${book.year}</p>

            <div class="action">
                <button onClick="changeStatusComplete(${book.id})" class="green">${book.isComplete === false ? '' : 'Belum'} Selesai di Baca</button>
                <button onClick ="deleteBook(${book.id})" class="red">Hapus buku</button>
            </div>
        </article>
    `;
    return tempElement;
}

const renderFilteredBooks = (filteredBooks) => {
    incompleteBookshelfList.innerHTML = '';
    completeBookshelfList.innerHTML = '';

    filteredBooks.forEach((book) => {
        if (book.isComplete === true) {
            completeBookshelfList.innerHTML += makeBookshelfList(book);
        } else {
            incompleteBookshelfList.innerHTML += makeBookshelfList(book);
        }
    });
}

const findIndexById = (id) => {
    for (let i = 0; i < books.length; i++)
        if (books[i].id === id.toString())
            return i;
    return -1;
}

const deleteBook = (id) => {
    const findIndex = findIndexById(id);
    if (findIndex === -1) return;
    books.splice(findIndex, 1);
    document.dispatchEvent(new Event(RENDER_EVENT));
    saveData();
}

const changeStatusComplete = (id) => {
    const findIndex = findIndexById(id);
    if (findIndex === -1) return;
    books[findIndex].isComplete = !books[findIndex].isComplete;
    document.dispatchEvent(new Event(RENDER_EVENT));
    saveData();
}

searchSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    const title = searchBookTitle.value;

    const tokens = title.toLowerCase().split(' ').filter((token) => token.trim() !== '');

    if (tokens.length) {
        let searchTermRegex = new RegExp(tokens.join('|'), 'gim');
        const filteredBooks = books.filter((book) => {
            let bookString = '';
            bookString += book.title.toString().toLowerCase().trim() + ' ';
            return bookString.match(searchTermRegex);
        });
        console.log(filteredBooks);
        renderFilteredBooks(filteredBooks);
    } else {
        document.dispatchEvent(new Event(RENDER_EVENT));
        saveData();
    }
})

const saveData = () => {
    if (isStorageExist()) {
        const parsed = JSON.stringify(books);
        localStorage.setItem(STORAGE_KEY, parsed);
        document.dispatchEvent(new Event(SAVED_EVENT));
    }
}

const SAVED_EVENT = 'saved-book';
const STORAGE_KEY = 'BOOK_APPS';

const isStorageExist = () => {
    if (typeof (Storage) === undefined) {
        alert('Browser kamu tidak mendukung local storage');
        return false;
    }
    return true;
}

document.addEventListener(SAVED_EVENT, function () {
    console.log(localStorage.getItem(STORAGE_KEY));
});

const loadDataFromStorage = () => {
    const serializedData = localStorage.getItem(STORAGE_KEY);
    let data = JSON.parse(serializedData);

    if (data !== null) {
        for (const book of data) {
            books.push(book);
        }
    }

    document.dispatchEvent(new Event(RENDER_EVENT));
}
if (isStorageExist()) {
    loadDataFromStorage();
}