import { homePageRender } from "./homePage.js" ;
import { menuPageRender } from "./menuPage.js";
import { contactPageRender } from "./contactPage.js" 
import { clearDisplay } from "./clearDisplay.js"


const repeatingElements = (() => {
    const contentDiv = document.querySelector('#content');

    const repeatingButtonDiv = function() {
        const buttonDiv = document.createElement('div');
            buttonDiv.id = 'button-div';
            const logoImage = document.createElement('img');
            logoImage.src = '/Images/Vector-ornament.png';
            const logoImage1 = document.createElement('img');
            logoImage1.src = '/Images/Vector-ornament.png';
            const logoImage2 = document.createElement('img');
            logoImage2.src = '/Images/Vector-ornament.png';
            const logoImage3 = document.createElement('img');
            logoImage3.src = '/Images/Vector-ornament.png';
            const homePageButton = document.createElement('button');
                homePageButton.type = 'button';
                homePageButton.classList.add('redirect-buttons');
                homePageButton.id = 'home-page-button';
                homePageButton.textContent = 'Home'
                homePageButton.addEventListener('click', () => {
                    clearDisplay();
                    homePageRender.render();
                });
            const menuButton = document.createElement('button');
                menuButton.type = 'button';
                menuButton.classList.add('redirect-buttons');
                menuButton.id = 'menu-page-button';
                menuButton.textContent = 'Menu';
                menuButton.addEventListener('click', () => {
                    clearDisplay()
                    menuPageRender.render()
                });
            const contactButton = document.createElement('button');
                contactButton.type = 'button';
                contactButton.classList.add('redirect-buttons');
                contactButton.id = 'contact-page-button'
                contactButton.textContent = 'Contact'
                contactButton.addEventListener('click', () => {
                    clearDisplay()
                    contactPageRender.render()
                });
            buttonDiv.appendChild(logoImage);
            buttonDiv.appendChild(homePageButton);
            buttonDiv.appendChild(logoImage1);
            buttonDiv.appendChild(menuButton)
            buttonDiv.appendChild(logoImage2);
            buttonDiv.appendChild(contactButton);
            buttonDiv.appendChild(logoImage3);
        contentDiv.appendChild(buttonDiv);
    }
    const repeatingHeaderDiv = function(imageSource) {
        const header = document.createElement('header');
            const imgDiv = document.createElement('div');
                imgDiv.id = 'img-div';
                imgDiv.setAttribute('style', `background-image: url(${imageSource})`)
                imgDiv.style.backgroundImage = `url (${imageSource})`
                const restaurantNameDiv = document.createElement('div');
                restaurantNameDiv.id = 'restaurant-name-div';
                    const h1 = document.createElement('h1');
                    h1.textContent = 'Ulaanbaatar';
                    const h2 = document.createElement('h2');
                    h2.textContent = 'The Mongolian Restaurant';
                    restaurantNameDiv.appendChild(h1);
                    restaurantNameDiv.appendChild(h2);
                imgDiv.appendChild(restaurantNameDiv);
            header.appendChild(imgDiv);
        contentDiv.appendChild(header);
    }
    const repeatingFooterDiv = function() {
        const footer = document.createElement('footer');
            const span1 = document.createElement('span');
            span1.textContent = 'The Odin Project | Restaurant Page';
            const span2 = document.createElement('span');
            span2.textContent = 'Piotr Lubiecki | 2021';
            footer.appendChild(span1);
            footer.appendChild(span2);
        contentDiv.appendChild(footer);
    }
    return {
        repeatingButtonDiv,
        repeatingFooterDiv,
        repeatingHeaderDiv
    }
})();

export {repeatingElements}