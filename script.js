let savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark'){
    document.body.classList.add('dark-theme');
}
const themeButton = document.getElementById('theme-toggle');
themeButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    const isDarkMode = document.body.classList.contains('dark-theme');
    console.log(typeof isDarkMode);
    if (isDarkMode) {
        localStorage.setItem('theme', 'dark');
        themeButton.textContent = 'Включить светлую тему';
    } else {
        localStorage.setItem('theme', 'light');
        themeButton.textContent = 'Включить темную тему';}
});
const appDiv = document.getElementById('app');
appDiv.textContent = 'Текущая дата и время: ' + new Date().toLocaleString('ru-RU');