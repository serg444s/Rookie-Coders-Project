export async function makeListOfBooks(data) {
  return data
    .map(({ author, book_image, title, description, _id}) => {
      return `<li class="books-item-about" >  
    <div class="book-wrap"> 
    <img class="book-img" src="${book_image}" data-id="${_id}"  alt="${description}" /> 
    </div> 
    <div class="book-info">  
    <p class="info-title">${title}</p>  
    <p class="info-author">${author}</p>  
    </div>  
    </li>`;
    })
    .join('');
}
