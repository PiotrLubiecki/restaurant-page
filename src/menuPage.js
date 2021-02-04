import { repeatingElements } from "./repeatingElements.js"

const menuPageRender =(() => {
    const menuPage = function() {
        const contentDiv = document.querySelector('#content');
        const menuInfo = document.createElement('div');
        menuInfo.id = 'menu-info';
            const div1 = document.createElement('div');
                div1.classList.add('food');
                const pic1 = document.createElement('img');
                pic1.src ='Images/Khorkhog.jpg';
                const p1 = document.createElement('p');
                p1.textContent = 'Khorkhog'
                div1.appendChild(pic1);
                div1.appendChild(p1);
            const div2 = document.createElement('div');
                div2.classList.add('food');
                const pic2 = document.createElement('img');
                pic2.src ='Images/Buuz.jpg';
                const p2 = document.createElement('p');
                p2.textContent = 'Buuz'
                div2.appendChild(pic2);
                div2.appendChild(p2);
            const div3 = document.createElement('div');
                div3.classList.add('food');
                const pic3 = document.createElement('img');
                pic3.src ='Images/Tsuivan.jpg';
                const p3 = document.createElement('p');
                p3.textContent = 'Tsuivan'
                div3.appendChild(pic3);
                div3.appendChild(p3);
            const div4 = document.createElement('div');
                div4.classList.add('food');
                const pic4 = document.createElement('img');
                pic4.src ='Images/Guritaishul.jpg';
                const p4 = document.createElement('p');
                p4.textContent = 'Guritai Shul'
                div4.appendChild(pic4);
                div4.appendChild(p4);
            const div5 = document.createElement('div');
                div5.classList.add('food');
                const pic5 = document.createElement('img');
                pic5.src ='Images/Khuushuur.jpg';
                const p5 = document.createElement('p');
                p5.textContent = 'Khuushuur '
                div5.appendChild(pic5);
                div5.appendChild(p5);
            const div6 = document.createElement('div');
                div6.classList.add('food');
                const pic6 = document.createElement('img');
                pic6.src ='Images/Ulboov.jpg';
                const p6 = document.createElement('p');
                p6.textContent = 'Ul boov'
                div6.appendChild(pic6);
                div6.appendChild(p6);
            const div7 = document.createElement('div');
                div7.classList.add('food');
                const pic7 = document.createElement('img');
                pic7.src ='Images/Boortsog.jpg';
                const p7 = document.createElement('p');
                p7.textContent = 'Boortsog'
                div7.appendChild(pic7);
                div7.appendChild(p7);
            const div8 = document.createElement('div');
                div8.classList.add('food');
                const pic8 = document.createElement('img');
                pic8.src ='Images/Gambir.jpg';
                const p8 = document.createElement('p');
                p8.textContent = 'Gambir'
                div8.appendChild(pic8);
                div8.appendChild(p8);
            menuInfo.appendChild(div1);
            menuInfo.appendChild(div2);
            menuInfo.appendChild(div3);
            menuInfo.appendChild(div4);
            menuInfo.appendChild(div5);
            menuInfo.appendChild(div6);
            menuInfo.appendChild(div7);
            menuInfo.appendChild(div8);
        contentDiv.appendChild(menuInfo)
    }
    const render = function(){
        let backgImage = '/Images/menuPicture.jpeg'
        repeatingElements.repeatingButtonDiv();
        repeatingElements.repeatingHeaderDiv(backgImage);
        menuPage();
        repeatingElements.repeatingFooterDiv();
    }
    return {render}
})()


export {menuPageRender};