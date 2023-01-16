import React from "react";
import { useState } from "react";
import { GetCardsByName } from "../Utils/api";

const SearchPokemonByName = () => {
  const [name, setName] = useState("");
  const [pokemon, setPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const res = await GetCardsByName(name);
    const pokemonCards = res.data.data;
    const pokemonCardArray = [];
    pokemonCards.map((currentPokemon) => pokemonCardArray.push(currentPokemon));
    setPokemon(pokemonCardArray);
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <div className="Loading__message">
        <p>Fetching Pokeballs</p>
      </div>
    );
  }
  return (
    <>
      <div className="seachbox__pokemon--container">
        <form onSubmit={handleSubmit} className="seachbox__pokemon--form">
          <label>
            <input
              type="text"
              value={name}
              placeholder="Name A Pokemon!"
              className="searchbox__pokemon--input"
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </label>
          <button className="searchbox__pokemon--button" type="submit">
            Search!
          </button>
        </form>
      </div>
      <div>
        {pokemon.map((pokemoncard) => (
          <a
            href={pokemoncard.cardmarket?.url}
            target="_blank"
            rel="noreferrer"
            key={pokemoncard.id}
          >
            <img
              key={pokemoncard.id}
              src={pokemoncard.images.small}
              alt="pokemon cards"
              className="PokeAPI__card--image"
            />
          </a>
        ))}
      </div>
    </>
  );
};

export default SearchPokemonByName;
