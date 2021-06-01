import { useState } from "react";
import Form from "../components/Form";
import daisyLogo from '../images/daisy.png';
import Cards from "../components/Cards";
import puppy from "../images/pupper.jpeg";
import disney from "../images/disney.JPG";
import picnic from "../images/picnic.JPG";
import water from "../images/water.JPG";

export default function Home() {

    const preloadedCards = [{ name: "Pupper", url: puppy, description: "I want this doggo" },
    { name: "Disney", url: disney, description: "Disney California Adventure Park" },
    { name: "Picnic", url: picnic, description: "spring picnic in SF" },
    { name: "Beach Day", url: water, description: "summer beach day with friends" }]

    const [cards, setCards] = useState(preloadedCards);

    return (
        <div class="container">
            <div class="intro">
                <div id="left-content">
                    <img id="Logo" src={daisyLogo} alt="Daisy Logo" />
                    <p id="Title">Memory Collection</p>
                </div>
                <p>Store photo memories in digital polaroids!</p>
                <hr></hr>
                <h2 class="heading">Add Polaroid</h2>
                <div id="AddCard">
                    <Form cards={cards} setCards={setCards}></Form>
                </div>
                <hr></hr>
                <div class="flex-container">
                    <div id="PolaroidHeader">
                        <h2 class="heading">Polaroids</h2>
                    </div>
                    <div id="DeleteAllCardsButton">
                        <button id="DeleteAllButton" class="button" onClick="deleteAll()">Delete All Polaroids</button>
                    </div>
                </div>
                <div id="picture-container" class="highlights-grid">
                    <Cards images={cards} />
                </div>
            </div>
        </div>
    );
}