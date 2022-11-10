import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/nav/Nav";
import PokemonList from "./container/pokemonList/PokemonList";
import { useState, useEffect, useContext } from "react";
import PokemonsDataContext from "./components/pokemonsDataContext/PokemonsDataContext";
import Cart from "./components/cart/Cart";
import Carousel from "./components/carousel/Carousel";
import PokemonPage from "./components/pokemonPage/PokemonPage";
import style from "./App.module.scss";
import { NavLink } from "react-router-dom";

function App() {
    const [pokemonsData, setPokemonsData] = useState([]);

    return (
        <div className={style.App}>
            <BrowserRouter>
                <NavLink to="/">
                    <div className={style.ImageContainer}>
                        <img className={style.Image} src="../src/images/International.png" alt="" />
                    </div>
                </NavLink>
                <Nav />
                <PokemonsDataContext.Provider value={[pokemonsData, setPokemonsData]}>
                    <Carousel />
                    <Routes>
                        <Route path="/" element={<></>}></Route>
                        <Route path="/Pokemons" element={<PokemonList />}></Route>
                        <Route path="/cart/" element={<Cart />} />
                        <Route path="/pokemon/:pokename" element={<PokemonPage />} />
                    </Routes>
                </PokemonsDataContext.Provider>
            </BrowserRouter>
        </div>
    );
}

export default App;
