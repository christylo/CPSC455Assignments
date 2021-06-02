import { useState } from "react";
import '../style/style.css';

export default function Form(props) {

    const [imageName, setImageName] = useState("");
    const [imageDescription, setImageDescription] = useState("");
    const [imageURL, setImageURL] = useState("");

    function clearFields() {
        setImageName("");
        setImageDescription("");
        setImageURL("");
    }

    function createCard(name, description, url) {
        const newCard = {
            name,
            url,
            description
        }

        const newCards = [...props.cards, newCard];
        console.log(newCards);
        props.setCards(newCards);
    }

    return (
        <form>
            <div class="label-spacing">
                <label>
                    Image Name:
                <input class="textbox" id="imageName" name="imageName" type="text" value={imageName} onChange={((evt) => setImageName(evt.target.value))} />
                </label>
            </div>
            <div class="label-spacing">
                <label class="label-spacing">
                    Image Description:
                <input class="textbox" type="text" id="imageDescription" name="imageDescription" value={imageDescription} onChange={((evt) => setImageDescription(evt.target.value))} />
                </label>
            </div>
            <div class="label-spacing">
                <label class="label-spacing">
                    Image URL:
                <input class="textbox" type="text" id="imageURL" name="imageURL" value={imageURL} onChange={((evt) => setImageURL(evt.target.value))} />
                </label>
            </div>
            <input class="button" type="button" value="Add Photo" onClick={(() => createCard(imageName, imageDescription, imageURL))} />
            <input class="button" type="button" value="Clear Fields" onClick={clearFields} />
        </form>
    );
}
