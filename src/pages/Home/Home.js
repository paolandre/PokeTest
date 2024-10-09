import React, { useEffect, useState } from 'react';
import { getPokemonList, getPokemonDetailByUrl } from '../../services/pokemonService';
import Navbar from '../../components/NavBar/NavBar';
import SearchBar from '../../components/SearchBar/SearchBar';
import PokemonCard from '../../components/PokemonCard/PokemonCard';

import './Home.css'
const Home = () => {
    // Estados
    const [pokemonList, setPokemonList] = useState([]);
    const [filteredPokemonList, setFilteredPokemonList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(0);


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
                setFilteredPokemonList(pokemonDetails);
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

    // Manejar búsqueda
    const handleSearch = (query) => {
        if (query === '') {
            // Si no hay búsqueda, mostrar la lista completa
            setFilteredPokemonList(pokemonList);
        } else {
            const filtered = pokemonList.filter((pokemon) =>
                pokemon.name.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredPokemonList(filtered);
        }
    };

    return (
        <div>
            <Navbar />
            <SearchBar placeholder="Search Pokémon..." onSearch={handleSearch} />
            <h1>Pokémon List</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="pokemon-list">
                    {filteredPokemonList.length > 0 ? (
                        filteredPokemonList.map(pokemon => (
                            <PokemonCard
                                key={pokemon.name}
                                name={pokemon.name}
                                image={pokemon.sprites.front_default}
                                isFavorite={false}
                            />
                        ))
                    ) : (
                        <p>No Pokémon found</p>
                    )}
                </div>
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
