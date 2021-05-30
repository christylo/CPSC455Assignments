export default function Home() {
    return (
        <div class="container">
            <div class="intro">
                <div id="left-content">
                    <img id="Logo" src="../images/daisy.png" />
                    <p id="Title">Memory Collection</p>
                </div>
                <p>Store photo memories in digital polaroids!</p>
                <hr></hr>
                <h2 class="heading">Add Polaroid</h2>
                <div id="AddCard">
                    <form>
                        <label for="imageName">Image name: </label>
                        <input class="textbox" type="text" id="imageName" name="imageName"></input>
                        <br />
                        <label for="imageDescription">Image description: </label>
                        <input class="textbox" type="text" id="imageDescription" name="imageDescription"></input>
                        <br />
                        <label for="imageURL">Image URL: </label>
                        <input class="textbox" type="text" id="imageURL" name="imageURL"></input>
                        <br />
                        <input class="button" type="button" value="Add Photo" onclick="addPhoto()"></input>
                        <input class="button" type="button" value="Clear Fields" onclick="clearFields()"></input>
                    </form>
                </div>
                <hr></hr>
                <div class="flex-container">
                    <div id="PolaroidHeader">
                        <h2 class="heading">Polaroids</h2>
                    </div>
                    <div id="DeleteAllCardsButton">
                        <button id="DeleteAllButton" class="button" onclick="deleteAll()">Delete All Polaroids</button>
                    </div>
                </div>
                <div id="picture-container" class="highlights-grid"></div>
            </div>
        </div>
    );
}