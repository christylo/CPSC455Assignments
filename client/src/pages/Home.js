import { useState, useEffect } from "react";
import Form from "../components/Form";
import daisyLogo from '../images/daisy.png';
import Cards from "../components/Cards";
import api from '../api'

export default function Home() {

    const [cards, setCards] = useState([]);

    async function callGetAllCardsAPI() {
        const cards = await api.getAllCards();
        if (cards && cards.data && cards.data.data) {
            setCards(cards.data.data);
        } else {
            setCards([]);
        }       
    }

    async function callDeleteAllCardsAPI() {
        await api.deleteAllCards().then(res => {
            window.alert(`Cards deleted successfully`);
            setCards([]);
        })
    }

    useEffect(() => {
      callGetAllCardsAPI();
    }, []);

    return (
        <div class="container">
            <div class="intro">
                <div id="left-content">
                    <img id="Logo" src={daisyLogo} alt="Daisy Logo" />
                    <p id="Title">Memory Collection</p>
                </div>
                <p>Store photo memories with digital polaroids!</p>
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
                        <button id="DeleteAllButton" class="button" onClick={() => callDeleteAllCardsAPI()}>Delete All Polaroids</button>
                    </div>
                </div>
                <div id="picture-container" class="highlights-grid">
                    <Cards images={cards} setCards={setCards} callGetAllCardsAPI={callGetAllCardsAPI} />
                </div>
            </div>
        </div >
    );
}