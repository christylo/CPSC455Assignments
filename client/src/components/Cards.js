import Polaroid from "./Polaroid";

export default function Cards({ images, setCards, callGetAllCardsAPI }) {
    return images.map((image, i) => { return <Polaroid key={i} images={images} setCards={setCards} callGetAllCardsAPI={callGetAllCardsAPI}{...image} /> });
}