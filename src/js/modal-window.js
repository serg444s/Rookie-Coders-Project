import * as basicLightbox from 'basiclightbox';
import { addBookIdToStorage } from './addBookIdToStorage';
import { removeBookIdFromStorage } from './removeBookIdFromStorage';

const bookList = document.querySelector('.top-categories-list');
const modalIcon = document.querySelector('.modal-icon');
const backdrop = document.querySelector('.backdrop');
const modalBtn = document.querySelector('.modal-btn');
const modalCongratText = document.querySelector('.modal-congrat-text');

bookList.addEventListener('click', showModal);
modalBtn.addEventListener('click', addToShoppingList);

let instance;
export function showModal(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") return;
    const liBook = event.target.closest('li');
    const id = +liBook.dataset.id;
    const book = bookList.find(el => el.id === id);
    const { book_image, title, author, description, buy_links: { url, name }, } = book;
    instance = basicLightbox.create(`
    <div class="modal">
    <button type="button" class="modal-icon">
    <svg class="modal-icon-closed"><use href="../img/symbol-defs.svg#icon-closed"></use></svg>
    </button>
        <img src="${book_image}" width="330" height="485"/>
        <h3>${title}</h3>
        <p>${author}</p>
        <p>${description}</p>
        <ul>
        <li><a href="${buy_links[url]}">${buy_links[name]}</a></li>
        <button class="modal-btn" type="button">ADD TO SHOPPING LIST</button>
        <p class="modal-congrat-text"></p>
    </div>`,
{
    onShow: () => {
      document.addEventListener('keydown', onImageKeydown);
    },
    onClose: () => {
      document.removeEventListener('keydown', onImageKeydown);
      modalIcon.addEventListener('click', onModalIconClick);
      backdrop.addEventListener('click', onBackdropClick);
    },
},
);
instance.show();
}

  function onImageKeydown(event) {
    event.preventDefault();
    if (event.code === "Escape") {
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
  modalBtn.textContent = 'REMOVE FROM THE SHOPPING LIST';
  modalCongratText.textContent = 'Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".';
  addBookIdToStorage();
  modalBtn.addEventListener('click', () => {
  removeBookIdFromStorage();
  });
}