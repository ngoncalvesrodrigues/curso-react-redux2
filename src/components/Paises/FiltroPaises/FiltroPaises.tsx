import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FilterInputText, FiltroPaisesForm } from "./FiltroPaises.styles";

interface IFiltroPaisesProps {
  onFilter: Function;
}

export const FiltroPaises = ({ onFilter }: IFiltroPaisesProps) => {
  const [valorFiltro, setValorFiltro] = useState("");
  // hook instancian = hook(par). estado
  const history = useHistory();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valorFiltro = e.target.value;
    setValorFiltro(valorFiltro);
    onFilter(valorFiltro);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onFilter(valorFiltro);
  };

  return (
    <FiltroPaisesForm onSubmit={handleSubmit}>
      <label>Filtro</label>
      <FilterInputText value={valorFiltro} onChange={handleInputChange} />
      <div>{valorFiltro}</div>
      <button type="submit">Filtrar</button>
      <div className="button-go-home">
        <button onClick={() => history.push("/")}>
          Go Home desde componente Filtro
        </button>
      </div>
    </FiltroPaisesForm>
  );
};

//const improvedComponent = HOC(FiltroPaises);  -> High Order Component -> hooks
