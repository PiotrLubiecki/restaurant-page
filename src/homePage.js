import { repeatingElements } from "./repeatingElements.js"

const homePageRender =(() => {
    const homePage = function() {
        const contentDiv = document.querySelector('#content');
        const homePageInfo = document.createElement('div');
        homePageInfo.id = 'home-info';
            const h2 = document.createElement('h2');
                h2.textContent = 'About Us';
            const h5_1 = document.createElement('h5');
                h5_1.innerHTML = 'We are happy to invite you to our newly opened restaurant!<br\>\
                Our mission is to bring you closer to the world of the Great Khans<br\>\
                ... and above all to their food'
            const h3 = document.createElement('h3');
                h3.textContent = 'Opening hours';
            const h4_1 = document.createElement('h4');
                h4_1.textContent = 'Monday - Thursday:';
            const h5_2 = document.createElement('h5');
                h5_2.textContent = '10:00 - 22:00'
            const h4_2 = document.createElement('h4');
                h4_2.textContent = 'Friday - Saturday:'
            const h5_3 = document.createElement('h5');
                h5_3.textContent = '10:00 - 01:00';
            const h4_3 = document.createElement('h4');
                h4_3.textContent = 'Sunday:';
            const h5_4 = document.createElement('h5');
                h5_4.textContent = '10:00 - 23:00';
            homePageInfo.appendChild(h2);
            homePageInfo.appendChild(h5_1);
            homePageInfo.appendChild(h3);
            homePageInfo.appendChild(h4_1);
            homePageInfo.appendChild(h5_2);
            homePageInfo.appendChild(h4_2);
            homePageInfo.appendChild(h5_3);
            homePageInfo.appendChild(h4_3);
            homePageInfo.appendChild(h5_4);
        contentDiv.appendChild(homePageInfo);
        }
        const render = function(){
            let backgImage = 'Images/homePicture.jpg'
            repeatingElements.repeatingButtonDiv();
            repeatingElements.repeatingHeaderDiv(backgImage);
            homePage();
            repeatingElements.repeatingFooterDiv();
        }
        return {render}
    
})();




export {homePageRender};