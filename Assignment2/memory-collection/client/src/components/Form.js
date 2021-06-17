import { useEffect, useState } from "react";
import '../style/style.css';

export default function Form({ deleteAllState, setDeleteAllState, callGetAllCardsAPI }) {

    const [imageName, setImageName] = useState("Cat");
    const [imageDescription, setImageDescription] = useState("test");
    const [imageURL, setImageURL] = useState("https://timesofindia.indiatimes.com/photo/67586673.cms");
    const dateTime = new Date();

    function callCreateCardAPI(name, description, url) {
        const time = dateTime.toLocaleTimeString();
        const newCard = {
            name,
            url,
            description,
            time
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newCard)
        };
        fetch("http://localhost:9000/api/card/create", requestOptions)
            .then(_ => callGetAllCardsAPI());
    }

    function clearFields() {
        setImageName("");
        setImageDescription("");
        setImageURL("");
    }

    function addCard() {
        callCreateCardAPI(imageName, imageDescription, imageURL);
    }

    useEffect(() => {
        setDeleteAllState(false);
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
