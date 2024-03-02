
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
