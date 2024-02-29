import * as basicLightbox from 'basiclightbox';

// const books = document.querySelector(".books");
books.addEventListener("click", showModal);
let instance;
export function showModal(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') return;
    instance = basicLightbox.create(`
    <div class="modal">
    <svg><use href="../img/symbol-defs.svg#icon-closed"></use></svg>
        <img src=${book_image}/>
        <h2>${title}</h2>
        <p>${author}</p>
        <p>${description}</p>
        <ul>
        <li><a href=${url}>${name}</a></li>
        <button type="button">ADD TO SHOPPING LIST</button>
    </div>`,
{
    onShow: () => {
      document.addEventListener('keydown', onImageKeydown);
    },
    onClose: () => {
      document.removeEventListener('keydown', onImageKeydown);
    },
  },
  )
}

  function onImageKeydown(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }

instance.show()