import axios from 'axios';
import { onError } from './iziToasts';
import { murkupCategoryList } from './murkupCategoryList';
import { murkup } from './murkup';

export default async function startLoad() {
  const categories = document.querySelector('.top-categories-list');
  // try {
  //   const response = await axios.get('https://books-backend.p.goit.global/books/category-list');
  //   categories.insertAdjacentHTML('beforeend',  murkupCategoryList(response));
  // } catch (error) {
  //   console.log(error.message);
  //   onError();
  // } Ось цей try...catch не потрібний
  try {
    const resp = await axios.get('https://books-backend.p.goit.global/books/top-books');
    categories.insertAdjacentHTML('afterbegin','<h2 class="categories-title">Best Sellers<span> Books</span></h2>');
    const markupData = await murkup(resp.data);
    categories.insertAdjacentHTML('beforeend', markupData)
    return resp.data;
  } catch (error) {
    console.log(error.message);
    onError();
  }
}
