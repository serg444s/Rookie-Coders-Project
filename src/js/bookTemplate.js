export function bookTemplate(book) {
  const { _id, book_image, title, author } = book;
  return `<li class="top-book" data-id=${_id}>
            <img class="book-image" src="${book_image}" alt="${title}" />
            <h3 class="book-name">${title}</h3>
            <p class="author-name">${author}</p>
          </li>`;
}

export function booksTemplate(books) {
  return books.map(bookTemplate).join('');
}

//<h1 class="books-top-title">
//       Best Sellers <span class="books-top-title-span">Books</span>
//     </h1>
//     <ul class="books-container"> ${book
//       .map(elements => {
//         return `
//       <li class="books-list">
//       <h3 class="books-list-title">${elements.list_name}</h3>
//         <div class="books-card-container">${elements.books
//           .map(book => {
//             return `
//             <a href="#" class="books-item-link" aria-label="books-item-link" rel="noopener noreferrer" data-id='${
//               book._id
//             }'>
//       <div class="books-card">
//               <img
//                 src="${book.book_image}"
//                 alt="${book.title}"
//                 class="books-card-title-img"
//                 width="180"
//                 height="256"
//       />
//       <div class="books__overlay">
//            <p class="books__overlay-text">quick view</p>
//               </div>
//              </div>
//               <div class="books__descr">
//                 <h3 class="books__card-title">${cutBookTitle(book.title)}</h3>
//                 <p class="books__card-author">${cutBookAuthor(book.author)}</p>
//               </div>
//            </a>
//        `;
//           })
//           .slice(0, amountRenderedBooks)
//           .join('')}
//         </div>
//         <button class="books__btn" type="button" data-id="${
//           elements.list_name
//         }">see more</button>
//       </li>
//       `;
//       })
//       .join('')}</ul>`;
// }

// function booksCardTemplate(data) {
//   return `
//     <ul class="books__container">

//             <div class="books__card">
//               <img
//                 src="${book.book_image}"
//                 alt="${book.title}"
//                 class="books__card-title-img"
//                 width="180"
//                 height="256"

//               />
//               <div class="books__overlay">
//                 <p class="books__overlay-text">quick view</p>
//               </div>
//              </div>
//               <div class="books__descr">
//                 <h3 class="books__card-title">${cutBookTitle(book.title)}</h3>
//                 <p class="books__card-author">${cutBookAuthor(book.author)}</p>
//               </div>
//            </a>
//        `;
//             })
//             .slice(0, amountRenderedBooks)
//             .join('')}
//         </div>
//         <button class="books__btn" type="button" data-id="${
//           elements.list_name
//         }">see more</button>
//       </li>
//       `;
//       })
//       .join('')}</ul>`;
// }

// export async function getTopBooks(TOP_BOOKS, numCardsToRender) {
//   const response = await axios.get(TOP_BOOKS);
//   const data = response.data;
//   const topBooks = data
//     .map(obj => {
//       return `<div class = "category-container"><h2 class="home-book-category">${obj.list_name}</h2>
//       <ul class="books-list js-book-list">
//               ${obj.books.slice(0, numCardsToRender).map(
//                 ({ title, book_image, author, _id }) => `<li class="book-item"  data_id=${_id}>
//                       <div class ="img-wrapper">
//                           <img class = "book-img" src="${book_image}" alt="Poster of ${title}" loading="lazy" />
//                           <a class = "overlay" href="http://"><span class = "text-overlay">QUICK VIEW</span></a>
//                       </div>
//                           <h3 class="book-name">${title}</h3>
//                           <p class="author-name">${author}</p></li>`
//               ).join('')}
//               </ul><button class="btn-see-more" type="button" data-id="${obj.list_name}">SEE MORE</button></div>`
//     })
//     .join('');

//   return topBooks;
