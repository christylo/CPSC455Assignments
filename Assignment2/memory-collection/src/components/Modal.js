export default function Modal({ id, images, setCards, name, url, description, cardAddedTime, setVisibility }) {

    function deleteCurrentCard() {
        const currID = id;
        let array = images;
        let removed = array.filter((value, index, arr) => {
            return index !== currID;
        });
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
                        <div>Polaroid added on: {cardAddedTime}</div>
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