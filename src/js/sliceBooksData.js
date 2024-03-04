import { makeListOfBooks } from './makeListOfBooks';

export async function sliceBooks(arr) {
  if (checkScreen() < 768) {
    return makeListOfBooks(arr.slice(0, 1));
  } else if (checkScreen() < 1439) {
    return makeListOfBooks(await arr.slice(0, 3));
  } else {
    return makeListOfBooks(arr);
  }
}

function checkScreen() {
  return window.innerWidth;
}
