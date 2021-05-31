import { useState } from "react";
import Polaroid from "./Polaroid";
import puppy from "../images/pupper.jpeg";
import disney from "../images/disney.JPG";
import picnic from "../images/picnic.JPG";
import water from "../images/water.JPG";

export default function Cards() {

    // takes image name and url, turns it into an object literal, then into a JSON string
    function createJSONObject(imageName, imageURL, imageDescription) {
        const imageObject = {
            name: imageName,
            url: imageURL,
            description: imageDescription
        };
        return JSON.stringify(imageObject);
    }

    let preloadedCards = [
        '{ "name":"Pupper", "url":"../images/pupper.jpeg", "description":"I want this doggo"}',
        '{"name":"Disney", "url":"../images/disney.JPG", "description":"Disney California Adventure Park"}',
        '{ "name":"Picnic", "url":"../images/picnic.JPG", "description":"spring picnic in SF"}',
        '{ "name":"Beach Day", "url":"../images/water.JPG", "description":"summer beach day with friends"}'];

    const initialCards = <div id="picture-container" class="highlights-grid">
        <Polaroid name="Pupper" url={puppy}></Polaroid>
        <Polaroid name="Disney" url={disney}></Polaroid>
        <Polaroid name="Picnic" url={picnic}></Polaroid>
        <Polaroid name="Beach Day" url={water}></Polaroid>
    </div>

    const [cardList, setCardList] = useState(initialCards);

    return (
        <div>
            {cardList}
        </div>
    );
}