import React from 'react';
import './PokemonCard.css';

const PokemonCard = ({ name, image, isFavorite }) => {
    return (
        <div className="pokemon-card">
            <img src={image} alt={name} className="pokemon-image" />
            <div className="pokemon-info">
                <h3>{name}</h3>
                <div className="favorite-icon">
                    {isFavorite ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="red"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="heart-icon"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364l-7.682 7.682a.75.75 0 01-1.06 0L4.318 12.682a4.5 4.5 0 010-6.364z"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="heart-icon"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364l-7.682 7.682a.75.75 0 01-1.06 0L4.318 12.682a4.5 4.5 0 010-6.364z"
                            />
                        </svg>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PokemonCard;
