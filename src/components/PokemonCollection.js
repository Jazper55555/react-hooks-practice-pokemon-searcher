import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemonData}) {

  const pokemonCards = pokemonData.map((pokemon) => (
    <PokemonCard key={pokemon.id} name={pokemon.name} hp={pokemon.hp} spritesFront={pokemon.sprites.front} spritesBack={pokemon.sprites.back}/>
  ))

  return (
    <Card.Group itemsPerRow={6}>
      {pokemonCards}
    </Card.Group>
  );
}

export default PokemonCollection;

// App
  // PokemonPage
    // Container
    // PokemonForm
    // Search
    // PokemonCollection
      // PokemonCard