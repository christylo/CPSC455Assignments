let pictureArray = [];

let preloadedCards = [
    '{ "name":"Pupper", "url":"../images/pupper.jpeg", "description":"I want this doggo"}',
    '{"name":"Disney", "url":"../images/disney.JPG", "description":"Disney California Adventure Park"}',
    '{ "name":"Picnic", "url":"../images/picnic.JPG", "description":"spring picnic in SF"}',
    '{ "name":"Beach Day", "url":"../images/water.JPG", "description":"summer beach day with friends"}'];

// creating the initial cards
function makePreloadedCards(stringfiedJSONArray) {
    stringfiedJSONArray.map(val => {
        console.log(typeof (val), 'preloaded card type');
        createPreloadedCards(val);
    })
}

function createPreloadedCards(val) {
    const container = document.getElementById('picture-container');
    let addedPicture = val;
    let parsedJSONPicture = JSON.parse(addedPicture);

    // create the card element
    const card = document.createElement('div');
    card.classList = 'card-body';

    // construct the card content
    const content = `
        <div class="card">
            <img class="card-image-longer" src=${parsedJSONPicture.url} alt="Avatar">
            <div class="text-container">
                <p><b>${parsedJSONPicture.name}</b></p>
                <p>${parsedJSONPicture.description}</p>
            </div>
        </div>
    `;

    // append newly created card element to the container
    container.innerHTML += content;
}

// rendering the initial cards once the page loads
window.onload = makePreloadedCards(preloadedCards);

// adds inputted photo name and corresponding photo url to photo list and creates card for the photo
function addPhoto() {
    const imageName = document.getElementById('imageName').value;
    const imageURL = document.getElementById('imageURL').value;
    const imageDescription = document.getElementById('imageDescription').value;
    let jsonPhoto;
    if (imageName && imageURL && imageDescription) {
        jsonPhoto = createJSONObject(imageName, imageURL, imageDescription);
        pictureArray.push(jsonPhoto);
        console.log(pictureArray);
        console.log(typeof (pictureArray), 'pictureArray type');
        createCard(pictureArray);
    }
}

// takes image name and url, turns it into an object literal, then into a JSON string
function createJSONObject(imageName, imageURL, imageDescription) {
    const imageObject = {
        name: imageName,
        url: imageURL,
        description: imageDescription
    };
    return JSON.stringify(imageObject);
}

// creates a photo card elements with array of JSON photos
function createCard(values) {
    const container = document.getElementById('picture-container');
    let addedPicture;

    addedPicture = values.slice(-1).pop();

    console.log('before parse')
    let parsedJSONPicture = JSON.parse(addedPicture);
    console.log('after parse')

    // create the card element
    const card = document.createElement('div');
    card.classList = 'card-body';

    // construct the card content
    const content = `
        <div class="card">
            <img class="card-image-longer" src=${parsedJSONPicture.url} alt="Avatar">
            <div class="text-container">
                <p><b>${parsedJSONPicture.name}</b></p>
                <p>${parsedJSONPicture.description}</p>
            </div>
        </div>
    `;

    // append newly created card element to the container
    container.innerHTML += content;
}

// removes all the picture cards that were previously added
function deleteAll() {
    pictureArray = [];
    removeChildren({ parentId: 'picture-container', childName: 'card' });
}

// helper function for deleteAll() to remove all the child nodes of the picture-container class
function removeChildren(params) {
    let parentId = params.parentId;
    let childName = params.childName;

    let childNodesToRemove = document.getElementById(parentId).getElementsByClassName(childName);
    for (let i = childNodesToRemove.length - 1; i >= 0; i--) {
        let childNode = childNodesToRemove[i];
        childNode.parentNode.removeChild(childNode);
    }
}

// clears the input fields of current text
function clearFields() {
    document.getElementById('imageName').value = "";
    document.getElementById('imageDescription').value = "";
    document.getElementById('imageURL').value = "";
}