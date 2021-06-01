export default function Polaroid(props) {
    return (
        <div class="card">
            <img class="card-image-longer" src={props.url} alt="image"></img>
            <div class="text-container">
                <p><b>{props.name}</b></p>
                <p>{props.description}</p>
            </div>
        </div>
    );
}

// useState visibility default to false
// when clicking polaroid set visibility to true
// have an exit button on the dialog -> when clicked set visibility to false