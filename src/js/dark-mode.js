// const btn = document.querySelector('.switch_input');
// const localStorageKey = 'dark-mode';

// btn.addEventListener('click', onBtnClick);

// function onBtnClick() {
//   const body = document.body;
//   const isDarkMode = localStorage.getItem(localStorageKey) === 'true';
//   body.classList.toggle('dark-mode', !isDarkMode);
//   localStorage.setItem(localStorageKey, !isDarkMode);
//   console.log(localStorage.getItem(localStorageKey));
// }

// export function onLoad() {
//   const body = document.body;
//   body.classList.toggle(
//     'dark-mode',
//     localStorage.getItem(localStorageKey) === 'true'
//   );
// }
//==============================================
export function onLoad() {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark-mode') {
    document.querySelector('html').classList.add('dark-mode');
    document.querySelector('.switch_input').checked = true;
  } else {
    document.querySelector('html').classList.remove('dark-mode');
    document.querySelector('.switch_input').checked = false;
  }
}

window.addEventListener('load', () => {
  const darkModeMatchMedia = window.matchMedia(
    '(prefers-color-scheme: dark-mode)'
  );
  const isDarkMode = darkModeMatchMedia.matches ? 'dark-mode' : 'light';
  localStorage.theme = localStorage.theme || isDarkMode;
  onLoad();

  const btnEL = document.querySelector('.switch_input');
  btnEL.addEventListener('change', event => {
    if (event.target.checked) {
      localStorage.setItem('theme', 'dark-mode');
      onLoad();
    } else {
      localStorage.setItem('theme', 'light');
      onLoad();
    }
  });

  darkModeMatchMedia.addEventListener('change', event => {
    const newTheme = event.matches ? 'dark-mode' : 'light';
    localStorage.theme = newTheme;
    onLoad();
  });
});
