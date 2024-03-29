import axios from 'axios';
import { onError } from './iziToasts';
import { startLoad } from './startLoad.js';
import { sliceBooks } from './sliceBooksData.js';
import { loaderOn } from './loader.js';
import { loaderOff } from './loader.js';
import { loadMain } from './startLoad.js';
import { murkup } from './murkup.js';

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
  const middleIndex = Math.ceil(words.length / 2);
  const firstHalf = words.slice(0, middleIndex).join(' ');
  const secondHalf = words.slice(middleIndex).join(' ');
  const updatedString = firstHalf + ' <span>' + secondHalf + '<span>';
  return `
  <h3 class="categories-title">${updatedString}</h3>
  <ul class='list-books'>${await makeListBook(data)}</ul>`;
}

async function makeListBook(data) {
  return data.map(makeMarcup).join('');
}

function makeMarcup({ author, book_image, title, description, _id }) {
  return `<li class="category-item books-item-about" id=${_id}>
    <div class="book-wrap" data-id="${_id}">
    <img class="book-img" src="${book_image}"  alt="${description}" data-id="${_id}"/>
        <p class="book_cover" data-id="${_id}">QUICK VIEW</p>
    </div >
    <div class="book-info">
    <p class="info-title">${title}</p>
    <p class="info-author">${author}</p>
    </div>
    </li>`;
}
