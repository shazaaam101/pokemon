import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Card";
import useFetch from "./hooks/useFetch";
import { PokemonObj } from "./types/Pokemon.types";

function App() {
  const [pokemon, setPokemon] = useState<PokemonObj | null>(null);
  const [index, setIndex] = useState<number>(1);
  const POKEMON_API: string = `https://pokeapi.co/api/v2/pokemon/${index}`;
  const { data, loading, error, getData } = useFetch(POKEMON_API);

  useEffect(() => {
    async function getNewPokemon() {
      const newData = await getData();
      setPokemon(newData);
    }
    getNewPokemon();
  }, [index]);

  useEffect(() => {
    setPokemon(data);
    if (error) console.log(error);
  }, [data]);

  async function shiftIndex(action: string) {
    if (action === "prev" && index > 1) {
      setIndex((index) => index - 1);
    } else if (action === "next") {
      setIndex((index) => index + 1);
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Pokemons Number : {index}</h1>
      </header>

      {!loading ? (
        <Card
          key={pokemon?.id}
          number={index}
          name={pokemon?.name}
          abilities={pokemon?.abilities}
          base_experience={pokemon?.base_experience}
          types={pokemon?.types}
          weight={pokemon?.weight}
          height={pokemon?.height}
          shiftIndex={shiftIndex}
        />
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}

export default App;
