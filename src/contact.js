import img from "./img/Screenshot_20240123_165726.png"

function loadContact() {
    const content = document.querySelector("#content");

    const contactDiv = document.createElement('div');
    const tel = document.createElement('div');
    const adress = document.createElement('div');
    const map = document.createElement('img');

    contactDiv.classList.add ('contact-page');
    tel.classList.add('tel');
    adress.classList.add('adress');
    map.classList.add('map');

    tel.textContent = '123 456 789';
    adress.textContent = 'Fake Street 123';
    map.src = img;

    contactDiv.append(tel, adress, map);
    content.append(contactDiv);
};

export {loadContact}