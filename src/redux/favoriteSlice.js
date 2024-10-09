import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    favoritePokemons: [],
};

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        toggleFavorite: (state, action) => {
            const pokemonName = action.payload;
            if (state.favoritePokemons.includes(pokemonName)) {
                state.favoritePokemons = state.favoritePokemons.filter(p => p !== pokemonName);
            } else {
                state.favoritePokemons.push(pokemonName);
            }
        },
    },
});

// Acciones y selectores
export const { toggleFavorite } = favoritesSlice.actions;
export const selectFavoritePokemons = state => state.favorites.favoritePokemons;
export default favoritesSlice.reducer;
