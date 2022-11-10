import React from "react";
import { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import style from "./Nav.module.scss";
import UserContext from "../loginContext/UserContext";

const Nav = () => {
    const [user, setUser] = useContext(UserContext);
    const [logged, setLogged] = useState("");

    useEffect(() => {
        if (user?.password) {
            setLogged(`${user.password.charAt(0).toUpperCase()}`);
            console.log(logged);
        }
    }, []);

    return (
        <nav className={style.Bar}>
            <div>
                <NavLink className={style.Link} to="/">
                    Home
                </NavLink>
                <NavLink className={style.Link} to="/Pokemons/">
                    Pokemons
                </NavLink>
                <NavLink className={style.Link} to="/cart/">
                    Cart
                </NavLink>
            </div>
            <div className={style.Right}>
                {(user?.password && (
                    <NavLink className={style.Link} to="/Login/">
                        Sign Out
                    </NavLink>
                )) || (
                    <NavLink className={style.Link} to="/Login/">
                        Sign In
                    </NavLink>
                )}
                {logged && <div className={style.Letter}>{logged}</div>}
            </div>
        </nav>
    );
};

export default Nav;
