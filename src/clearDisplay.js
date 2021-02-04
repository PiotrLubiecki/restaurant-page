const clearDisplay = function(){
    const contentDiv = document.querySelector('#content');
    while (contentDiv.firstChild) {
        contentDiv.removeChild(contentDiv.firstChild);
    }
}

export {clearDisplay};