import * as basicLightbox from 'basiclightbox';
import { addBookIdToStorage } from './addBookIdToStorage';
import { removeBookIdFromStorage } from './removeBookIdFromStorage';
import { getBookById } from './getTopListBooks';
import { booksIdArray } from './addBookIdToStorage';
import amazon1x from '../img/shopping_list/amazon1x.png';
import amazon2x from '../img/shopping_list/amazon2x.png';
import openbook from '../img/shopping_list/openbook.png';

const bookList = document.querySelector('.top-categories-list');
bookList.addEventListener('click', showModal);

let bookId;
let instance;

export async function showModal(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') return;
  bookId = event.target.dataset.id;
  const book = await getBookById(bookId);
  let buttonText;
  if (!booksIdArray.includes(bookId)) {
    buttonText = 'ADD TO SHOPPING LIST';
  }
  if (booksIdArray.includes(bookId)) {
    buttonText = 'REMOVE FROM THE SHOPPING LIST';
  }
  const {
    book_image,
    title,
    author,
    description,
    amazon_product_url,
    buy_links,
  } = book;
  instance = basicLightbox.create(
    `<div class="modal">
        <button type="button" class="modal-icon">
        <svg class="modal-icon-closed" width="24" height="24" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
  <path d="M21 7L7 21M7 7L21 21" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
</svg>
        </button>
        <div class="modal-content">
        <img class="modal-img" src="${book_image}"/>
        <div class="modal-content-text">
        <h3 class="modal-title">${title}</h3>
        <p class="modal-author">${author}</p> 
        <p class="modal-text">${description}</p>
        <div class="modal-link-icons">
            <a target="_blank" href="${amazon_product_url}">
            <img class="modal-link-amazon" srcset="${amazon1x} 1x,${amazon2x} 2x" src="${amazon1x}" alt="Amazon Shop" />
            </a>
            <a target="_blank" href="${
              buy_links.find(buyLink => buyLink.name === 'Apple Books').url
            }">
            <img class="modal-link-applebook" src="${openbook}" alt="Open book" />
            </a>
        </div>
        </div>
        </div>
        <button class="modal-btn" type="button" data-action="add">${buttonText}</button>
        <p class="modal-congrat-text"></p>
    </div>`,
    {
      onShow: instance => {
        document.addEventListener('keydown', onImageKeydown);

        instance.element().querySelector('.modal-icon').onclick =
          instance.close;

        document.querySelector('body').style.overflow = 'hidden';

        instance
          .element()
          .querySelector('.modal-btn')
          .addEventListener('click', changeBookText);

        if (
          instance.element().querySelector('.modal-btn').textContent ===
          'REMOVE FROM THE SHOPPING LIST'
        ) {
          instance.element().querySelector('.modal-btn').onclick =
            removeBookIdFromStorage;
        }
      },

      onClose: () => {
        document.removeEventListener('keydown', onImageKeydown);

        document.querySelector('body').style.overflow = 'auto';

        instance
          .element()
          .querySelector('.modal-btn')
          .removeEventListener('click', changeBookText);
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

function changeBookText() {
  if (
    instance.element().querySelector('.modal-btn').textContent ===
    'ADD TO SHOPPING LIST'
  ) {
    instance.element().querySelector('.modal-btn').onclick = instance
      .element()
      .querySelector('.modal-btn').textContent =
      'REMOVE FROM THE SHOPPING LIST';
    instance.element().querySelector('.modal-congrat-text').textContent =
      'Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".';
    addBookIdToStorage(bookId);
  } else {
    instance.element().querySelector('.modal-btn').onclick = instance
      .element()
      .querySelector('.modal-btn').textContent = 'ADD TO SHOPPING LIST';

    instance.element().querySelector('.modal-congrat-text').textContent = '';

    removeBookIdFromStorage(bookId);
  }
}
