import * as basicLightbox from 'basiclightbox';
import { addBookIdToStorage } from './addBookIdToStorage';
import { removeBookIdFromStorage } from './removeBookIdFromStorage';
// import { fetchBookById } from './getTopListBooks';
import { getBookById } from './getTopListBooks';
import { booksIdArray } from './addBookIdToStorage';

const bookList = document.querySelector('.top-categories-list');
const modalBtn = document.querySelector('.modal-btn');
const modalCongratText = document.querySelector('.modal-congrat-text');
let bookId;
bookList.addEventListener('click', showModal);

let instance;
export async function showModal(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') return;
  bookId = event.target.dataset.id;
  const book = await getBookById(bookId);
  let buttonText;
  if (!booksIdArray.includes(bookId)) {
    buttonText = 'ADD TO SHOPPING LIST';
  } else {
    buttonText = 'REMOVE FROM THE SHOPPING LIST';
  }
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
        <ul><li class="modal-link-icons"><a class="modal-link" href="${amazon_product_url}" target="_blank"><img src="../img/shopping_list/amazon1x.png" alt="applebook" target="_blank" /></a>
        <img class="modal-link-img" src="../img/shopping_list/openbook.png" />
        </li></ul>
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

        instance.element().querySelector('.modal-btn').onclick =
          addBookIdToStorage(bookId);

        // instance.element().querySelector('.modal-btn').onclick = instance
        //   .element()
        //   .querySelector('.modal-btn').innerHTML = 'REMOVE Hello';

        instance
          .element()
          .querySelector('.modal-btn')
          .addEventListener('click', changeBookText);

        // instance
        //   .element()
        //   .querySelector('.modal-btn')
        //   .addEventListener('click', changeButtonText);

        // instance.element().querySelector('.modal-btn').onclick = instance
        //   .element()
        //   .querySelector('.modal-congrat-text').textContent =
        //   'Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".';

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
        // document.modalBtn.removeEventListener('click', addToShoppingList);
        // modalIcon.addEventListener('click', onModalIconClick);
      },
    }
    // document.modalBtn.addEventListener('click', addToShoppingList),
  );
  instance.show();
}

function onImageKeydown(event) {
  event.preventDefault();
  if (event.code === 'Escape') {
    instance.close();
  }
}

function onBackdropClick(event) {
  event.preventDefault();
  instance.close();
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
    // instance.element().querySelector('.modal-btn').dataset.action === 'remove';
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

// function changeButtonText() {
//   if (
//     instance.element().querySelector('.modal-btn').dataset.action === 'remove'
//   ) {
//     instance.element().querySelector('.modal-btn').onclick = instance
//       .element()
//       .querySelector('.modal-btn').textContent = 'ADD TO SHOPPING LIST';
//     instance.element().querySelector('.modal-btn').dataset.action === 'add';
//     console.log(instance.element().querySelector('.modal-btn').dataset.action);
//   }
// }

// function addToShoppingList(event) {
//   event.preventDefault();
//   // showModal(event);
//   addBookIdToStorage();
//   showModal.modalBtn.textContent = 'REMOVE FROM THE SHOPPING LIST';
//   showModal.modalCongratText.textContent =
//     'Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".';
//   if (modalBtn.textContent === 'REMOVE FROM THE SHOPPING LIST') {
//     modalBtn.addEventListener('click', () => {
//       removeBookIdFromStorage(bookIdToRemove);
//     });
//   }
// }
