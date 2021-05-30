import { useEffect, useState } from "react";
import Form from "../components/Form";

export default function Home() {

    return (
        <div class="container">
            <div class="intro">
                <div id="left-content">
                    <img id="Logo" src="../images/daisy.png" alt="Daisy Logo" />
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
                <div id="picture-container" class="highlights-grid"></div>
            </div>
        </div>
    );
}