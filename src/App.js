import { Route, Switch } from "react-router-dom";
import "./App.css";
import AppBar from "./components/AppBar";
import Container from "./components/Container";
import Section from "./components/Section";
import Navigation from "./components/Navigation";
import HomeView from "./views/HomeView";
import MovieDetailsView from "./views/MovieDetailsView";
import MovieSearchView from "./views/MovieSearchView";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageNotFoundView from "./views/PageNotFoundView";

function App() {
  return (
    <>
      <AppBar>
        <Container>
          <Navigation />
        </Container>
      </AppBar>
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

      <ToastContainer />
    </>
  );
}

export default App;
