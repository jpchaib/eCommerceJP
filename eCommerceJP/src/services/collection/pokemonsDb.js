import { collection, getDocs, setDoc, doc, getDoc, deleteDoc, updateDoc, increment } from "firebase/firestore";
import db from "../../config/firebase";

export const getPokemonsCart = async () => {
    // get the collection reference
    const collectionRef = collection(db, "pokemons");
    // get query snapshot of all documents in the db;

    const querySnapshot = await getDocs(collectionRef);
    // clean the data so it's easier to use in react
    const cleanedData = querySnapshot.docs.map((rawDocument) => {
        const id = rawDocument.id;
        const restOfData = rawDocument.data();
        console.log(id);
        console.log(restOfData);
        return { id, ...restOfData };
    });

    return cleanedData;
};

export const addPokemon = async (pokemonData) => {
    console.log(pokemonData);
    const id = pokemonData.name;
    //take in some data from React
    const { base_experience, name, order, sprites, stats, types, qty } = pokemonData;
    //clean that Data
    const newPokemon = { id: id, base_experience: base_experience, name: name, order: order, sprites: sprites, stats: stats, types: types, qty: qty };
    //use that collection reference to add cleaned data to firebase
    const docRef = doc(db, "pokemons", id);
    const newDoc = await setDoc(docRef, newPokemon);
    return newDoc;
};

export const deletePokemonById = async (id) => {
    const docRef = doc(db, "pokemons", id);
    //To do: throw error if delete doesn`t happen
    return await deleteDoc(docRef);
};
