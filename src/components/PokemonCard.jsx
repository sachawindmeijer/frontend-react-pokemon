//component
import './PokemonCard.css';
import axios from "axios";
import React, { useEffect, useState } from "react";

function PokemonCard ({name}) {

    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        console.log(name)
        async function fetchPokemonCard() {
            try {
                const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/`);
                setPokemon(result.data);
                console.log(result.data);
                // console.log({name});
            } catch (e) {
                console.error(e);
            }
        }

        fetchPokemonCard();
    }, []);

    return (
        <article className="poke-card">
            {Object.keys(pokemon).length > 0 &&
                <>
                    <h2>{pokemon.name}</h2>
                    <img
                        alt="Afbeelding pokémon"
                        src={pokemon.sprites.front_default}
                    />
                    <p><strong>Moves: </strong>{pokemon.moves.length}</p>
                    <p><strong>Weight: </strong>{pokemon.weight}</p>
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
            }

        </article>
    )

}

export default PokemonCard;