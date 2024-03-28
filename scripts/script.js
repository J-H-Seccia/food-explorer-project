const nav = document.getElementById ('navigation');
const hamMenu = document.getElementById('hamburger-menu');

hamMenu.addEventListener('click', openMenu);

function openMenu(){
    nav.classList.toggle('show');
    nav.classList.add('activated');
};

const mqTablet = window.matchMedia('(min-width: 500px)');

mqTablet.addListener(removeDropDown);

function removeDropDown(e){

    if(e.matches){
        nav.classList.remove('show');
        nav.classList.remove('activated');
    }
}