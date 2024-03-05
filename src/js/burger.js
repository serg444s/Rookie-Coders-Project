// import { preview } from "vite";

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

export function handleNavigationClick(event) {
  const link = localStorage.getItem('link');
  event.preventDefault();
  if (link === 'active') {
    document.querySelector('nav a').classList.add('active');
    document.getElementById('homeLink').checked = true;
  } else {
    document.querySelector('nav a').classList.add('active');
    document.getElementById('homeLink').checked = false;
  }
  //   const allLinks = document.querySelectorAll('nav a');
  //   allLinks.forEach(link => link.classList.remove('active'));
  //   event.target.classList.add('active');
  // }

  // export function onLoad() {
  //   const theme = localStorage.getItem('theme');
  //   if (theme === 'dark-mode') {
  //     document.querySelector('html').classList.add('dark-mode');
  //     document.querySelector('.switch_input').checked = true;
  //   } else {
  //     document.querySelector('html').classList.remove('dark-mode');
  //     document.querySelector('.switch_input').checked = false;
}
