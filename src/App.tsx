import React, { useEffect, Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setTitle } from "./store/header/header.actions";
import { ROUTES } from "./routes";
import Header from "./components/Header";
//import Comments from "./pages/Comments";
//import Paises from "./pages/Paises";
//import Posts from "./pages/Posts";
import "./App.css";

const Comments = lazy(() => import("./pages/Comments"));
const Paises = lazy(() => import("./pages/Paises"));
const Posts = lazy(() => import("./pages/Posts"));

const Welcome = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTitle("Welcome"));
  }, []);
  return <h3>Bienvenido al Curso de React</h3>;
};

const NotFoundPage = () => <h3>404 La pagina que busca no existe</h3>;

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Suspense fallback={<div>Cargando Paginas Aplicación...</div>}>
          <Switch>
            <Route exact path={ROUTES.HOME} component={Welcome} />
            <Route exact path={ROUTES.PAISES} component={Paises} />
            <Route exact path={`${ROUTES.COMMENTS}/:id`} component={Comments} />
            <Route exact path={ROUTES.POSTS} component={Posts} />
            <Route component={NotFoundPage} />
            {/* <Redirect to={ROUTES.HOME} /> */}
          </Switch>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
