import React from "react";
import { useEffect, useContext } from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import UserContext from "../loginContext/UserContext";
import { deletePokemonById } from "../../services/collection/pokemonsDb";
import { calcPokePriceCart } from "../../services/pokemons/pokemons";
import style from "./PokemonCart.module.scss";

const PokemonCart = ({ refresh, setRefresh, pokemon }) => {
    const [user, setUser] = useContext(UserContext);
    const navigate = useNavigate();
    const [price, setPrice] = useState(0);
    const [info, setInfo] = useState({
        id: [],
        base_experience: "",
        name: "",
        order: "",
        sprites: {
            other: {
                home: {
                    front_default: "https://www.wildhareboca.com/wp-content/uploads/sites/310/2018/03/image-not-available.jpg",
                },
            },
        },
        stats: [],
        types: [],
        qty: 0,
    });
    const pokename = pokemon.name;

    Object.keys(info).forEach((key) => {
        if (pokemon[key]) {
            info[key] = pokemon[key];
        }
    });

    console.log(info.name);
    console.log(info.base_experience);
    console.log(info.order);

    useEffect(() => {
        calcPokePriceCart(pokemon).then((data) => {
            setPrice(data);
            console.log(price);
        });
    }, []);

    const handleClick = (event) => {
        deletePokemonById(user.uid, pokemon.name).then(() => setRefresh(!refresh));
        console.log("Pokemon deleted");
    };

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
                <div className={style.Buttons}>
                    <button className={style.Plus} onClick={handleClick}>
                        Delete from Cart
                    </button>
                    <h2>Quantity: {info.qty}</h2>
                </div>
            </div>
        </div>
    );
};

export default PokemonCart;
