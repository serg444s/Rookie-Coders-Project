import axios from 'axios';
import { onError } from './iziToasts';
import { murkup } from './murkup';

fetchOneCategori(category);
async function fetchOneCategori(category) {
  const categories = document.querySelector('.categories');
  categories.innerHTML = '';
  try {
    const response = await axios.get(
      `https://books-backend.p.goit.global/books/category?category=${category}`
    ).data;
    categories.insertAdjacentHTML('beforeend', oneCategoryList(response));
  } catch (error) {
    console.log(error.message);
    onError();
  }
}
