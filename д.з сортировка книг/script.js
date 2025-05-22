let books = [];

fetch('books.json')
    .then(response => response.json())
    .then(data => {
        books = data;
        displayBooks(books);
    })
    .catch(error => console.error('Ошибка при загрузке данных:', error));

function displayBooks(books) {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = '';
    books.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.textContent = `${book.title} (${book.year})`;
        bookList.appendChild(bookItem);
    });
}

document.getElementById('sort-title').addEventListener('click', () => {
    const sortedBooks = [...books].sort((a, b) => a.title.localeCompare(b.title));
    displayBooks(sortedBooks);
});

document.getElementById('sort-year').addEventListener('click', () => {
    const sortedBooks = [...books].sort((a, b) => a.year - b.year);
    displayBooks(sortedBooks);
});