"use strict"

document.addEventListener('click', documentClick);

function documentClick(e) {
    const tardetItem = e.target;

    if (tardetItem.closest('.header__icon')){
        document.documentElement.classList.toggle('menu-open');
    }
}