const btn = document.querySelector('.btn');
const localStorageKey = 'darkmode';

btn.addEventListener('click', onBtnClick);

function onBtnClick() {
  const body = document.body;
  const isDarkMode = localStorage.getItem(localStorageKey) === 'true';
  body.classList.toggle('dark-mode', !isDarkMode);
  localStorage.setItem(localStorageKey, !isDarkMode);
  console.log(localStorage.getItem(localStorageKey));
}

export function onLoad() {
  const body = document.body;
  body.classList.toggle(
    'dark-mode',
    localStorage.getItem(localStorageKey) === 'true'
  );
}

