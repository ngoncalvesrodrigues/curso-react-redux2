import React from "react";
import FiltroPaises from "./FiltroPaises";
import SelectPaises from "./SelectPaises";
import DetallePais from "./DetallePais";
import { datos } from "./datos";
import { Pais } from "../../models/Pais";

export const Day1 = () => {
  //let filtro: string = "";
  let filteredDatos: Pais[] = datos;

  const filtrar = (datos: Pais[], filtro: string): Pais[] => datos;

  return (
    <div>
      <FiltroPaises onFilter={(filtro: string) => filtrar(datos, filtro)} />
      <SelectPaises datos={filteredDatos} />
      <DetallePais />
    </div>
  );
};
