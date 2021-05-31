import { useEffect, useState } from "react";
import Form from "../components/Form";
import Polaroid from "../components/Polaroid";
import daisyLogo from '../images/daisy.png';
import Cards from "../components/Cards";

export default function Home() {

    const [imageName, setImageName] = useState("");
    const [imageDescription, setImageDescription] = useState("");
    const [imageURL, setImageURL] = useState("");

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
                    <Form></Form>
                </div>
                <hr></hr>
                <div class="flex-container">
                    <div id="PolaroidHeader">
                        <h2 class="heading">Polaroids</h2>
                    </div>
                    <div id="DeleteAllCardsButton">
                        <button id="DeleteAllButton" class="button" onclick="deleteAll()">Delete All Polaroids</button>
                    </div>
                </div>
                <Cards></Cards>
            </div>
        </div>
    );
}