import axios from 'axios';

export async function getTopListBooks() {
  const BASE_URL = 'https://books-backend.p.goit.global/books/';
  const END_POINT = 'top-books';
  const url = `${BASE_URL}${END_POINT}`;
  const resp = await axios.get(url);
  return resp.data;
}

export async function fetchBookById(bookId) {
  const URL_ID = `https://books-backend.p.goit.global/books/${bookId}`;
  const response = await axios.get(URL_ID);
  const bookData = response.data;
  return bookData;
}
