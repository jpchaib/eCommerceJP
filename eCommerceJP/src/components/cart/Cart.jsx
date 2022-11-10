import React, { useEffect, useState, useContext } from "react";
import UserContext from "../loginContext/UserContext";
import { getPokemonsCart } from "../../services/collection/pokemonsDb";
import PokemonCart from "../pokemonCart/PokemonCart";
import style from "./Cart.module.scss";

const Cart = () => {
    const [user, setUser] = useContext(UserContext);
    const [refresh, setRefresh] = useState(false);
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        getPokemonsCart(user.uid).then((pokemons) => setPokemons(pokemons));
    }, [refresh]);

    return (
        <div>
            <>
                {pokemons && (
                    <section className={style.Grid}>
                        {pokemons.map((pokemon) => (
                            <PokemonCart key={pokemon.id} refresh={refresh} setRefresh={setRefresh} pokemon={pokemon} />
                        ))}
                    </section>
                )}
            </>
        </div>
    );
};

export default Cart;
