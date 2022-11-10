import React from "react";
import { useState, useEffect, useContext } from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { calcPokePrice } from "../../services/pokemons/pokemons";
import { addPokemon } from "../../services/collection/pokemonsDb";
import UserContext from "../loginContext/UserContext";
import style from "./PokemonCard.module.scss";

const PokemonCard = ({ pokemon }) => {
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

    useEffect(() => {
        calcPokePrice(pokemon).then((data) => {
            setPrice(data);
        });
    }, []);

    const handleAdd = (event) => {
        if (info.qty !== 0) {
            console.log("clicked");
            addPokemon(user.uid, info).then(() => navigate("/cart/"));
        }
    };

    const handlePlusQty = (event) => {
        if (info.qty < 10) {
            setInfo({ ...info, qty: info.qty + 1 });
        }
    };

    const handleMinusQty = (event) => {
        if (info.qty > 0) {
            setInfo({ ...info, qty: info.qty - 1 });
        }
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
                    <button className={style.Plus} onClick={handleAdd}>
                        Add to Cart
                    </button>

                    <div className={style.PlusMinus}>
                        <button className={style.Plus} onClick={handlePlusQty}>
                            +
                        </button>
                        <p>{info.qty}</p>
                        <button className={style.Plus} onClick={handleMinusQty}>
                            -
                        </button>
                    </div>
                    <NavLink className={style.More} to={`/pokemon/${pokename}`}>
                        See More
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default PokemonCard;
