import { repeatingElements } from "./repeatingElements.js"

const contactPageRender = (() => {
    const contactPage = function() {
        const contentDiv = document.querySelector('#content');
        const contactInfo = document.createElement('div');
            contactInfo.id = 'contact-info';
            const h2 = document.createElement('h2');
            h2.textContent = 'Contact Information';
            const h3_1 = document.createElement('h3');
            h3_1.textContent = 'Adress'
            const h5_1 = document.createElement('h5')
            h5_1.textContent = 'Mongol Street 23, Omaha'
            const h5_2 = document.createElement('h5')
            h5_2.textContent = 'Omaha 66666, USA';
            const h3_2 = document.createElement('h3');
            h3_2.textContent = 'Phone Number';
            const h4_1 = document.createElement('h4');
            h4_1.textContent = 'Restaurant';
            const h5_3 = document.createElement('h5')
            h5_3.textContent = '(00)000-111-222';
            const h4_2 = document.createElement('h4');
            h4_2.textContent = 'Office';
            const h5_4 = document.createElement('h5')
            h5_4.textContent = '(00)333-444-555';
            contactInfo.appendChild(h2);
            contactInfo.appendChild(h3_1);
            contactInfo.appendChild(h5_1);
            contactInfo.appendChild(h5_2);
            contactInfo.appendChild(h3_2);
            contactInfo.appendChild(h4_1);
            contactInfo.appendChild(h5_3);
            contactInfo.appendChild(h4_2);
            contactInfo.appendChild(h5_4);
        contentDiv.appendChild(contactInfo);
    }

    const render = function(){
        let backgImage = '/Images/contactPicture.jpg'
        repeatingElements.repeatingButtonDiv();
        repeatingElements.repeatingHeaderDiv(backgImage);
        contactPage();
        repeatingElements.repeatingFooterDiv();
    }
    return {render};
})();

export {contactPageRender};