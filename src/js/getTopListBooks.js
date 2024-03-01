import axios from 'axios';

export async function getTopListBooks() {
  const BASE_URL = 'https://books-backend.p.goit.global/books/';
  const END_POINT = 'top-books';
  const url = `${BASE_URL}${END_POINT}`;
  const resp = await axios.get(url);
  console.log(resp);
  return resp.data;
}
console.log(getTopListBooks());
