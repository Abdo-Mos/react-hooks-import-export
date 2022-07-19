import React from "react";
import howManyParks from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde";
import { trees, wildlife } from "./parks/RockyMountain";
import * as RMFunctions from "./parks/RockyMountain";

export default function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"
  return (
    <div>
    <MesaVerde />
    <p>{trees}</p>
    <p>{wildlife}</p>
    {RMFunctions.elevation()}
    </div>
  )

  // return <h1>Colorado State Parks!</h1>;
}
