import { fetchOneCategori } from './fetchOneCategori.js';
import { sliceBooks } from './sliceBooksData.js';
import { makeListOfBooks } from './makeListOfBooks.js';

export async function murkup(categories) {
  const promiseAll = await Promise.all(
    categories.map(async ({ list_name, books }) => {
      return `
    <div class="container-books">
    <h3 class="book-categoty-title">${list_name}</h3>
    <ul class='list-books'>${await makeListOfBooks(books)}</ul>
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
    onBtnCategoryClick(categoryListBooks);
    await fetchOneCategori(categoryListBooks);
  }
});

window.addEventListener('scroll', function () {
  const scrollButton = document.querySelector('.scroll-up-js');
  if (window.scrollY > 2000) {
    scrollButton.classList.remove('js-scroll-up-hidden');
  } else {
    scrollButton.classList.add('js-scroll-up-hidden');
  }
});

// Scroll to top when button is clicked
document.querySelector('.scroll-up-js').addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

function onBtnCategoryClick(categoryListBooks) {
  const links = document.querySelectorAll('.link_category-book');
  links.forEach(link => link.classList.remove('active-category'));

  links.forEach(link => {
    if (link.textContent === categoryListBooks) {
      link.classList.add('active-category');
    }
  });
}
