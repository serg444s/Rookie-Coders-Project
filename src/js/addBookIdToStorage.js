export function addBookIdToStorage(bookId) {
  const booksIdArray = JSON.parse(localStorage.getItem('books')) || [];
  booksIdArray.push(bookId);
  localStorage.setItem('books', JSON.stringify(booksIdArray));
}
