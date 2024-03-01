import { getCategoriesAPI } from './js/api-catigories-list.js';
import { onLoad } from './js/dark-mode.js';
getCategoriesAPI();

document.addEventListener('DOMContentLoaded', onLoad);
