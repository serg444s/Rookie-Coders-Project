import { loaderOn, loaderOff } from './loader';
import axios from 'axios';
import { onLoad } from '../js/dark-mode.js';
import amazon1x from '../img/shopping_list/amazon1x.png';
import amazon2x from '../img/shopping_list/amazon2x.png';
import openbook from '../img/shopping_list/openbook.png';
import trash from '../img/shopping_list/trash.png';
import Pagination from 'tui-pagination';
import { onError } from './iziToasts.js';

//функція Анатолія для отримання книги за id (поки тут, але потім її треба буде просто імпортувати)
async function getBookById(bookId) {
  const resp = await axios.get(
    `https://books-backend.p.goit.global/books/${bookId}`
  );
  return resp.data;
}

const booksContainer = document.querySelector('.js-books-container');
const emptyListImg = document.querySelector('.empty-shopping-list-main');
const shoppingListLoader = document.querySelector('#shopping-list-loader');
const tuiPagination = document.getElementById('pagination2');
let savedBooks; //масив книжок отриманих з бекенду
let itemsPerPage = calculateItemsPerPage(); //одразу перевіряємо розмір екрану і визначаємо кількість карток на сторінці

onLoad();
startFunction();
getAllBooks();

function startFunction() {
  booksContainer.innerHTML = '';
  emptyListImg.style.display = 'none';
  loaderOn(shoppingListLoader);
}

window.addEventListener('resize', () => {
  if (savedBooks.length !== 0) {
    itemsPerPage = calculateItemsPerPage();
    const pagination2 = new Pagination(tuiPagination, {
      totalItems: savedBooks.length,
      itemsPerPage: itemsPerPage,
      visiblePages: 3,
      centerAlign: true,
    });
    renderBooks(1);
  }
});

function waitForEvent(element, eventType) {
  return new Promise(function (resolve, reject) {
    function eventHandler(event) {
      // Після виконання події видаляємо обробник події
      element.removeEventListener(eventType, eventHandler);
      // Вирішуємо проміс з даними, які вас цікавлять
      resolve(event);
    }
    // Додаємо обробник події
    // element.addEventListener(eventType, eventHandler);
    element.addEventListener(eventType, event => {
      if (
        event.target.classList.contains('tui-page-btn') &&
        !event.target.classList.contains('tui-is-selected') &&
        !event.target.classList.contains('tui-is-disabled')
      ) {
        eventHandler();
      }
    });
  });
}

function calculateItemsPerPage() {
  const screenWidth = window.innerWidth;
  return screenWidth < 768 ? 4 : 3;
}

function getAllBooks() {
  addBooks()
    .then(result => {
      savedBooks = result;
      if (savedBooks.length === 0) {
        loaderOff(shoppingListLoader);
        emptyListImg.style.display = 'block';
        booksContainer.innerHTML = '';
        tuiPagination.innerHTML = '';
      } else {
        loaderOff(shoppingListLoader);

        const pagination2 = new Pagination(tuiPagination, {
          totalItems: savedBooks.length,
          itemsPerPage: itemsPerPage,
          visiblePages: 3,
          centerAlign: true,
        });
        renderBooks(1);
      }
    })
    .catch(() => {
      onError();
    });
}

function renderBooks(pageNumber) {
  const transitionalBooksArray = [...savedBooks];
  let booksOnPage = transitionalBooksArray.splice(
    itemsPerPage * (pageNumber - 1),
    itemsPerPage
  );
  const booksMarkup = booksOnPage.map(book => createBookCard(book)).join('');
  booksContainer.innerHTML = booksMarkup;
  emptyListImg.style.display = 'none';

  // Викликаємо функцію, що очікує подію 'click' і повертає проміс
  waitForEvent(tuiPagination, 'click').then(function (event) {
    // Цей код буде виконаний після того, як подія 'click' відбудеться
    renderBooks(parseInt(document.getElementsByTagName('strong')[0].innerHTML));
  });
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
<h3 class="shop-list-title">${title}</h3>
<p class="shop-list-list-name">${list_name}</p>
</div>
<button class="remove-shop-list-book" data-bookid="${_id}">
<img 
  class="icon-basket-shop-list"
  data-bookid="${_id}"
  src="${trash}"
  alt="Delete book"
  />
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
class="amazon-img  html.dark-mode & {}"
srcset="
${amazon1x} 1x,
${amazon2x} 2x
"
src="${amazon1x}"
alt="Amazon Shop"
/>
</a>
<a class="openbooks-link" target="_blank" href="${
    buy_links.find(buyLink => buyLink.name === 'Apple Books').url
  }">
     <img 
  class="open-book-icon"
  src="${openbook}"
  alt="Open book"
  />
  </a>
</div>
</div>
</div>
</div>`;
}

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

function removeBookFromList(bookId) {
  let savedInShopList = localStorage.getItem('books');

  if (savedInShopList) {
    savedInShopList = JSON.parse(savedInShopList);
    const indexToRemove = savedInShopList.indexOf(bookId);

    // Видаляємо книгу з масиву за її індексом
    if (indexToRemove !== -1) {
      savedInShopList.splice(indexToRemove, 1);
    }

    // Зберігаємо оновлений масив книг в localStorage
    localStorage.setItem('books', JSON.stringify(savedInShopList));

    // Оновлюємо список книг на сторінці
    getAllBooks();
  }
}

//поки закоментувала видалення книжок
document.addEventListener('click', removeBook);

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

// це щоб подивитися як працює перемикач для пагінації. його треба буде створювати при рендері і задавати відповідні значення
// const pagination2 = new Pagination(tuiPagination, {
//   totalItems: 25,
//   itemsPerPage: 3,
//   visiblePages: 5,
//   centerAlign: true,
// });
