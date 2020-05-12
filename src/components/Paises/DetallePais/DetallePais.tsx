import React from "react";
import { Pais } from "../../../models/Pais";

interface IDetallePaisProps {
  pais: Pais;
}

export const DetallePais = ({ pais: { pais, capital } }: IDetallePaisProps) => {
  return (
    <div
      style={{ marginTop: "1.5rem" }}
    >{`La capital de ${pais} es ${capital}`}</div>
  );
};
