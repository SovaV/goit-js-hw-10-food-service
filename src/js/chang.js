const checkBox = document.querySelector('#theme-switch-toggle');
const changeBodyTheme = document.querySelector('body');
console.log({ changeBodyTheme });

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

checkBox.addEventListener('change', onClickCheckDARK);

function onClickCheckDARK() {
  if (changeBodyTheme) {
    changeBodyTheme.className = Theme.DARK;
  } else {
    changeBodyTheme.className = Theme.LIGHT;
  }
}
