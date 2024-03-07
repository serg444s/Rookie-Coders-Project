import axios from 'axios';
import { onError } from './iziToasts';
import { murkup } from './murkup';
import { loaderOn } from './loader';
import { loaderOff } from './loader';

export const loadMain = document.querySelector('#modal-main');

export async function startLoad() {
  let congratulationData = sessionStorage.getItem('numberOfCongratulation');
  console.log(congratulationData);
  if (congratulationData < 1) {
    congratulation();
  }
  sessionStorage.setItem('numberOfCongratulation', 1);

  loaderOn(loadMain);
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
    loaderOff(loadMain);
    return resp.data;
  } catch (error) {
    console.log(error.message);
    onError();
  }
}
// document.addEventListener('DOMContentLoaded', congratulation);

export function congratulation() {
  const modal = document.getElementById('womanModal');
  /*const closeBtn = document.getElementsByClassName("close")[0];*/

  // Показати модальне вікно при завантаженні сторінки
  modal.style.display = 'block';

  // Функція для закриття модального вікна при кліку на "хрестик"
  function closeModal() {
    modal.style.display = 'none';
  }

  // Закрити модальне вікно при кліку на "хрестик"
  /*closeBtn.addEventListener("click", closeModal);*/

  // Зникання модального вікна через 3 секунди
  setTimeout(closeModal, 2500);
  // document.removeEventListener('DOMContentLoaded', congratulation);
}
