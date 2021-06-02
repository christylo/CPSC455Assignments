export default function Modal(props) {

    return (
        <div class="modal-body">
            <div class="modal" id="modal">
                <h1 id="ModalHeading">{props.name}</h1>
                <div class="content">
                    <img class="card-image-modal" src={props.url} alt="image"></img>
                    <div id="ModalDescription">
                        {props.description}
                    </div>
                </div>
                <br />
                <div class="actions">
                    <button class="toggle-button" onClick={(() => props.setVisibility(false))}>❌ Close</button>
                    <button id="DeleteCardButton" class="toggle-button" >🗑️ Delete</button>
                </div>
            </div>
        </div>
    );
}