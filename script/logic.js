let pictureArray = [];
// adds inputted photo name and corresponding photo url to photo list
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

// clears the input fields of current text
function clearFields() {
    document.getElementById('imageName').value = "";
    document.getElementById('imageURL').value = "";
}