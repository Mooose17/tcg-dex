import React from "react";
import { useState } from "react";
import { GetCardsByName } from "../Utils/api";

const SearchPokemonByName = () => {
  const [name, setName] = useState("");
  const [pokemon, setPokemon] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await GetCardsByName(name);
    const pokemonCards = res.data.data;
    const pokemonCardArray = [];
    pokemonCards.map((currentPokemon) => pokemonCardArray.push(currentPokemon));
    setPokemon(pokemonCardArray);
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              value={name}
              placeholder="Name A Pokemon!"
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </label>
          <button type="submit">Search!</button>
        </form>
      </div>
      <div>
        {pokemon.map((pokemoncard) => (
          <img
            key={pokemoncard.id}
            src={pokemoncard.images.small}
            alt="pokemon cards"
            className="PokeAPI__card--image"
          />
        ))}
      </div>
    </>
  );
};

export default SearchPokemonByName;
