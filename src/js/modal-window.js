import * as basicLightbox from 'basiclightbox';
import { addBookIdToStorage } from './addBookIdToStorage';
import { removeBookIdFromStorage } from './removeBookIdFromStorage';
// import { fetchBookById } from './getTopListBooks';
import { getBookById } from './getTopListBooks';

const bookList = document.querySelector('.top-categories-list');
const modalIcon = document.querySelector('.modal-icon');
const backdrop = document.querySelector('.backdrop');
const modalBtn = document.querySelector('.modal-btn');
const modalCongratText = document.querySelector('.modal-congrat-text');

bookList.addEventListener('click', showModal);

let instance;
export async function showModal(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') return;
  const bookId = event.target.dataset.id;
  const book = await getBookById(bookId);
  const { book_image, title, author, description, amazon_product_url } = book;
  instance = basicLightbox.create(
    `<div class="modal">
        <button type="button" class="modal-icon">
        <svg class="modal-icon-closed" width="18" height="18"><use href="../img/symbol-defs.svg#icon-closed"></use></svg>
        </button>
        <div class="modal-content">
        <img class="modal-img" src="${book_image}" width="330" height="485"/>
        <div class="modal-content-text">
        <h3 class="modal-title">${title}</h3>
        <p class="modal-author">${author}</p> 
        <p class="modal-text">${description}</p>
        <ul><li class="modal-link"><a href="${amazon_product_url}">Amazon
        </a></li></ul>
        </div>
        </div>
        <button class="modal-btn" type="button">ADD TO SHOPPING LIST</button>
        <p class="modal-congrat-text"></p>
    </div>`,
    {
      onShow: () => {
        document.addEventListener('keydown', onImageKeydown);
        // modalBtn.addEventListener('click', addToShoppingList);
      },
      onClose: () => {
        document.removeEventListener('keydown', onImageKeydown);
        // modalBtn.removeEventListener('click', addToShoppingList);
        // modalIcon.addEventListener('click', onModalIconClick);
        // backdrop.addEventListener('click', onBackdropClick);
      },
    }
  );
  instance.show();
}

function onImageKeydown(event) {
  event.preventDefault();
  if (event.code === 'Escape') {
    instance.close();
  }
}

function onModalIconClick(event) {
  event.preventDefault();
  instance.close();
}

function onBackdropClick(event) {
  event.preventDefault();
  instance.close();
}

function addToShoppingList(event) {
  event.preventDefault();
  addBookIdToStorage(bookId);
  modalBtn.textContent = 'REMOVE FROM THE SHOPPING LIST';
  modalCongratText.textContent =
    'Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".';
  if (modalBtn.textContent === 'REMOVE FROM THE SHOPPING LIST') {
    modalBtn.addEventListener('click', () => {
      removeBookIdFromStorage(bookIdToRemove);
    });
  }
}


/* <li class="modal-link"><a href="${buy_links[url]}">${buy_links[name]}</a></li> */
