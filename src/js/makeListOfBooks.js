export async function makeListOfBooks(data) {
  return data
    .map(({ author, book_image, title, description, _id }) => {
      return `<li class="books-item-about" id=${_id} >
    <div class="book-wrap">
    <img class="book-img" src="${book_image}"  alt="${description}"/>
    </div>
    <div class="book-info">
    <p class="info-title">${title}</p>
    <p class="info-author">${author}</p>
    </div>
    </li>`;
    })
    .join("");
}
