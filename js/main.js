var buttonOpen = document.querySelector('.nav-trigger');
var buttonClose = document.querySelector('.nav-close');
var activeNav = document.querySelector('.nav');

function openMenu() {
	activeNav.classList.add('show');
}
buttonOpen.addEventListener('click', openMenu);

function closeMenu() {
	activeNav.classList.remove('show');
}
buttonClose.addEventListener('click', closeMenu);
