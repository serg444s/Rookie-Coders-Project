export async function makeListOfBooks(data) {
  return data
    .map(({ author, book_image, title, description, _id }) => {
      return `<li class="books-item-about display-book" >
    <div class="book-wrap" data-id="${_id}">
    <img class="book-img" src="${book_image}" data-id="${_id}"  alt="${description}" />
    <p class="book_cover" data-id="${_id}">QUICK VIEW</p>
    </div>
    <div class="book-info">
    <p class="info-title">${title}</p>
    <p class="info-author">${author}</p>
    </div>
    </li>`;
    })
    .join('');
}
