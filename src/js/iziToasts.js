import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

export const gallery = document.querySelector('.gallery');
export const userInput = document.querySelector('input');

export const BOOKS =
  'Sorry, there are no images matching your search query. Please try again!';

export function onError(message) {
  iziToast.error({
    message: message,
    position: 'topRight',
  });
}
