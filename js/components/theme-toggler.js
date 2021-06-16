let theme = localStorage.getItem("darkMode");
const body = document.querySelector('body');
const themeToggle = document.querySelector("label");


const toggleDarkMode = () => {
  body.classList.toggle('bg-dark');
};

themeToggle.addEventListener("click", () => {
  theme = localStorage.getItem("darkMode");

  if (theme !== "dark") {
    toggleDarkMode();
    theme = localStorage.setItem("darkMode", "dark");
    console.log(theme);
  } else {
    toggleDarkMode();
    theme = localStorage.setItem('darkMode', null);
    console.log(theme);
  }
});

// Check dark mode is on or off on page reload
if(theme === 'dark') {
  toggleDarkMode();
};