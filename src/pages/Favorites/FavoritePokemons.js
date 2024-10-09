import React, { useEffect, useState } from 'react';
import { getPokemonList, getPokemonDetailByUrl } from '../../services/pokemonService';
import { useSelector } from 'react-redux';
import Navbar from '../../components/NavBar/NavBar';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import Footer from '../../components/Footer/Footer';
import { selectFavoritePokemons } from '../../redux/favoriteSlice';
import SearchBar from '../../components/SearchBar/SearchBar';
import './FavoritePokemons.css'

const Favorites = () => {
    const favoritePokemons = useSelector(selectFavoritePokemons);
    console.log('favoritePokemons', favoritePokemons);

    const [pokemonDetails, setPokemonDetails] = useState([]);
    const [loading, setLoading] = useState(true);

    // Cargar los detalles de los pokémon favoritos
    useEffect(() => {
        const fetchFavoritePokemonDetails = async () => {
            setLoading(true);
            let details = [];

            for (let pokemonName of favoritePokemons) {
                const detail = await getPokemonDetailByUrl(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
                details.push(detail);
            }

            setPokemonDetails(details);
            setLoading(false);
        };

        if (favoritePokemons.length > 0) {
            fetchFavoritePokemonDetails();
        } else {
            setLoading(false);
        }
    }, [favoritePokemons]);

    return (
        <div>
            <Navbar />
            <SearchBar />
            {loading ? (
                <p>Loading...</p>
            ) : favoritePokemons.length > 0 ? (
                <div className="pokemon-list">
                    {pokemonDetails.map(pokemon => (
                        <PokemonCard
                            key={pokemon.name}
                            name={pokemon.name}
                            image={pokemon.sprites.front_default}
                        />
                    ))}
                </div>
            ) : (
                <p className='not-favorite-message'>No hay Pokemones seleccionados como favoritos.</p>
            )}

            <Footer />
        </div>
    );
};

export default Favorites;
