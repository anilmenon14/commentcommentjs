
//window.onload = alert('Page loaded')

const themeMap = {
  dark: "light",
  light: "solar",
  solar: "dark"
};

// retrieve theme user prefers or default to 'light' mode
const theme = localStorage.getItem('commentcommentjstheme')
|| (tmp = Object.keys(themeMap)[0],localStorage.setItem('theme', tmp), tmp);
const bodyClass = document.body.classList;
bodyClass.add(theme);

function toggleTheme() {
  const current = localStorage.getItem('commentcommentjstheme');
  const next = themeMap[current];

  bodyClass.replace(current, next);
  localStorage.setItem('commentcommentjstheme', next);
}

document.getElementById('themeButton').onclick = toggleTheme;
