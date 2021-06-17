import { useEffect, useState } from "react";
import '../style/style.css';

export default function Form({ cards, setCards, deleteAllState, setDeleteAllState, setNumCardsAdded, numCardsAdded }) {

    const [imageName, setImageName] = useState("");
    const [imageDescription, setImageDescription] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [imageID, setImageID] = useState(cards.length);
    const dateTime = new Date();

    function callCreateCardAPI() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(cards)
        };
        fetch("http://localhost:9000/api/card/create", requestOptions)
            .then(response => response.json());
    }

    // useEffect(() => {
    //     // POST request using fetch inside useEffect React hook
    //     const requestOptions = {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(cards)
    //     };
    //     fetch("http://localhost:9000/api/card/create", requestOptions)
    //         .then(response => response.json())
    //         .then(data => setPostId(data.id));
    
    // }, []);

    function clearFields() {
        setImageName("");
        setImageDescription("");
        setImageURL("");
    }

    function createCard(name, description, url) {
        setImageID(imageID + 1);
        const id = imageID;
        const time = dateTime.toLocaleTimeString();
        const newCard = {
            name,
            url,
            description,
            id,
            time
        }

        const newCards = [...cards, newCard];
        setCards(newCards);
        setNumCardsAdded(numCardsAdded + 1);
    }

    function addCard() {
        createCard(imageName, imageDescription, imageURL);
        callCreateCardAPI();
    }

    useEffect(() => {
        setDeleteAllState(false);
        setImageID(0);
    }, [deleteAllState]);

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
            <input class="button" type="button" value="Add Photo" onClick={addCard} />
            <input class="button" type="button" value="Clear Fields" onClick={clearFields} />
        </form>
    );
}
