export let booksIdArray = JSON.parse(localStorage.getItem('books')) || [];
export function addBookIdToStorage(bookId) {
  booksIdArray = JSON.parse(localStorage.getItem('books')) || [];
  if (!booksIdArray.includes(bookId)) {
    booksIdArray.push(bookId);
    localStorage.setItem('books', JSON.stringify(booksIdArray));
  }
}
