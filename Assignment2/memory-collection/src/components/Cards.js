import Polaroid from "./Polaroid";

export default function Cards({ images, setCards }) {
    return images.map((image, i) => { return <Polaroid key={i} images={images} setCards={setCards}{...image} /> });
}