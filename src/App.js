import s from "./App.module.css";
import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Loader from "react-js-loader";
// import Header from "./components/Header/Header";
// import MoviesPage from "./components/views/MoviesPage/MoviesPage";
// import MovieDetailsPage from "./components/views/MovieDetailsPage/MovieDetailsPage";
// import HomePage from "./components/views/HomePage/HomePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const HomePage = lazy(() => import("./views/HomePage/HomePage"));
const Header = lazy(() => import("./components/Header/Header"));
const MoviesPage = lazy(() => import("./views/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("./views/MovieDetailsPage/MovieDetailsPage")
);

function App() {
  return (
    <>
      <Suspense
        fallback={
          <Loader
            type="bubble-top"
            bgColor={"rgb(89, 121, 151)"}
            title={"bubble-top"}
            size={100}
          />
        }
      >
        <Header />
        <section className={s.App}>
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/movies" exact>
              <MoviesPage />
            </Route>

            <Route path="/movies/:id">
              <MovieDetailsPage />
            </Route>
          </Switch>
        </section>
        <ToastContainer autoClose={3000} />
      </Suspense>
    </>
  );
}

export default App;
