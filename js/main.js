'use strict';

var buttonOpen = document.querySelector('.nav-trigger');
var buttonClose = document.querySelector('.nav-close');
var activeNav = document.querySelector('.nav');

function openMenu() {
	activeNav.classList.add('show');
}

function closeMenu() {
	activeNav.classList.remove('show');
}

buttonOpen.addEventListener('click', openMenu);
buttonClose.addEventListener('click', closeMenu);
