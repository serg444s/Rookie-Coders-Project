import { getCategoriesAPI } from './js/api-catigories-list.js';
import { onLoad } from './js/dark-mode.js';
import { startLoad } from './js/startLoad.js';

getCategoriesAPI();

document.addEventListener('DOMContentLoaded', onLoad);

startLoad();


