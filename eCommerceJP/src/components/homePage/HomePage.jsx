import React from "react";
import style from "./HomePage.module.scss";

const HomePage = () => {
    return (
        <div>
            <h1 className={style.Title}>Welcome to our PokeStore</h1>
            <p className={style.Para}>
                Here, you can get your 1st Generation Pokemon with us. Just go to our <i>Pokemons</i> tab and scroll to find your little , or not so little, companion.
            </p>
        </div>
    );
};

export default HomePage;
