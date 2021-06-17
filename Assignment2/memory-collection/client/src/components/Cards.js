import Polaroid from "./Polaroid";

export default function Cards({ images, setCards, numCardsAdded, callGetAllCardsAPI }) {
    return images.map((image, i) => { return <Polaroid key={i} images={images} setCards={setCards} numCardsAdded={numCardsAdded} callGetAllCardsAPI={callGetAllCardsAPI}{...image} /> });
}