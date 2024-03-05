const openModalBtn = document.querySelector('[data-action="open-modal"]');
const closeModalBtn = document.querySelector('[data-action="close-modal"]');
const body = document.querySelector('body');

export function onOpenModal() {
  document.body.classList.add('show-modal');
  closeModalBtn.style.display = 'flex';
  openModalBtn.style.display = 'none';
  body.style.overflow = 'hidden';
}

export function onCloseModal() {
  document.body.classList.remove('show-modal');
  closeModalBtn.style.display = 'none';
  openModalBtn.style.display = 'flex';
  body.style.overflow = 'auto';
}
