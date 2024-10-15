const btnDarkMode = document.querySelector('.dark-mode-btn');

// Checking darkMode on the system level

if (window.matchMedia && window.matchMedia('prefers-color-scheme: dark').matches) {
    btnDarkMode.classList.add('dark-mode-btn--active');
    document.body.classList.add('dark');
}

// Checking darkMode in the localStorage

if (localStorage.getItem('darkMode') === 'dark') {
    btnDarkMode.classList.add('dark--mode-btn--active');
    document.body.classList.add('dark');
} else if (localStorage.getItem("darkMode") === "light") {
    btnDarkMode.classList.remove("dark-mode-btn--active");
    document.body.classList.remove("dark");
}

// Turning on darkMode 

btnDarkMode.onclick = function () {
    btnDarkMode.classList.toggle("dark-mode-btn--active");
    const isDark = document.body.classList.toggle("dark");

    if (isDark) {
        localStorage.setItem("darkMode", "dark");
    } else {
        localStorage.setItem("darkMode", "light");
    }
};



