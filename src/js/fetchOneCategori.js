import axios from 'axios';
import { onError } from './iziToasts';
import { startLoad } from './startLoad.js';
import { sliceBooks } from './sliceBooksData.js';
import { loaderOn } from './loader.js';
import { loaderOff } from './loader.js';
import { loadMain } from './startLoad.js';

// для перевірки розкоментуй виклик фукнції на main.js
// fetchOneCategori('Advice How-To and Miscellaneous');

export async function fetchOneCategori(category) {
  loaderOn(loadMain);
  const categories = document.querySelector('.top-categories-list');
  // console.log(categories);
  categories.innerHTML = '';

  try {
    const resp = await axios.get(
      `https://books-backend.p.goit.global/books/category?category=${category}`
    );
    // console.log(resp);
    const data = resp.data;

    categories.insertAdjacentHTML(
      'afterbegin',
      await makeCategoryPage(category, data)
    );
    loaderOff(loadMain);
  } catch (error) {
    console.log(error.message);
    onError();
  }
}

async function makeCategoryPage(category, data) {
  const words = category.split(' ');
  const lastWord = words[words.length - 1];
  const wrappedLastWord = '<span>' + lastWord + '</span>';
  words[words.length - 1] = wrappedLastWord;
  const updatedString = words.join(' ');
  return `
  <h3 class="categories-title">${updatedString}</h3>
  <ul class='list-books'>${await sliceBooks(data)}</ul>`;
}

async function makeListBook(data) {
  console.log(data);
  return data.map(makeMarcup).join('');
}

function makeMarcup({ author, book_image, title, description, _id }) {
  return `<li class="category-item" id=${_id}>
    <div class="book-wrap">
    <img class="book-img" src="${book_image}"  alt="${description}" data-id="${_id}"/>
    </div >
    <div class="book-info">
    <p class="info-title">${title}</p>
    <p class="info-author">${author}</p>
    </div>
    </li>`;
}
