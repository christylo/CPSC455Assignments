import { useState } from "react";
import Modal from "./Modal";

export default function Polaroid(props) {

    const [visibility, setVisibility] = useState(false);

    return (
        <div class="card-display">
            <div class="card" onClick={(() => setVisibility(true))}>
                <img class="card-image-longer" src={props.url} alt="image"></img>
                <div class="text-container">
                    <p><b>{props.name}</b></p>
                    <p>{props.description}</p>
                </div>
            </div>
            {visibility && <Modal setVisibility={setVisibility} name={props.name} description={props.description} url={props.url} id={props.id} images={props.images} setCards={props.setCards} />}
        </div>
    );
}