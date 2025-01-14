import React, { useState } from 'react';
import axios from 'axios';

function SearchBar() {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    axios.get(`http://localhost:8082/api/sellers?name=${query}`)
      .then(response => {
        console.log(response.data); // Handle search result
      })
      .catch(error => {
        console.error("Error fetching search results", error);
      });
  };

  return (
    <form onSubmit={handleSearch}>
      <input 
        type="text" 
        className="form-control" 
        placeholder="Search for sellers by name" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
      />
      <button type="submit" className="btn btn-secondary mt-3">Search</button>
    </form>
  );
}

export default SearchBar;
