import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPokemonDetailByUrl } from '../../services/pokemonService';
import './PokemonDetail.css'
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/NavBar/NavBar';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite, selectFavoritePokemons } from '../../redux/favoriteSlice';

const PokemonDetail = () => {
    const { name } = useParams();
    const [pokemon, setPokemon] = useState(null);
    const dispatch = useDispatch();
    const favoritePokemons = useSelector(selectFavoritePokemons);
    const isFavorite = favoritePokemons.includes(name);

    useEffect(() => {
        const fetchPokemonDetail = async () => {
            const data = await getPokemonDetailByUrl(`https://pokeapi.co/api/v2/pokemon/${name}`);
            setPokemon(data);
        };
        fetchPokemonDetail();
    }, [name]);

    const handleFavoriteClick = () => {
        dispatch(toggleFavorite(name));
    };

    if (!pokemon) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <Navbar />
            <div className="pokemon-detail-container">
                <nav className="breadcrumb">
                    <Link to="/">Home</Link> &gt; {pokemon.name}
                </nav>
                <div className="pokemon-detail">
                    <div className="pokemon-image-detail">
                        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                    </div>
                    <div className="pokemon-info">
                        <div className="header">
                            <h1 className='pokemon-name-detail'>{pokemon.name}</h1>
                            <span
                                className={`favorite ${isFavorite ? 'favorite' : ''}`}
                                onClick={handleFavoriteClick}
                            >
                                {isFavorite ? '❤️' : '🤍'}
                            </span>
                        </div>
                        <div></div>
                        <div className="abilities">
                            <h2>Habilidades</h2>
                            {pokemon.abilities.map((abilityInfo, index) => (
                                <p key={index}>{abilityInfo.ability.name}</p>
                            ))}
                        </div>
                        <div className="details">
                            <p><strong>Altura:</strong> {pokemon.height}</p>
                            <p><strong>Peso:</strong> {pokemon.weight}</p>
                            <p><strong>Tipo:</strong> {pokemon.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default PokemonDetail;
