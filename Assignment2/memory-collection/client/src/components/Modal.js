import { useState } from "react";
import EditModal from "./EditModal";
import api from "../api";

export default function Modal({ cardId, name, url, description, setVisibility, time, callGetAllCardsAPI }) {

    const [editVsibility, setEditVisibility] = useState(false);

    async function callDeleteCardAPI() {
        await api.deleteCardById(cardId).then(res => {
            window.alert(`Card deleted successfully`);
            callGetAllCardsAPI();
        });
    }

    return (
        <div class="modal-body">
            <div class="modal" id="modal">
                <h1 id="ModalHeading">{name}</h1>
                <div class="content">
                    <img class="card-image-modal" src={url} alt="card"/>
                    <div id="ModalDescription">
                        {description}
                        {time && <div>Polaroid added on: {time}</div>}
                    </div>
                </div>
                <br />
                <div class="actions">
                    <button class="toggle-button" onClick={(() => setVisibility(false))}>❌ Close</button>
                    <button id="EditCardButton" class="toggle-button" onClick={() => setEditVisibility(true)}>✏️ Edit</button>
                    <button id="DeleteCardButton" class="toggle-button" onClick={callDeleteCardAPI}>🗑️ Delete</button>
                </div>
                {editVsibility && <EditModal name={name} url={url} description={description} cardId={cardId} callGetAllCardsAPI={callGetAllCardsAPI} setEditVisibility={setEditVisibility}/>}
            </div>
        </div>
    );
}

// 