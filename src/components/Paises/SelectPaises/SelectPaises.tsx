import React from "react";
import { Pais } from "../../../models/Pais";

interface ISelectPaises {
  datos: Pais[];
}

export const SelectPaises = ({ datos }: ISelectPaises) => {
  return (
    <div style={{ padding: "1rem" }}>
      <select>
        {datos.map((pais) => (
          <option key={pais.pais} value={pais.pais}>
            {pais.pais}
          </option>
        ))}
      </select>
    </div>
  );
};
