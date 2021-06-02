import { useEffect, useState } from "react";
import '../style/style.css';

export default function Form({ cards, setCards, setCardAddedTime, deleteAllState }) {

    const [imageName, setImageName] = useState("");
    const [imageDescription, setImageDescription] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [imageID, setImageID] = useState(cards.length);
    const [addedNewCard, setAddedNewCard] = useState(false);
    const dateTime = new Date();

    function clearFields() {
        setImageName("");
        setImageDescription("");
        setImageURL("");
    }

    function createCard(name, description, url) {
        setImageID(imageID + 1);
        const id = imageID;
        const newCard = {
            name,
            url,
            description,
            id
        }

        const newCards = [...cards, newCard];
        setAddedNewCard(true);
        setCards(newCards);
    }

    if (deleteAllState) {
        setImageID(0);
    }

    useEffect(() => {
        setCardAddedTime(dateTime.toLocaleTimeString());
        setAddedNewCard(false);
    }, [addedNewCard]);


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
