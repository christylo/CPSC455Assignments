export default function Modal(props) {

    function deleteCurrentCard() {
        const currID = props.id;
        let array = props.images;
        let removed = array.filter((value, index, arr) => {
            return index !== currID;
        });
        props.setCards(removed);
    }

    const dateTime = new Date();

    return (
        <div class="modal-body">
            <div class="modal" id="modal">
                <h1 id="ModalHeading">{props.name}</h1>
                <div class="content">
                    <img class="card-image-modal" src={props.url} alt="image"></img>
                    <div id="ModalDescription">
                        {props.description}
                        <div>Polaroid added on: {dateTime.toLocaleTimeString()}</div>
                    </div>
                </div>
                <br />
                <div class="actions">
                    <button class="toggle-button" onClick={(() => props.setVisibility(false))}>❌ Close</button>
                    <button id="DeleteCardButton" class="toggle-button" onClick={deleteCurrentCard}>🗑️ Delete</button>
                </div>
            </div>
        </div>
    );
}