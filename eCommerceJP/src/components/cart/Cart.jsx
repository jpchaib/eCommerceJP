import React, { useEffect, useState } from "react";
import { getPokemonsCart } from "../../services/collection/pokemonsDb";
import PokemonCart from "../pokemonCart/PokemonCart";
import style from "./Cart.module.scss";

const Cart = () => {
    const [refresh, setRefresh] = useState(false);
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        getPokemonsCart().then((pokemons) => setPokemons(pokemons));
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
