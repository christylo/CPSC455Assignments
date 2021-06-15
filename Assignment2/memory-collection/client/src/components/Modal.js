import { useState } from "react";

export default function Modal({ id, images, setCards, name, url, description, setVisibility, time, numCardsAdded }) {

    const [timesDeleted, setTimesDeleted] = useState(0);

    function deleteCurrentCard() {
        let currID;
        if (timesDeleted === 0) {
            currID = id;
        } else {
            console.log(numCardsAdded)
            currID = id - timesDeleted + numCardsAdded;
        }
        setTimesDeleted(timesDeleted + 1);
        let array = images;
        let removed = array.filter((value, index, arr) => {
            return index !== currID;
        });
        console.log(removed)
        setCards(removed);
    }

    return (
        <div class="modal-body">
            <div class="modal" id="modal">
                <h1 id="ModalHeading">{name}</h1>
                <div class="content">
                    <img class="card-image-modal" src={url} alt="image"></img>
                    <div id="ModalDescription">
                        {description}
                        {time && <div>Polaroid added on: {time}</div>}
                    </div>
                </div>
                <br />
                <div class="actions">
                    <button class="toggle-button" onClick={(() => setVisibility(false))}>❌ Close</button>
                    <button id="DeleteCardButton" class="toggle-button" onClick={deleteCurrentCard}>🗑️ Delete</button>
                </div>
            </div>
        </div>
    );
}