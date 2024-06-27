import React, { useState } from 'react';
import { useSearch } from '../contexts/searchContext';

const Search = () => {
    const { query, handleSearch } = useSearch();

    const handleChange = (e) => {
        handleSearch(e.target.value);
    };

    return (
        <div className='search'>
            <input
                className='form-group form-control container'
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Search..."
            />
        </div>
    );
};

export default Search;
