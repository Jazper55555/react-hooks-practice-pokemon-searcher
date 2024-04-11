import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage({pokemon}) {
  const [searchInput, setSearchInput] = useState('')
  const [pokemonData, setPokemonData] = useState(pokemon)

  useEffect(() => {
    const searchedPokemon = pokemon.filter((pokemon) => pokemon.name.toLowerCase().includes(searchInput))

    setPokemonData(searchedPokemon)
  }, [searchInput, pokemon])

  function newPokemon(newObj) {
    setPokemonData([newObj, ...pokemonData])
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm pokemonData={pokemonData} newPokemon={newPokemon}/>
      <br />
      <Search setSearchInput={setSearchInput}/>
      <br />
      <PokemonCollection pokemonData={pokemonData}/>
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