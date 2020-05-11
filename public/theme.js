//window.onload = alert('Page loaded')

const themeMap = {
  light: { switchTo: "dark", switchText: "Night Mode" ,switchId: "night-mode-icon"},
  dark: { switchTo: "light", switchText: "Day Mode" ,switchId: "day-mode-icon"}
};

//switch icons by applying id with display:block and display:none respectively
function toggleIcon(current,notCurrent) {
  const icon1 = document.getElementsByClassName(themeMap[notCurrent].switchId)[0];
  icon1.id = "display-theme-icon";
  const icon2= document.getElementsByClassName(themeMap[current].switchId)[0];
  icon2.id = "nodisplay-theme-icon";
}

// set up theme on loading page
const theme =
  localStorage.getItem("commentcommentjstheme") === "undefined" ||
  localStorage.getItem("commentcommentjstheme") == undefined
    ? Object.keys(themeMap)[0]
    : localStorage.getItem("commentcommentjstheme");
localStorage.setItem("commentcommentjstheme", theme);
const bodyClass = document.body.classList;
bodyClass.add(theme);
toggleIcon(theme,themeMap[theme].switchTo);



const themeText = document.getElementById("theme-text");



function toggleTheme() {
  const previous = localStorage.getItem("commentcommentjstheme");
  const next = themeMap[previous].switchTo;
// Switch color scheme
  bodyClass.replace(previous, next);
  localStorage.setItem("commentcommentjstheme", next);
//Switch text and icon of theme button
themeText.innerHTML = themeMap[previous].switchText;
toggleIcon(next,previous);
}

document.getElementById("themeButton").onclick = toggleTheme;
