import React, { createContext, useState, useContext } from 'react';
import { posts } from '../../pages/posts/mockdata/searchdata';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [query, setQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

  
    const handleSearch = (value) => {
        setQuery(value);
        // Di sini Anda bisa menambahkan logika pencarian sesuai kebutuhan
        // Misalnya, panggil fungsi API untuk mendapatkan data berdasarkan query
        const filteredData = posts.filter(post =>
            post.title.toLowerCase().includes(value.toLowerCase())
        );
        setSearchResults(filteredData);
    };

    return (
        <SearchContext.Provider value={{ query, handleSearch, searchResults }}>
            {children}
        </SearchContext.Provider>
    );
};

export const useSearch = () => {
    return useContext(SearchContext);
};
