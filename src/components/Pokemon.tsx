import styled from "styled-components";
import type {Pokemon, PokeProps} from "../interface/PokeProps.ts";

const AllPokemonDiv = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    background-color: rgb(255, 177, 177);
`;
const SinglePokemonDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 30%;
    padding: 2%;
    margin: 1%;
    background-color: rgb(255, 204, 184);
    color: black;
    border: 10px lightyellow solid;
    font: italic small-caps bold calc(2px + 1vw) "Lucida Handwriting", cursive, Papyrus, fantasy;
    text-align: center;
`;
export default function PokemonList(props: PokeProps) {
    return (
        <AllPokemonDiv>
            {props.data.map((pokemon: Pokemon) =>
                <SinglePokemonDiv key={pokemon.name}>
                    <h1>{pokemon.name}</h1>
                    <img
                        src={pokemon.sprites.front_default}
                        alt={`image of ${pokemon.name}`}
                    />
                    <p>Height: {pokemon.height}</p>
                    <p>Weight: {pokemon.weight}</p>
                </SinglePokemonDiv>
            )}
        </AllPokemonDiv>
    );
}