import React, { useState } from "react";
import { useHistory } from "react-router-dom";

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
    <form onSubmit={handleSubmit}>
      <label>Filtro</label>
      <input value={valorFiltro} onChange={handleInputChange} />
      <div>{valorFiltro}</div>
      <button type="submit">Filtrar</button>
      <div>
        <button onClick={() => history.push("/")}>
          Go Home desde componente Filtro
        </button>
      </div>
    </form>
  );
};

//const improvedComponent = HOC(FiltroPaises);  -> High Order Component -> hooks
