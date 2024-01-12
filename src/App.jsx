//app.jsx
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css'
import PokemonCard from "./components/PokemonCard.jsx";

function App() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/`);
                setPokemons(result.data.results);
                console.log(result.data);
            } catch (e) {
                console.error(e);
            }
        }
        fetchData();
    }, []);

    if (!pokemons) {
        return <div>Loading...</div>;
    }

    return (
        // <div className="poke-deck">
        <>

            {pokemons.length > 0 && pokemons.map((pokemon, index) => {
                // Render one Pokémon card per Pokémon
                return (
                    <PokemonCard
                            key={index}
                            name={pokemon.name}
                    />

                );
            })}
            <PokemonCard/>
        </>
        // </div>
    );
}

export default App;
