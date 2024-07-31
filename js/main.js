const clickButton = document.querySelector('.menu-icon');
const header = document.querySelector('header');

clickButton.addEventListener('click', () => {
    header.classList.toggle('show-nav');
});
