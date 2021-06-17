import { useState, useEffect } from "react";
import Form from "../components/Form";
import daisyLogo from '../images/daisy.png';
import Cards from "../components/Cards";
import puppy from "../images/pupper.jpeg";
import disney from "../images/disney.JPG";
import picnic from "../images/picnic.JPG";
import water from "../images/water.JPG";

export default function Home() {

    const [cards, setCards] = useState([]);
    const [deleteAllState, setDeleteAllState] = useState(false);
    const [numCardsAdded, setNumCardsAdded] = useState(0);

    function callGetAllCardsAPI() {
      return fetch("http://localhost:9000/api/cards")
          .then(res => res.text())
          .then(res => JSON.parse(res))
          .then(setCards);
    }

    useEffect(() => {
      callGetAllCardsAPI();
    }, []);
  
    function deleteAllCards() {
        setCards([]);
        setDeleteAllState(true);
    }

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
                    <Form cards={cards} setCards={setCards} deleteAllState={deleteAllState} setDeleteAllState={setDeleteAllState} setNumCardsAdded={setNumCardsAdded} numCardsAdded={numCardsAdded}></Form>
                </div>
                <hr></hr>
                <div class="flex-container">
                    <div id="PolaroidHeader">
                        <h2 class="heading">Polaroids</h2>
                    </div>
                    <div id="DeleteAllCardsButton">
                        <button id="DeleteAllButton" class="button" onClick={deleteAllCards}>Delete All Polaroids</button>
                    </div>
                </div>
                <div id="picture-container" class="highlights-grid">
                    <Cards images={cards} setCards={setCards} numCardsAdded={numCardsAdded} />
                </div>
            </div>
        </div >
    );
}