import { useState } from "react";

export default function EditModal({name, url, description, cardId, callGetAllCardsAPI, setEditVisibility}) {

    const [imageName, setImageName] = useState("");
    const [imageDescription, setImageDescription] = useState("");
    const [imageURL, setImageURL] = useState("");
    const dateTime = new Date();

    function callUpdateCardAPI(newName, newDescription, newUrl) {
        const time = dateTime.toLocaleTimeString();
        const newCard = {
            name: newName,
            url: newUrl,
            description: newDescription,
            time
        };
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newCard)
        };
        const url = "http://localhost:9000/api/card/update/" + cardId;
        fetch(url, requestOptions)
        .then(_ => callGetAllCardsAPI());
    }

    return (
        <div class="modal-body">
            <div class="modal" id="EditModal">
                <form>
                    <div class="label-spacing">
                        <label>
                            Image Name:
                            <input class="textbox" id="imageName" name="imageName" type="text" value={imageName} onChange={((evt) => setImageName(evt.target.value))} />
                        </label>
                    </div>
                    <div class="label-spacing">
                        <label>
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
                    <input class="button" type="button" value="Save" onClick={() => callUpdateCardAPI(imageName, imageDescription, imageURL)}/>
                    <input class="button" type="button" value="Close" onClick={(() => setEditVisibility(false))}/>
                </form>
            </div>
        </div>
    );
}