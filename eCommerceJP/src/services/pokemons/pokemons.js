export const getPokemonsJSON = async (i) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const json = await response.json();
    return json;
};

export const getPokemonJSON = async (pokename) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokename}`);
    const json = await response.json();
    return json;
};

export const getPokemonsDataJSON = async () => {
    const pokemons = [];
    const finalData = [];

    Array.from({ length: 151 }, (_, i) => pokemons.push(i + 1));

    for await (const pokemon of pokemons) {
        const item = await getPokemonsJSON(pokemon);
        finalData.push(item);
    }
    return finalData;
};

export const calcPokePrice = async (pokemon) => {
    const price = [];
    const stat = 10 * (pokemon.stats.reduce((previous, next) => previous + next.base_stat, 0) / pokemon.stats.length);
    const baseExp = pokemon.base_experience * 200;
    const order = pokemon.order / 248;

    return Math.ceil(((stat + baseExp) * (1 + order)) / 1000) * 1000 + 999.99;
};

export const calcPokePriceCart = async (pokemon) => {
    const price = [];
    const stat = 10 * (pokemon.stats.reduce((previous, next) => previous + next.base_stat, 0) / pokemon.stats.length);
    console.log(stat);
    const baseExp = pokemon.base_experience * 200;
    console.log(baseExp);
    const order = pokemon.order / 248;
    console.log(order);

    return Math.ceil(((stat + baseExp) * (1 + order)) / 1000) * 1000 + 999.99;
};
