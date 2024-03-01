const bookList = document.querySelector('.top-categories-list');

import { booksTemplate } from './bookTemplate';

export function renderBooks(books) {
  const markup = booksTemplate(books);
  bookList.insertAdjacentHTML('beforeend', markup);
}


import { getTopListBooks } from './js/getTopListBooks';
import { renderBooks } from './js/renderBooks';

//document.addEventListener('DOMContentLoaded', renderBooks);

document.addEventListener('DOMContentLoaded', () => {
  getTopListBooks()
    .then(books => renderBooks(books))
    .catch(error => console.log(error));
});