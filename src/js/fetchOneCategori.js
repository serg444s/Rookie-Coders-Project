import axios from 'axios';
import { onError } from './iziToasts';

// для перевірки розкоментуй виклик фукнції
// fetchOneCategori('Advice How-To and Miscellaneous');

export async function fetchOneCategori(category) {
  const categories = document.querySelector('.top-categories-list');
  console.log(categories);
  categories.innerHTML = '';
  try {
    const resp = await axios.get(
      `https://books-backend.p.goit.global/books/category?category=${category}`
    );
    console.log(resp);
    const data = resp.data;

    categories.insertAdjacentHTML(
      'afterbegin',
      await makeCategoryPage(category, data)
    );
  } catch (error) {
    console.log(error.message);
    onError();
  }
}

async function makeCategoryPage(category, data) {
  return ` 
  <h3 class="book-categoty-title">${category}</h3> 
  <ul class='list-books'>${await makeListBook(data)}</ul>`;
}

async function makeListBook(data) {
  console.log(data);
  return data.map(makeMarcup).join('');
}

function makeMarcup({ author, book_image, title, description, _id }) {
  return `<li class="category-item" id=${_id}>  
    <div class="book-wrap"> 
    <img class="book-img" src="${book_image}"  alt="${description}"/> 
    </div > 
    <div class="book-info">  
    <p class="info-title">${title}</p>  
    <p class="info-author">${author}</p>  
    </div>  
    </li>`;
}
