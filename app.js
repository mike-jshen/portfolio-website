//this is the mobile menu effect that enables the menu to slide down
//upon clicking it
// i dont understand why i cant just write this in a script
const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});
