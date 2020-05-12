import React from "react";
import { Pais } from "../../../models/Pais";

interface ISelectPaises {
  datos: Pais[];
  onSelectPais: Function;
}

export const SelectPaises = ({ datos, onSelectPais }: ISelectPaises) => {
  const handleSelectPais = (ev: React.SyntheticEvent<HTMLSelectElement>) =>
    onSelectPais(ev.currentTarget.value);

  return (
    <div style={{ padding: "1rem" }}>
      <select onChange={handleSelectPais}>
        {datos.map((pais) => (
          <option key={pais.pais} value={pais.pais}>
            {pais.pais}
          </option>
        ))}
      </select>
    </div>
  );
};
