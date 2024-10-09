import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPokemonDetailByUrl } from '../../services/pokemonService';
import './PokemonDetail.css'

const PokemonDetail = () => {
    const { name } = useParams();
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPokemonDetail = async () => {
            setLoading(true);
            const data = await getPokemonDetailByUrl(`https://pokeapi.co/api/v2/pokemon/${name}`);
            setPokemon(data);
            setLoading(false);
        };

        fetchPokemonDetail();
    }, [name]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!pokemon) {
        return <p>Pokémon not found</p>;
    }

    return (
        <div className="pokemon-detail-container">
            <div className="pokemon-image">
                <img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} />
            </div>
            <div className="pokemon-info">
                <h1>{pokemon.name}</h1>
                <p><strong>Habilidades:</strong> {pokemon.abilities.map(ability => ability.ability.name).join(', ')}</p>
                <p><strong>Género:</strong> Lorem</p>
                <p><strong>Tamaño:</strong> {pokemon.height} decimetros</p>
                <p><strong>Forma:</strong> Lorem</p>
                <p><strong>Tipo:</strong> {pokemon.types.map(type => type.type.name).join(', ')}</p>
            </div>
        </div>
    );
};

export default PokemonDetail;
