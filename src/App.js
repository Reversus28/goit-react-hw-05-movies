import { Route, Switch } from "react-router-dom";
import { lazy, Suspense } from "react";
import "./App.css";
import AppBar from "./components/AppBar";
import Container from "./components/Container";
import Section from "./components/Section";
import Navigation from "./components/Navigation";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const HomePage = lazy(() => import("./views/HomePage"));
const MovieDetailsView = lazy(() => import("./views/MovieDetailsView"));
const MoviesPage = lazy(() => import("./views/MoviesPage"));

function App() {
  return (
    <>
      <AppBar>
        <Container>
          <Navigation />
        </Container>
      </AppBar>
      <Suspense
        fallback={
          <Loader
            type="ThreeDots"
            color="tomato"
            height={100}
            width={100}
            timeout={3000}
            className="loader"
          />
        }
      >
        <Switch>
          <Route path="/" exact>
            <Section>
              <Container>
                <HomePage />
              </Container>
            </Section>
          </Route>

          <Route path="/movies" exact>
            <Section>
              <Container>
                <MoviesPage />
              </Container>
            </Section>
          </Route>

          <Route path="/movies/:movieId">
            <Section>
              <Container>
                <MovieDetailsView />
              </Container>
            </Section>
          </Route>

          <Route>
            <Container>
              <HomePage />
            </Container>
          </Route>
        </Switch>
      </Suspense>

      <ToastContainer />
    </>
  );
}

export default App;
