export default function Modal({ cardId, name, url, description, setVisibility, time, callGetAllCardsAPI }) {

    function callDeleteCardAPI() {
        const url = "http://localhost:9000/api/card/delete/" + cardId;
        fetch(url, { method: 'DELETE' })
        .then(_ => callGetAllCardsAPI());
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
                    <button id="DeleteCardButton" class="toggle-button" onClick={callDeleteCardAPI}>🗑️ Delete</button>
                </div>
            </div>
        </div>
    );
}

// 