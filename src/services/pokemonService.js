// Obtener lista de los pokemones

const BASE_URL = 'https://pokeapi.co/api/v2';

export const getPokemonList = async (limit = 20, offset = 0) => {
    try {
        const response = await fetch(`${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching Pokémon list:', error);
        return null;
    }
};

// Obtener detalles de un Pokémon por su URL
export const getPokemonDetailByUrl = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching Pokémon details:', error);
        return null;
    }
};
