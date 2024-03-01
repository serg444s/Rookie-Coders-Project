export function removeBookIdFromStorage(bookIdToRemove) {
  const booksIdArray = JSON.parse(localStorage.getItem('books'));
  const indexToRemove = booksIdArray.findIndex(
    bookId => bookId === bookIdToRemove
  );

  if (indexToRemove !== -1) {
    booksIdArray.splice(indexToRemove, 1);
  }
  localStorage.setItem('books', JSON.stringify(booksIdArray));
}
