function addBooks() {
  //якщо це для отримання то краще назвати getBooks, в функцію addBooks треба зробити додавання нових книг
  //функція призначена для отримання списку збережених книг з локального сховища
  const savedInShopList = localStorage.getItem('ключ сховища'); // функція отримує доступ до даних збережених в локальному сховищі браузера за ключем мутод getitem
  if (savedInShopList) {
    return JSON.parse(savedInShopList); // він інтерпретується як JSON рядок і перетворюється у відповідний об'єкт за допомогою JSON.parse(savedBooks).
  }
  return []; //якщо немає ніц або нал або андеф то поверне пустий рядок
}

//в функції що іде далі, не впеанена в іконках
// і може бути один зайвий ДІВ вкінці))

function createBookCard(book) {
  const { book_image, title, list_name, description, author, buy_links, _id } =
    book; //деструктуризуємо .src/img/icons.svg#icon-flash-hero
  return `<div class="book-list">
<img class="book-card-img" src="${book_image}" alt="${title}" />
<div class="shop-card-info">
<div class="shop-card-hero">
<div class="shop-list-title-name">
<h3 class="shop-list-title">${title}<h3>
<p class="shop-list-list-name>${list_name}"></p>
</div>
<button class="remove-shop-list-book" data-bookid="${_id}">
<svg class="icon-basket-shop-list" width="28" height="25" data-bookid="${_id}">
 <use data-name="icon-basket-shop" href="../img/symbol-defs.svg#icon-basket"></use>
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
    <svg class="open-book-icon" width="28" height="27" data-bookid="${_id}">
   <use data-name="icon-open-book" href="../img/symbol-defs.svg#icon-image-1"></use>
   </svg>
  </a>
</div>
</div>
</div>
</div>`;
}

function renderBooks() {
  const savedBooks = addBooks(); // Отримуємо збережені книги з локального сховища
  const booksContainer = document.querySelector('.js-books-container'); // Отримуємо контейнер, в який будемо вставляти книги
  const emptyListImg = document.querySelector('.shopping-list-div');

  if (savedBooks.length === 0) {
    emptyListImg.style.display = 'block';
    booksContainer.innerHTML = '';
  } else {
    const booksMarkup = savedBooks.map(book => addBooks(book)).join('');
    booksContainer.innerHTML = booksMarkup;
    emptyListImg.style.display = 'none';
  }
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

document.addEventListener('DOMContentLoaded', renderBooks);

document.addEventListener('click', removeBook);
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
