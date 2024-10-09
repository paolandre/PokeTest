import React, { useEffect, useState } from 'react';
import { getPokemonList, getPokemonDetailByUrl } from '../../services/pokemonService';
import Navbar from '../../components/NavBar/NavBar';
import SearchBar from '../../components/SearchBar/SearchBar';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import Pagination from '../../components/Pagination/Pagination';
import Footer from '../../components/Footer/Footer';
import './Home.css'
import { useSelector } from 'react-redux';
import { selectFavoritePokemons } from '../../redux/favoriteSlice';
import './Home.css';

const Home = () => {
    // Estados
    const [pokemonList, setPokemonList] = useState([]);
    const [filteredPokemonList, setFilteredPokemonList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(10);

    // Obtener los Pokémon favoritos desde Redux
    const favoritePokemons = useSelector(selectFavoritePokemons);

    // Se actualiza cuando cambia la lista de pokemones de la página
    useEffect(() => {
        const fetchPokemonList = async () => {
            setLoading(true);
            const data = await getPokemonList(20, (page - 1) * 20);

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

    // Cambiar de página
    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    return (
        <div>
            <Navbar />
            <SearchBar placeholder="Search Pokémon..." onSearch={handleSearch} />
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
                            />
                        ))
                    ) : (
                        <p>No hay pokemones</p>
                    )}
                </div>
            )}

            <Pagination
                currentPage={page}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
            <Footer />
        </div>
    );
};

export default Home;
