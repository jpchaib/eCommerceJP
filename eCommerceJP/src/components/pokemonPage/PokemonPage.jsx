import React from "react";
import { useState, useEffect, useContext } from "react";
import { Navigate, NavLink, useNavigate, useParams } from "react-router-dom";
import { calcPokePrice } from "../../services/pokemons/pokemons";
import { addPokemon } from "../../services/collection/pokemonsDb";
import { getPokemonJSON } from "../../services/pokemons/pokemons";
import PokemonsDataContext from "../pokemonsDataContext/PokemonsDataContext";
import style from "./PokemonPage.module.scss";

const PokemonCard = () => {
    const { pokename } = useParams();
    const [pokemonsData, setPokemonsData] = useContext(PokemonsDataContext);
    const navigate = useNavigate();
    const [price, setPrice] = useState(0);

    const pokemon = pokemonsData.find((item) => item.name == pokename);

    useEffect(() => {
        calcPokePrice(pokemon).then((data) => {
            setPrice(data);
        });
    }, []);

    return (
        <div className={style.Card}>
            <div className={style.Top}>
                <img className={style.Image} src={pokemon.sprites.other.home.front_default} width="200px" />
                <div className={style.Info}>
                    <div>
                        <h2>{pokemon.name.toUpperCase()}</h2>
                        <h3>P$ {price}</h3>
                    </div>
                    <div className={style.Types}>
                        <p>TYPES: </p>
                        {pokemon.types.map((types) => {
                            return <p className={style.Type}>{types.type.name.toUpperCase()}</p>;
                        })}
                    </div>
                </div>
            </div>
            <div className={style.Bottom}>
                <div className={style.Stats}>
                    <ul className={style.List}>
                        {pokemon.stats.map((stat) => {
                            return <li className={style.Item}>{`${stat.stat.name.toUpperCase()} : ${stat.base_stat}`}</li>;
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PokemonCard;
