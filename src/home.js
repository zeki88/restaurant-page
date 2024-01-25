import img2 from "./img/pexels-photo-1267320.jpeg"
import img1 from "./img/restaurant.jpg"
import img3 from "./img/pexels-photo-958545.jpeg"

function loadHome() {
    const content = document.querySelector("#content");

    const homePage = document.createElement('div');
    const homeDiv1 = document.createElement('div');
    const homeDiv2 = document.createElement('div');
    const homeDiv3 = document.createElement('div');
    const textDiv1 = document.createElement('div');
    const restaurantImg1 = document.createElement('img');
    const textDiv2 = document.createElement('div');
    const restaurantImg2 = document.createElement('img');
    const textDiv3 = document.createElement('div');
    const restaurantImg3 = document.createElement('img');

    homePage.classList.add ('home-page');
    homeDiv1.classList.add('home-div');
    homeDiv2.classList.add('home-div');
    homeDiv3.classList.add('home-div');

    textDiv1.textContent = 'Come and discover the magic of [Restaurant Name].';
    textDiv1.classList.add('text');

    textDiv2.textContent = 'We are located at [address] and are eager to share delicious and memorable moments with you.';
    textDiv2.classList.add('text');

    textDiv3.textContent = 'Make your reservation today and let us take your culinary experience to new heights!';
    textDiv3.classList.add('text');

    restaurantImg1.classList.add('img');
    restaurantImg1.src = img1;

    restaurantImg2.classList.add('img');
    restaurantImg2.src = img2;

    restaurantImg3.classList.add('img');
    restaurantImg3.src = img3;

    homeDiv1.append(textDiv1, restaurantImg1);
    homeDiv2.append(restaurantImg2, textDiv2);
    homeDiv3.append(textDiv3, restaurantImg3);
    homePage.append(homeDiv1, homeDiv2, homeDiv3);
    content.append(homePage);
};

export {loadHome}