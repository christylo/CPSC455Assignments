import { useState } from "react";
import Modal from "./Modal";

export default function Polaroid({ _id, url, name, description, time, images, cards, setCards, callGetAllCardsAPI }) {

    const [visibility, setVisibility] = useState(false);

    return (
        <div class="card-display">
            <div class="card" onClick={(() => setVisibility(true))}>
                <img class="card-image-longer" src={url} alt="card"></img>
                <div class="text-container">
                    <p><b>{name}</b></p>
                    <p>{description}</p>
                </div>
            </div>
            {visibility && <Modal setVisibility={setVisibility} name={name} description={description} url={url} cardId={_id} images={images} time={time} callGetAllCardsAPI={callGetAllCardsAPI}/>}
        </div>
    );
}