import React from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  RouteComponentProps,
} from "react-router-dom";
import "./App.css";

interface IApp {
  name: string;
}

const App = () => {
  const Welcome = (props: RouteComponentProps<IApp>) => {
    console.log(props);
    return <React.Fragment>Bienvenido Curso React</React.Fragment>;
  };
  const NotFoundPage = () => <>404 pagina no existe</>;

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path={"/"} component={Welcome} />
          <Route component={NotFoundPage} />
          <Redirect to="/" />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
