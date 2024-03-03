import { getCategoriesAPI } from './js/api-catigories-list.js';
import { onLoad } from './js/dark-mode.js';
import { startLoad } from './js/startLoad.js';
import { fetchOneCategori } from './js/fetchOneCategori.js';
// import { charities } from './js/support';
import { showModal } from './js/modal-window.js';

const bookList = document.querySelector('.top-categories-list');

// fetchOneCategori('Advice How-To and Miscellaneous');

getCategoriesAPI();

document.addEventListener('DOMContentLoaded', onLoad);
bookList.addEventListener('click', showModal);

startLoad();
