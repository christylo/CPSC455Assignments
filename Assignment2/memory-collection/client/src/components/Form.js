import { useEffect, useState } from "react";
import '../style/style.css';

export default function Form({ callGetAllCardsAPI }) {

    const [imageName, setImageName] = useState("");
    const [imageDescription, setImageDescription] = useState("");
    const [imageURL, setImageURL] = useState("");
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
            <input class="button" type="button" value="Add Photo" onClick={() => callCreateCardAPI(imageName, imageDescription, imageURL)} />
            <input class="button" type="button" value="Clear Fields" onClick={clearFields} />
        </form>
    );
}
