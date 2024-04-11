import React, { useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage({pokemon}) {
  const [pokemonData, setPokemonData] = useState(pokemon)

  function pokemonSearch(input) {
    console.log(input)

    pokemonData.filter((pokemon) => pokemon.name === input)
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm pokemonData={pokemon}/>
      <br />
      <Search pokemonData={pokemon} pokemonSearch={pokemonSearch}/>
      <br />
      <PokemonCollection pokemonData={pokemon}/>
    </Container>
  );
}

export default PokemonPage;

// App
  // PokemonPage
    // Container
    // PokemonForm
    // Search
    // PokemonCollection
      // PokemonCard