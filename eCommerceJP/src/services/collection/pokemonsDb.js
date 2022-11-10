import { collection, getDocs, setDoc, doc, getDoc, deleteDoc, updateDoc, increment } from "firebase/firestore";
import { db, auth } from "../../config/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const getPokemonsCart = async (userUID) => {
    // get the collection reference
    const collectionRef = collection(db, userUID);
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

export const addPokemon = async (userUID, pokemonData) => {
    const id = pokemonData.name;
    //take in some data from React
    const { base_experience, name, order, sprites, stats, types, qty } = pokemonData;
    //clean that Data
    const newPokemon = { id: id, base_experience: base_experience, name: name, order: order, sprites: sprites, stats: stats, types: types, qty: qty };
    //use that collection reference to add cleaned data to firebase
    const docRef = doc(db, userUID, id);
    const newDoc = await setDoc(docRef, newPokemon);
    return newDoc;
};

export const deletePokemonById = async (userUID, id) => {
    const docRef = doc(db, userUID, id);
    //To do: throw error if delete doesn`t happen
    return await deleteDoc(docRef);
};

export const register = async (registerEmail, registerPassword) => {
    try {
        const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
    } catch (error) {
        console.log(error.message);
    }
};
export const login = async (loginEmail, loginPassword) => {
    try {
        const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    } catch (error) {
        console.log(error.message);
    }
};
export const logout = async () => {
    await signOut(auth);
};
