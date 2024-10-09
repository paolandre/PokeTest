import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ placeholder, onSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        const newQuery = e.target.value;
        setQuery(newQuery);
        if (onSearch) {
            onSearch(newQuery);
        }
    };

    return (
        <div className="search-bar">
            <div className="search-icon">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="icon">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M9.5 17a7.5 7.5 0 100-15 7.5 7.5 0 000 15z" />
                </svg>
            </div>
            <input
                type="text"
                className="search-input"
                placeholder={'Search...'}
                value={query}
                onChange={handleInputChange}
            />
        </div>
    );
};

export default SearchBar;
