import React from "react";

function Search({pokemonData, pokemonSearch}) {

  function handleInput(e) {
    const searchInput = e.target.value.toLowerCase()
    
    pokemonSearch(searchInput)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={handleInput}/>
        <i className="search icon"/>
      </div>
    </div>
  );
}

export default Search;

// App
  // PokemonPage
    // Container
    // PokemonForm
    // Search
    // PokemonCollection
      // PokemonCard