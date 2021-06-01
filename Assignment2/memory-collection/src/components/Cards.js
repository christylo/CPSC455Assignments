import { useState } from "react";
import Polaroid from "./Polaroid";

export default function Cards({ images }) {
    return images.map((image, i) => { return <Polaroid key={i} {...image} /> });
}