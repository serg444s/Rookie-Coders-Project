import axios from 'axios';
//функція Анатолія для отримання книги за id (поки тут, але потім її треба буде просто імпортувати)
export async function getBookById(bookId) {
  const resp = await axios.get(
    `https://books-backend.p.goit.global/books/${bookId}`
  );
  return resp.data;
}

//функція отримує масив id збережених у сховищі і повертає масив промісів на книги
function addBooks() {
  return new Promise((resolve, reject) => {
    const savedInShopList = localStorage.getItem('books');

    if (savedInShopList) {
      const booksIdArray = JSON.parse(savedInShopList);
      const promises = [];

      booksIdArray.forEach(bookId => {
        const promise = getBookById(bookId);
        promises.push(promise);
      });

      Promise.all(promises)
        .then(books => {
          resolve(books);
        })
        .catch(error => {
          reject(error);
        });
    } else {
      resolve([]);
    }
  });
}

//функція повертає розмітку однієї картки
function createBookCard(book) {
  const { book_image, title, list_name, description, author, buy_links, _id } =
    book; //деструктуризуємо
  return `<div class="book-list">
<img class="book-card-img" src="${book_image}" alt="${title}" />
<div class="shop-card-info">
<div class="shop-card-hero">
<div class="shop-list-title-name">
<h3 class="shop-list-title">${title}<h3>
<p class="shop-list-list-name>${list_name}"></p>
</div>
<button class="remove-shop-list-book" data-bookid="${_id}">
<svg class="icon-basket-shop-list" width="28" height="26" data-bookid="${_id}">
 <use data-name="icon-removebook" href="../img/symbol-defs.svg#icon-removebook"></use>
</svg>
</button>
</div>
<p class="shop-list-description">${description}<p>
<div class="shop-list-downpart">
<p class="shop-list-author"> Author: ${author}</p>
<div class="shop-list-links">
<a class="amazon-link" target="_blank" href="${
    buy_links.find(buyLink => buyLink.name === 'Amazon').url
  }">
<img 
class="amazon-img"
srcset="../img/shopping_list/amazon1x.png 1x,
../img/shopping_list/amazon2x.png 2x"
src="../img/shopping_list/amazon1x.png"
alt="Amazon Shop"
/>
</a>
<a class="openbooks-link" target="_blank" href="${
    buy_links.find(buyLink => buyLink.name === 'Apple Books').url
  }">
     <img 
  class="open-book-icon"
  src="../img/shopping_list/openbook.png"
  alt="Open book"
  />
  </a>
</div>
</div>
</div>
</div>`;
}

function renderBooks() {
  const booksContainer = document.querySelector('.js-books-container');
  const emptyListImg = document.querySelector('.shopping-list-div');

  addBooks()
    .then(result => {
      const savedBooks = result;
      if (savedBooks.length === 0) {
        //Цей блок перевіряє довжину масиву savedBooks. Якщо він дорівнює 0, це означає, що список книг порожній, і зображення з повідомленням про порожній список відображається, а контейнер книг очищається (booksContainer.innerHTML = '';). У протилежному випадку, якщо в savedBooks є книги, відбувається наступне:
        emptyListImg.style.display = 'block';
        booksContainer.innerHTML = '';
      } else {
        const booksMarkup = savedBooks
          .map(book => createBookCard(book))
          .join('');
        booksContainer.innerHTML = booksMarkup;
        //закоментувала, бо з цим чомусь не працює, треба розбиратися
        // emptyListImg.style.display = 'none';
      }
    })
    .catch(error => {
      console.error(error); // Обробка помилок
    });
}

//функція видаляє книгу, тут треба ще додати виклик функції removeBookIdFromStorage і передати їй id книги, яку треба видалити з local storage
function removeBook(event) {
  if (
    event.target.classList.contains('remove-shop-list-book') ||
    event.target.classList.contains('icon-basket-shop-list') ||
    event.target.dataset.name === 'remove-shop-list-book'
  ) {
    const bookId = event.target.getAttribute('data-bookid');
    removeBookFromList(bookId);
  }
}

// document.addEventListener('DOMContentLoaded', renderBooks);

// document.addEventListener('DOMContentLoaded', renderBooks); //коли веб-сторінка буде повністю завантажена, функція renderBooks буде викликана автоматично. Це часто використовується для початкового відображення даних на сторінці, коли всі елементи DOM вже доступні для маніпуляції.

//поки закоментувала видалення книжок
// document.addEventListener('click', removeBook);

// Викликаємо функцію renderBooks, щоб вона відобразила книги, які збережені у локальному сховищі, при завантаженні сторінки
renderBooks();

////книги в localStorage - тимчасова кнопка додавання книжок
const addButton = document.querySelector('.add-book');

addButton.addEventListener('click', e => {
  const booksIdArray = [
    '643282b1e85766588626a080',
    '643282b1e85766588626a0ba',
    '643282b1e85766588626a0dc',
    '643282b2e85766588626a0fc',
    '643282b2e85766588626a118',
    '643282b1e85766588626a085',
    '643282b1e85766588626a0b2',
  ];
  localStorage.setItem('books', JSON.stringify(booksIdArray));
});
