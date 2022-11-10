import React, { useState } from "react";
import { useEffect } from "react";
import style from "./Carousel.module.scss";

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = [
        { price: "P$ 56,999.99", name: "charizard", url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/6.png" },
        { price: "P$ 57,999.99", name: "blastoise", url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/9.png" },
        { price: "P$ 55,999.99", name: "venusaur", url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/3.png" },
        { price: "P$ 122,999.99", name: "mew", url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/151.png" },
        { price: "P$ 138,999.99", name: "mewtwo", url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/150.png" },
    ];

    const moveLeft = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const moveRight = () => {
        if (currentIndex < 5) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className={style.Carousel}>
            <div className={style.Container}>
                <div>
                    {currentIndex !== 0 && (
                        <div className={style.LeftArrow} onClick={moveLeft}>
                            &#9668;
                        </div>
                    )}
                </div>
                <div className={style.Card}>
                    <h1 className={style.Name}>{slides[currentIndex].name.toUpperCase()}</h1>
                    <div className={style.Image} style={{ backgroundImage: `url(${slides[currentIndex].url})` }}></div>
                    <h1 className={style.Name}>{slides[currentIndex].price}</h1>
                    <div className={style.Points}>
                        {slides.map((slide, slideIndex) => (
                            <div className={style.Point} key={slideIndex} onClick={() => goToSlide(slideIndex)}>
                                &#9679;
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    {currentIndex !== 4 && (
                        <div className={style.RightArrow} onClick={moveRight}>
                            &#9658;
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Carousel;
