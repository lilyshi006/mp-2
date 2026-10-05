import PokemonList from "./components/Pokemon.tsx";
import styled from "styled-components";
import {useEffect, useState} from "react";
import type {Pokemon} from "./interface/PokeProps.ts";

const ParentDiv=styled.div`
  width: 80vw;
  margin: auto;
  border: 10px darkgoldenrod solid;
`;

export default function App(){
  const [data, setData] = useState<Pokemon[]>([]);
  useEffect(() => {
    async function fetchData(): Promise<void> {
      const rawData = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
      const results: {results: {name: string; url: string}[]} = await rawData.json();
      const pokemonData = await Promise.all(
          results.results.map(async (pokemon) => {
            const response = await fetch(pokemon.url);
            return await response.json();
          })
      );
      setData(pokemonData);
    }
    fetchData()
        .then(() => console.log("Data fetched successfully"))
        .catch((e: Error) => console.log("There was the error: " + e));
  }, []);
  return(
      <ParentDiv>
        <PokemonList data={data}/>
      </ParentDiv>
  )
}