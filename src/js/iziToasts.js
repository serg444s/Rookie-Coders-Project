import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// export const BOOKS =
//   'Sorry, there are no books matching your search query. Please try again!';

export function onError() {
  iziToast.error({
    message:
      'Sorry, there are no books matching your search query. Please try again!',
    position: 'topRight',
  });
}
