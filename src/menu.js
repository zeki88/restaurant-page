function loadMenu() {
    const content = document.querySelector("#content");

    const menuDiv = document.createElement('div');
    const menuGrid = document.createElement('div');
    const textH1 = document.createElement('h1');

    textH1.textContent = 'Feel free to mix and match dishes!';

    for (let i = 1; i < 7; i++) {
        const menuNumber = document.createElement('div');
        const menuList = document.createElement('div');
        const menuTitle = document.createElement('div');
        const menuSubtitle1 = document.createElement('div');
        const menuSubtitle2 = document.createElement('div');
        const menuSubtitle3 = document.createElement('div');
        const menuOl1 = document.createElement('ol');
        const menuOl2 = document.createElement('ol');
        const menuOl3 = document.createElement('ol');
        const menuDish1 = document.createElement('li');
        const menuDish2 = document.createElement('li');
        const menuDish3 = document.createElement('li');
        const menuDish4 = document.createElement('li');
        const menuDish5 = document.createElement('li');
        const menuDish6 = document.createElement('li');
        const menuDish7 = document.createElement('li');
        const menuDish8 = document.createElement('li');
        const menuDish9 = document.createElement('li');
        menuNumber.classList.add('menu');
        menuNumber.classList.add(`number${i}`);
        menuList.classList.add('menu-list');
        menuTitle.classList.add('menu-title');
        menuSubtitle1.classList.add('menu-subtitle');
        menuSubtitle2.classList.add('menu-subtitle');
        menuSubtitle3.classList.add('menu-subtitle');
             
        switch (i) {
            case i=1:
                menuTitle.textContent = 'Extravaganza Menu'

                menuSubtitle1.textContent = 'Seafood Starters:'
                menuDish1.textContent = 'Cocktail'
                menuDish2.textContent = 'Crab Stuffed Mushrooms'
                menuDish3.textContent = 'Ceviche Tostadas'

                menuSubtitle2.textContent = 'Catch of the Day:'
                menuDish4.textContent = 'Grilled Salmon with Lemon-Dill Sauce'
                menuDish5.textContent = 'Lobster Linguine'
                menuDish6.textContent = 'Pan-Seared Scallops with Garlic Butter'

                menuSubtitle3.textContent = 'Indulgent Sweets:'
                menuDish7.textContent = 'Key Lime Pie'
                menuDish8.textContent = 'Chocolate Covered Strawberries'
                menuDish9.textContent = 'Mango Sorbet'
                break

            case i=2:
                menuTitle.textContent = 'Fusion Flavors Menu'

                menuSubtitle1.textContent = 'Small Bites:'
                menuDish1.textContent = 'Edamame Hummus with Pita Chips'
                menuDish2.textContent = 'Korean BBQ Sliders'
                menuDish3.textContent = 'Coconut Shrimp with Mango Salsa'

                menuSubtitle2.textContent = 'Global Entrees:'
                menuDish4.textContent = 'Moroccan Spiced Chicken'
                menuDish5.textContent = 'Thai Basil Beef Stir-Fry'
                menuDish6.textContent = 'Mexican Street Corn Tacos'

                menuSubtitle3.textContent = 'Mexican Street Corn Tacos'
                menuDish7.textContent = 'Matcha Green Tea Cheesecake'
                menuDish8.textContent = 'Churro Ice Cream Sandwich'
                menuDish9.textContent = 'Passion Fruit Sorbet'
                break

            case i=3:
                menuTitle.textContent = 'Pan-Asian Feast Menu'

                menuSubtitle1.textContent = 'Asian Bites:'
                menuDish1.textContent = 'Spring Rolls with Peanut Sauce'
                menuDish2.textContent = 'Chicken Satay Skewers'
                menuDish3.textContent = 'Vegetable Tempura'

                menuSubtitle2.textContent = 'Signature Entrees:'
                menuDish4.textContent = 'Teriyaki Glazed Salmon'
                menuDish5.textContent = 'Lobster Linguine'
                menuDish6.textContent = 'Korean BBQ Beef Bulgogi'

                menuSubtitle3.textContent = 'Sweet Conclusions:'
                menuDish7.textContent = 'Green Tea Ice Cream'
                menuDish8.textContent = 'Mango Sticky Rice'
                menuDish9.textContent = 'Lychee Sorbet'
                break

            case i=4:
                menuTitle.textContent = 'Italian Delights Menu'

                menuSubtitle1.textContent = 'Appetizers:'
                menuDish1.textContent = 'Bruschetta Trio'
                menuDish2.textContent = 'Arancini (Risotto Balls)'
                menuDish3.textContent = 'Caprese Salad'

                menuSubtitle2.textContent = 'Main Courses:'
                menuDish4.textContent = 'Classic Spaghetti Bolognese'
                menuDish5.textContent = 'Chicken Piccata'
                menuDish6.textContent = 'Lasagne alla Bolognese'

                menuSubtitle3.textContent = 'Indulgent Sweets:'
                menuDish7.textContent = 'Tiramisu'
                menuDish8.textContent = 'Cannoli'
                menuDish9.textContent = 'Panna Cotta'
                break

            case i=5:
                menuTitle.textContent = 'Vegetarian Delights Menu'

                menuSubtitle1.textContent = 'Vegetarian Tapas:'
                menuDish1.textContent = 'Stuffed Grape Leaves'
                menuDish2.textContent = 'Roasted Red Pepper Hummus'
                menuDish3.textContent = 'Spinach and Feta Phyllo Triangles'

                menuSubtitle2.textContent = 'Mouthwatering Mains:'
                menuDish4.textContent = 'Eggplant Parmesan (vegan)'
                menuDish5.textContent = 'Quinoa-Stuffed Bell Peppers'
                menuDish6.textContent = 'Butternut Squash Risotto'

                menuSubtitle3.textContent = 'Decadent Desserts:'
                menuDish7.textContent = 'Vegan Chocolate Avocado Mousse'
                menuDish8.textContent = 'Coconut Milk Rice Pudding'
                menuDish9.textContent = 'Mixed Berry Parfait'
                break

            case i=6:
                menuTitle.textContent = 'Classic American Menu'

                menuSubtitle1.textContent = 'Starters:'
                menuDish1.textContent = 'Loaded Potato Skins'
                menuDish2.textContent = 'Buffalo Chicken Wings'
                menuDish3.textContent = 'Spinach Artichoke Dip'

                menuSubtitle2.textContent = 'Hearty Entrees:'
                menuDish4.textContent = 'BBQ Pulled Pork Sandwich'
                menuDish5.textContent = 'Classic Meatloaf with Mashed Potatoes'
                menuDish6.textContent = 'Grilled Cheese and Tomato Soup'

                menuSubtitle3.textContent = 'Homestyle Sweets:'
                menuDish7.textContent = 'Apple Pie with Vanilla Ice Cream'
                menuDish8.textContent = 'Chocolate Chip Cookies'
                menuDish9.textContent = 'Banana Bread Pudding'
                break
        }
            

        menuGrid.append(menuNumber);
        menuNumber.append(menuList);
        menuList.append(menuTitle, menuSubtitle1, menuOl1, menuSubtitle2, menuOl2, menuSubtitle3, menuOl3);
        menuOl1.append(menuDish1, menuDish2, menuDish3)
        menuOl2.append(menuDish4, menuDish5, menuDish6)
        menuOl3.append(menuDish7, menuDish8, menuDish9)
    }
   
    

    menuDiv.classList.add('menu-page');
    menuGrid.classList.add('menu-grid');


    menuDiv.append(textH1, menuGrid);
    content.append(menuDiv);
};

export {loadMenu}