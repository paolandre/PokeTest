import React from 'react';
import './PokemonCard.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite, selectFavoritePokemons } from '../../redux/favoriteSlice';

const PokemonCard = ({ name, image }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const favoritePokemons = useSelector(selectFavoritePokemons);

    // Verifica si el Pokémon está en la lista de favoritos
    const isFavorite = favoritePokemons.includes(name);

    const handleCardClick = () => {
        navigate(`/pokemon/${name}`);
    };

    const handleFavoriteClick = (e) => {
        e.stopPropagation();
        dispatch(toggleFavorite(name));
    };

    return (
        <div className="pokemon-card" onClick={handleCardClick}>
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <span
                className={`favorite-icon ${isFavorite ? 'is-favorite' : 'not-favorite'}`}
                onClick={handleFavoriteClick}
            >
                {isFavorite ? '❤️' : '🤍'}
            </span>


        </div>
    );
};

export default PokemonCard;
