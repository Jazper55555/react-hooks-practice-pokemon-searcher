import React from "react";

function Search({setSearchInput}) {

  function handleInput(e) {
    const searchValue = e.target.value.toLowerCase()
    
    setSearchInput(searchValue)
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