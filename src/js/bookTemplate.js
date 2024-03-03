export function bookTemplate(book) {
  const { book_image, title, author } = book;
  return `<li class="top-book">
            <img class="book-image" src="${book_image}" alt="${title}" />
            <h3 class="book-name">${title}</h3>
            <p class="author-name">${author}</p>
          </li>`;
}

export function booksTemplate(books) {
  return books.map(bookTemplate).join('');
}
