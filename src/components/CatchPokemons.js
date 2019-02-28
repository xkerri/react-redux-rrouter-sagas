import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPokemon, catchPokemon } from "../actions";
import { bindActionCreators } from "redux";

class FindPokemons extends Component {
  componentDidMount() {
    this.props.getPokemons();
  }

  renderPokemons() {
    const { pokemon_species } = this.props.pokemons.pokemons;
    if (typeof pokemon_species === "undefined" || pokemon_species === null) {
      return "";
    }
    const pokemonNumber = this.props.pokemons.catchedPokemon;
    return (
      <div
        style={{
          margin: "10px",
          padding: "50px",
          textAlign: "center",
          width: "700px",
          height: "250px"
        }}
        className="ui card"
      >
        <h2>Your Current Pokemon!</h2>
        <div className="content">
          <div
            className="header"
            style={{ color: "#005B96", textTransform: "uppercase" }}
          >
            {pokemon_species[pokemonNumber].name}
          </div>
        </div>
      </div>
    );
  }

  selectRandomPokemon() {
    const randomNum = Math.floor(Math.random() * 152);
    return randomNum;
  }

  render() {
    return (
      <div className="content">
        <h2
          style={{ fontSize: "1.7em", marginTop: "20px", textAlign: "center" }}
        >
          Redux Saga Pokemons
        </h2>
        <button
          onClick={() => this.props.catchPokemon(this.selectRandomPokemon())}
          style={{ margin: "0 auto", display: "block" }}
          className="ui primary button"
        >
          Catch New Pokemon
        </button>
        <div
          style={{
            marginTop: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "stretch"
          }}
        >
          {this.renderPokemons(this.selectRandomPokemon())}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { pokemons: state.pokemons };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { getPokemons: fetchPokemon, catchPokemon: catchPokemon },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FindPokemons);
