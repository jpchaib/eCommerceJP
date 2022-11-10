import React, { useState } from "react";
import { useEffect, useContext } from "react";
import style from "./PokemonList.module.scss";
import { getPokemonsDataJSON, getPokemonsJSON } from "../../services/pokemons/pokemons";
import PokemonCard from "../../components/pokemonCard/PokemonCard";
import PokemonsDataContext from "../../components/pokemonsDataContext/PokemonsDataContext";

const PokemonList = () => {
    const [error, setError] = useState("");
    const [pokemonsData, setPokemonsData] = useContext(PokemonsDataContext);

    useEffect(() => {
        getPokemonsDataJSON().then((data) => {
            setPokemonsData(data);
        });
    }, []);

    return (
        <div>
            <div className={style.Grid}>
                {pokemonsData.map((pokemon) => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} />
                ))}
            </div>
        </div>
    );
};

export default PokemonList;
