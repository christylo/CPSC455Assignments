export default function Polaroid(props) {
    return (
        <div class="card">
            <img class="card-image-longer" src={props.url} alt="image"></img>
            <div class="text-container">
                <p><b>{props.name}</b></p>
                <p>description</p>
            </div>
        </div>
    );
}