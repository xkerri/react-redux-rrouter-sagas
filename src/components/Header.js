import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <div className="ui top attached tabular menu">
      <Link to="/">
        <div className="item">Home</div>
      </Link>
      <Link to="posts">
        <div className="item">Posts</div>
      </Link>
      {/* <Link to="albums">
        <div className="item">Albums</div>
      </Link> */}
      <Link to="todos">
        <div className="item">Todos</div>
      </Link>
      <Link to="catchpokemon">
        <div className="item">Catch a Pokemon</div>
      </Link>
    </div>
  </header>
);

export default Header;
