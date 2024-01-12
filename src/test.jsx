import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'

function App() {
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        async function fetchPikachu() {
            try {
                const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/ditto`);
                setPokemon(result.data);
                console.log(result.data);
            } catch (e) {
                console.error(e);
            }
        }
        fetchPikachu();
    }, []);

    if (!pokemon) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p>{pokemon.moves.length}</p>
            <p>{pokemon.weight}</p>
            <p><strong>Abilities: </strong></p>

            <ul>
                {pokemon.abilities.map((ability) => {
                    return (
                        <li key={`${ability.ability.name}-${pokemon.name}`}>
                            {ability.ability.name}
                        </li>
                    )
                })}
            </ul>
        </>
    );
}

export default App;
