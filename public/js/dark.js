function toggleDarkMode() {
    var body = document.body;
    var isDarkMode = !body.classList.contains('dark');

    body.classList.toggle('dark', isDarkMode);
    document.querySelectorAll('*').forEach(function(element) {
        element.classList.toggle('dark', isDarkMode);
    });

    var button = document.getElementById('darkModeButton');

    if (isDarkMode) {
        button.innerHTML = '<i class="fa-solid fa-moon"></i>';
    } else {
        button.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }

    localStorage.setItem('themePreference', isDarkMode ? 'dark' : 'light');
}

document.getElementById('darkModeButton').addEventListener('click', function() {
    toggleDarkMode();
});

function applyThemeFromStorage() {
    var themePreference = localStorage.getItem('themePreference');
    var isDarkMode = themePreference === 'dark';
    var body = document.body;

    body.classList.toggle('dark', isDarkMode);
    document.querySelectorAll('*').forEach(function(element) {
        element.classList.toggle('dark', isDarkMode);
    });

    var button = document.getElementById('darkModeButton');

    if (isDarkMode) {
        button.innerHTML = '<i class="fa-solid fa-moon"></i>';
    } else {
        button.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }
}

applyThemeFromStorage();
