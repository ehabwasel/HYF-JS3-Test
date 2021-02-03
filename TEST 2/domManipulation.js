function createElementWithClass(elementType, className) {
    const element = document.createElement(elementType);
    element.classList.add(className);

    return element;
}

function appendHouseInformation(houseName, lordName, houseId) {
    const houseListElement = document.getElementById('got-house-list');
        
    const houseDivElement = createElementWithClass('div', 'got-house');
    const houseNameElement = createElementWithClass('h1', 'got-house__title');
    houseNameElement.innerText = houseName;
    const lordNameElement = createElementWithClass('span', 'got-house__current-lord');
    lordNameElement.id = houseId;
    lordNameElement.innerText = lordName;

    houseDivElement.appendChild(houseNameElement);
    houseDivElement.appendChild(lordNameElement);
    houseListElement.appendChild(houseDivElement);
}