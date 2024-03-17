const nav = document.getElementById ('navigation');
const hamMenu = document.getElementById('hamburger-menu');

hamMenu.addEventListener('click', openMenu);

function openMenu(){
    nav.classList.toggle('show');
    nav.classList.add('activated');
};