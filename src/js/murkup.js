import { fetchOneCategori } from './fetchOneCategori.js';
import { sliceBooks } from './sliceBooksData.js';

export async function murkup(categories) {
  const promiseAll = await Promise.all(
    categories.map(async ({ list_name, books }) => {
      return `
    <div class="container-books">
    <h3 class="book-categoty-title">${list_name}</h3>
    <ul class='list-books'>${await sliceBooks(books)}</ul>
    <button class="book-button" data-category="${list_name}">See more</button>
    </div>
    `;
    })
  );

  return promiseAll.join('');
}
document.addEventListener('click', async event => {
  if (event.target.classList.contains('book-button')) {
    const categoryListBooks = event.target.dataset.category;
    await fetchOneCategori(categoryListBooks);
  }
});
