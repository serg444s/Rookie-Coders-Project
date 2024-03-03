import axios from 'axios';
import { onError } from './iziToasts';
import { murkup } from './murkup';

export async function startLoad() {
  const categories = document.querySelector('.top-categories-list');
  try {
    const resp = await axios.get(
      'https://books-backend.p.goit.global/books/top-books'
    );
    categories.insertAdjacentHTML(
      'afterbegin',
      '<h2 class="categories-title">Best Sellers<span> Books</span></h2>'
    );
    const markupData = await murkup(resp.data);
    categories.insertAdjacentHTML('beforeend', markupData);
    return resp.data;
  } catch (error) {
    console.log(error.message);
    onError();
  }
}
