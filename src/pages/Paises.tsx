import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import { FiltroPaises, DetallePais, SelectPaises } from "../components/Paises";
import { datos } from "../components/Paises/datos";
import { Pais } from "../models/Pais";
import { ROUTES } from "../routes";

// interface IPaisesProps {
//   name?: number | undefined;
// }

export const Paises = (props: RouteComponentProps) => {
  const [datosApi, setDatosApi] = useState<Pais[]>([]);
  const [filter, setFilter] = useState("");
  const [selectedPais, setSelectedPais] = useState(""); //nombre del pais

  useEffect(() => {
    console.log("Paises componentDidMount");
    setDatosApi(datos);
    return () => console.log("Paises componentWillUnmount");
  }, []);

  useEffect(() => {
    console.log("filtro actualizado");
  }, [filter]);

  useEffect(() => {
    console.log("componentDidUpdate");
  });

  let filteredDatos: Pais[] = datosApi.filter(({ pais }) => {
    const nombrePais = pais.toLowerCase();
    const filtroPais = filter.toLowerCase();
    return nombrePais.includes(filtroPais);
  });

  const objetoPais = datosApi.find(({ pais }) => pais === selectedPais);

  const handleFilter = (val: string) => setFilter(val);
  const handleSelectPais = (nombrePais: string) => setSelectedPais(nombrePais);
  const handleGoHomeButton = () => props.history.push(ROUTES.HOME);

  return (
    <div>
      <div>
        <button onClick={handleGoHomeButton}>Go Home</button>
      </div>
      <FiltroPaises onFilter={handleFilter} />
      <SelectPaises datos={filteredDatos} onSelectPais={handleSelectPais} />
      {/* {objetoPais && <DetallePais pais={objetoPais} />} */}
      {objetoPais ? (
        <DetallePais pais={objetoPais} />
      ) : (
        <div>Seleccione un pais</div>
      )}
    </div>
  );
};

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }

//   componentDidMount() {
//   }

//   componentWillUnmount() {
//   }

// dentro de una funcion handle
//   this.setState({ date: new value})

//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }
