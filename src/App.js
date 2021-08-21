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
import PageNotFoundView from "./views/PageNotFoundView";

const HomeView = lazy(() => import("./views/HomeView"));
const MovieDetailsView = lazy(() => import("./views/MovieDetailsView"));
const MovieSearchView = lazy(() => import("./views/MovieSearchView"));

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
                <HomeView />
              </Container>
            </Section>
          </Route>

          <Route path="/movies" exact>
            <Section>
              <Container>
                <MovieSearchView />
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
              <PageNotFoundView />
            </Container>
          </Route>
        </Switch>
      </Suspense>

      <ToastContainer />
    </>
  );
}

export default App;
