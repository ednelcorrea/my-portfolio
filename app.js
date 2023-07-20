const navToggle_open = document.getElementById('mobileNav-open');
const navToggle_close = document.getElementById('mobileNav-close');
const mobileNav = document.querySelector('.nav-mobile-link');

navToggle_open.onclick = function showNav(){
    mobileNav.style.transform = 'translateX(0)'
}
navToggle_close.onclick = function showNav(){
    mobileNav.style.transform = 'translateX(100%)'
}