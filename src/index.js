import {loadHome} from './home.js'
import {loadMenu} from './menu.js'
import {loadContact} from './contact.js';
import "./style.css";



const buttonHome = document.querySelector(".home-button");
const buttonMenu = document.querySelector(".menu-button");
const buttonContact = document.querySelector(".contact-button");

buttonHome.addEventListener('click', ()=> {
    resetContentDiv();
    loadHome();
});
buttonMenu.addEventListener('click', ()=> {
    resetContentDiv();
    loadMenu();
});
buttonContact.addEventListener('click', ()=> {
    resetContentDiv();
    loadContact();
});

function resetContentDiv() {
    const content = document.getElementById("content");
    let child = content.lastElementChild;
    while (child) {
        content.removeChild(child);
        child = content.lastElementChild;
    }
}

loadHome();




