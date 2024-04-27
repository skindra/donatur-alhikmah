// toggle class active
const navbarNav = document.querySelector('.navbar-nav');
const hamburger = document.querySelector('#hamburger-menu');

hamburger.onclick = () => {
   navbarNav.classList.toggle('active');
}