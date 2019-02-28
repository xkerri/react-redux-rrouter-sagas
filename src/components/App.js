import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PostList from "./PostList";
import Home from "./Home";
import NotFound from "./NotFound";
import Albums from "./Albums";
import Header from "./Header";
import Todos from "./Todos";
import CatchPokemons from "./CatchPokemons";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/posts" component={PostList} />
          <Route path="/albums" component={Albums} />
          <Route path="/todos" component={Todos} />
          <Route path="/catchpokemon" component={CatchPokemons} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
