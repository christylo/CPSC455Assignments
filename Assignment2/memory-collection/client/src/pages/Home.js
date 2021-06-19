import { useState, useEffect } from "react";
import Form from "../components/Form";
import daisyLogo from '../images/daisy.png';
import Cards from "../components/Cards";

export default function Home() {

    const [cards, setCards] = useState([]);
    const [numCardsAdded, setNumCardsAdded] = useState(0);

    function callGetAllCardsAPI() {
      return fetch("http://localhost:9000/api/cards")
          .then(res => res.text())
          .then(res => JSON.parse(res))
          .then(setCards);
    }

    function callDeleteAllCardsAPI() {
      const url = "http://localhost:9000/api/cards/delete";
      fetch(url, { method: 'DELETE' })
        .then(_ => callGetAllCardsAPI());
    }

    useEffect(() => {
      callGetAllCardsAPI();
    }, []);
  
    function deleteAllCards() {
        callDeleteAllCardsAPI();
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
                    <Form callGetAllCardsAPI={callGetAllCardsAPI}></Form>
                </div>
                <hr></hr>
                <div class="flex-container">
                    <div id="PolaroidHeader">
                        <h2 class="heading">Polaroids</h2>
                    </div>
                    <div id="DeleteAllCardsButton">
                        <button id="DeleteAllButton" class="button" onClick={() => deleteAllCards()}>Delete All Polaroids</button>
                    </div>
                </div>
                <div id="picture-container" class="highlights-grid">
                    <Cards images={cards} setCards={setCards} numCardsAdded={numCardsAdded} callGetAllCardsAPI={callGetAllCardsAPI} />
                </div>
            </div>
        </div >
    );
}