let pictureArray = [];
// adds inputted photo name and corresponding photo url to photo list and creates card for the photo
function addPhoto() {
    console.log("add photo");
    const imageName = document.getElementById('imageName').value;
    const imageURL = document.getElementById('imageURL').value;
    let jsonPhoto;
    if (imageName && imageURL) {
        jsonPhoto = createJSONObject(imageName, imageURL);
        console.log(jsonPhoto);
        pictureArray.push(jsonPhoto);
        console.log(pictureArray);
        createCard(pictureArray);
        console.log("created the cards");
    }
}

// takes image name and url, turns it into an object literal, then into a JSON string
function createJSONObject(imageName, imageURL) {
    const imageObject = {
        name: imageName,
        url: imageURL
    };
    return JSON.stringify(imageObject);
}

// creates a photo card elements with array of JSON photos
function createCard(pictureArray) {
    const container = document.getElementById('container');
    pictureArray.forEach((result, idx) => {
        // create the card element
        const card = document.createElement('div');
        card.classList = 'card-body';

        // construct the card content
        const content = `
        <div class="card">
            <img src="../images/christy.png" alt="Avatar" style="width:100%">
            <div class="container">
                <h4><b>${result.name}</b></h4>
                <p>${result.url}</p>
            </div>
        </div>
      `;

        // appeand newl created card element to the container
        container.innerHTML += content;
    })
}

// clears the input fields of current text
function clearFields() {
    document.getElementById('imageName').value = "";
    document.getElementById('imageURL').value = "";
}