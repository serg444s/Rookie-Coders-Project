import { getCategoriesAPI } from './js/api-catigories-list.js';
import { onLoad } from './js/dark-mode.js';
import { startLoad } from './js/startLoad.js';

import { showModal } from './js/modal-window.js';

const bookList = document.querySelector('.top-categories-list');



getCategoriesAPI();

document.addEventListener('DOMContentLoaded', onLoad);
bookList.addEventListener('click', showModal);

startLoad();


