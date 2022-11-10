import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/nav/Nav";
import PokemonList from "./container/pokemonList/PokemonList";
import { useState, useEffect, useContext } from "react";
import PokemonsDataContext from "./components/pokemonsDataContext/PokemonsDataContext";
import LoginEmailContext from "./components/loginContext/LoginEmailContext";
import LoginPasswordContext from "./components/loginContext/LoginPasswordContext";
import RegisterEmailContext from "./components/loginContext/RegisterEmailContext";
import RegisterPasswordContext from "./components/loginContext/RegisterPasswordContext";
import UserContext from "./components/loginContext/UserContext";
import Cart from "./components/cart/Cart";
import Carousel from "./components/carousel/Carousel";
import PokemonPage from "./components/pokemonPage/PokemonPage";
import Login from "./components/login/Login";
import HomePage from "./components/homePage/HomePage";
import style from "./App.module.scss";
import { NavLink } from "react-router-dom";

function App() {
    const [pokemonsData, setPokemonsData] = useState([]);
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [user, setUser] = useState({});

    return (
        <div className={style.App}>
            <BrowserRouter>
                <UserContext.Provider value={[user, setUser]}>
                    <NavLink to="/">
                        <div className={style.ImageContainer}>
                            <img className={style.Image} src="../src/images/International.png" alt="" />
                        </div>
                    </NavLink>
                    <Nav />
                    <PokemonsDataContext.Provider value={[pokemonsData, setPokemonsData]}>
                        <LoginEmailContext.Provider value={[loginEmail, setLoginEmail]}>
                            <LoginPasswordContext.Provider value={[loginPassword, setLoginPassword]}>
                                <RegisterEmailContext.Provider value={[registerEmail, setRegisterEmail]}>
                                    <RegisterPasswordContext.Provider value={[registerPassword, setRegisterPassword]}>
                                        <Carousel />
                                        <Routes>
                                            <Route path="/Login" element={<Login />}></Route>
                                            <Route path="/" element={<HomePage></HomePage>}></Route>
                                            <Route path="/Pokemons" element={<PokemonList />}></Route>
                                            <Route path="/cart/" element={(user?.email && <Cart />) || <h1 className={style.Title}>Please Sign-in to access your Cart.</h1>} />
                                            <Route path="/Pokemon/:pokename" element={<PokemonPage />} />
                                        </Routes>
                                    </RegisterPasswordContext.Provider>
                                </RegisterEmailContext.Provider>
                            </LoginPasswordContext.Provider>
                        </LoginEmailContext.Provider>
                    </PokemonsDataContext.Provider>
                </UserContext.Provider>
            </BrowserRouter>
        </div>
    );
}

export default App;
