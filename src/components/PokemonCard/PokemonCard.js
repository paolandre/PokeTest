import React from 'react';
import './PokemonCard.css';
import { useNavigate } from 'react-router-dom';

const PokemonCard = ({ name, image, isFavorite }) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/pokemon/${name}`);
    };

    return (
        <div className="pokemon-card" onClick={handleCardClick}>
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <span className={`favorite-icon ${isFavorite ? 'favorite' : ''}`}>❤</span>
        </div>
    );
};

export default PokemonCard;
