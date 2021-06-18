import { useState } from "react";
import Modal from "./Modal";

export default function Polaroid({ url, name, description, cardId, time, images, setCards, numCardsAdded, callGetAllCardsAPI }) {

    const [visibility, setVisibility] = useState(false);

    return (
        <div class="card-display">
            <div class="card" onClick={(() => setVisibility(true))}>
                <img class="card-image-longer" src={url} alt="image"></img>
                <div class="text-container">
                    <p><b>{name}</b></p>
                    <p>{description}</p>
                </div>
            </div>
            {visibility && <Modal setVisibility={setVisibility} name={name} description={description} url={url} cardId={cardId} images={images} setCards={setCards} time={time} numCardsAdded={numCardsAdded} callGetAllCardsAPI={callGetAllCardsAPI}/>}
        </div>
    );
}