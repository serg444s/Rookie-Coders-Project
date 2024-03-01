import * as basicLightbox from 'basiclightbox';
import { renderBooks } from './shop_list';

const books = document.querySelectorAll('.books-containe');
const modalIcon = document.querySelector('.modal-icon');
const backdrop = document.querySelector('.backdrop');
const modalBtn = document.querySelector('.modal-btn');
const modalCongratText = document.querySelector('.modal-congrat-text');

books.addEventListener('click', showModal);
modalBtn.addEventListener('click', addToShoppingList);

let instance;
export function showModal(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") return;
    const bookImage = event.target.dataset.source;
    instance = basicLightbox.create(`
    <div class="modal">
    <button type="button" class="modal-icon">
    <svg class="modal-icon-closed"><use href="../img/symbol-defs.svg#icon-closed"></use></svg>
    </button>
        <img src="${bookImage}"/>
        <h3>${title}</h3>
        <p>${author}</p>
        <p>${description}</p>
        <ul>
        <li><a href="${buy_links.url}">${buy_links.name}</a></li>
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
  )
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

instance.show()

function addToShoppingList(event) {
  event.preventDefault();
  modalBtn.textContent = 'REMOVE FROM THE SHOPPING LIST';
  modalCongratText.textContent = 'Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".';
  renderBooks();
  modalBtn.addEventListener('click', () => {
    event.currentTarget.remove();
  });
}