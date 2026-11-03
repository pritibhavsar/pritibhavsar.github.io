/* ========  themeSwitcher start ========= */
document.addEventListener('DOMContentLoaded', () => {
  // themeSwitcher
  const themeSwitcher = document.getElementById('themeSwitcher');

  const userTheme = localStorage.getItem('theme');

  // Dark is the brand default; only an explicit user choice switches to light.
  const themeCheck = () => {
    document.documentElement.classList.toggle('dark', userTheme !== 'light');
  };

  // Manual Theme Switch
  const themeSwitch = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  // call theme switch on clicking buttons
  themeSwitcher?.addEventListener('click', () => {
    themeSwitch();
  });

  // invoke theme check on initial load
  themeCheck();
});
