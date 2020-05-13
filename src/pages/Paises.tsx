import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { FiltroPaises, DetallePais, SelectPaises } from "../components/Paises";
import { datos } from "../components/Paises/datos";
import { Pais } from "../models/Pais";
import { Post } from "../models/Post";
import { ROUTES } from "../routes";
import { setTitle } from "../store/header/header.actions";

// interface IPaisesProps {
//   name?: number | undefined;
// }

const Paises = (props: RouteComponentProps) => {
  const [datosApi, setDatosApi] = useState<Pais[]>([]);
  const [filter, setFilter] = useState("");
  const [selectedPais, setSelectedPais] = useState(""); //nombre del pais

  const [listaPost, setListaPost] = useState<Post[]>([]);

  const dispatch = useDispatch();

  useEffect(() => {
    // ejemplo post api y state componente
    // setFetchingPosts(true)
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setListaPost(res.data));
    //.catch(err => setError(err))
    //
    //dispatch({ type: "SET_TITLE", payload: { title: "Paginas" } });
    dispatch(setTitle("Paises"));
    //
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

  console.log("lista post (state componente):", listaPost);

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

export default Paises;

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
