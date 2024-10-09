import React, { useEffect, useState } from 'react';
import { getPokemonList, getPokemonDetailByUrl } from '../../services/pokemonService';
import Navbar from '../../components/NavBar/NavBar';
import SearchBar from '../../components/SearchBar/SearchBar';
import PokemonCard from '../../components/PokemonCard/PokemonCard'; // Importamos el componente de la tarjeta
import './Home.css';

const Home = () => {
    // Estados
    const [pokemonList, setPokemonList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(0);

    // Se actualiza cuando cambia la lista de pokemones de la página
    useEffect(() => {
        const fetchPokemonList = async () => {
            setLoading(true);
            const data = await getPokemonList(20, page * 20);

            if (data && data.results) {
                let pokemonDetails = [];
                for (let pokemon of data.results) {
                    const detail = await getPokemonDetailByUrl(pokemon.url);
                    pokemonDetails.push(detail);
                }
                setPokemonList(pokemonDetails);
            }
            setLoading(false);
        };
        fetchPokemonList();
    }, [page]);

    const handleNextPage = () => {
        setPage(page + 1);
    };

    const handlePrevPage = () => {
        if (page > 0) setPage(page - 1);
    };

    return (
        <div>
            <Navbar />
            <h1>Pokémon List</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {filteredPokemonList.length > 0 ? (
                        filteredPokemonList.map(pokemon => (
                            <li key={pokemon.name}>
                                {pokemon.sprites && pokemon.sprites.front_default ? (
                                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                                ) : (
                                    <p>No image available</p>
                                )}
                                {pokemon.name}
                            </li>
                        ))
                    ) : (
                        <p>No Pokémon found</p>
                    )}
                </ul>
            )}
            <button onClick={handlePrevPage} disabled={page === 0}>
                Previous
            </button>
            <button onClick={handleNextPage}>
                Next
            </button>
        </div>
    );
};

export default Home;
