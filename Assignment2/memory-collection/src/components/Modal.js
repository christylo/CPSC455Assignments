export default function Modal(props) {

    return (
        <div>
            <div class="modal" id="modal">
                <h2>Modal Window</h2>
                <div class="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis deserunt corrupti, ut fugit magni qui quasi nisi amet repellendus non fuga omnis a sed impedit explicabo accusantium nihil doloremque consequuntur.</div>
                <br />
                <div class="actions">
                    <button class="toggle-button" onClick={(() => props.setVisibility(false))}>Close</button>
                </div>
            </div>
        </div>
    );
}