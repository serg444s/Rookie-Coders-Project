import { makeListOfBooks } from './makeListOfBooks';

export async function murkup(data) {
  return await Promise.all(
    data.map(async ({ list_name, books }) => {
      return ` 
    <div class="container-books"> 
    <h3 class="book-categoty-title">${list_name}</h3> 
    <ul class='list-books'>${await makeListOfBooks(books)}</ul>  
    <button class="book-button" data-js="${list_name}">See more</button> 
    </div> 
    `;
    })
  );
}