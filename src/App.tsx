import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { ROUTES } from "./routes";
import Header from "./components/Header";
import { Paises } from "./pages/Paises";
import { Posts } from "./pages/Posts";
import "./App.css";

const Welcome = () => <h3>Bienvenido al Curso de React</h3>;

const NotFoundPage = () => <h3>404 La pagina que busca no existe</h3>;

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header title="Aplicación React" />
        <Switch>
          <Route exact path={ROUTES.HOME} component={Welcome} />
          <Route exact path={ROUTES.PAISES} component={Paises} />
          <Route exact path={ROUTES.POSTS} component={Posts} />
          <Route component={NotFoundPage} />
          {/* <Redirect to={ROUTES.HOME} /> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
