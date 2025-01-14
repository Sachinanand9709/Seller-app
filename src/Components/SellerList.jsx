import React, { useState, useEffect } from 'react';

const SellerList = () => {
  const [sellers, setSellers] = useState([]); // Store fetched seller data
  const [searchTerm, setSearchTerm] = useState(''); // Store search input
  const [filteredSellers, setFilteredSellers] = useState([]); // Store filtered results

  // Fetch seller data from backend
  useEffect(() => {
    const fetchSellers = async () => {
      try {
        const response = await fetch('http://localhost:8082/api/sellers'); // Replace with your API endpoint
        const data = await response.json();
        setSellers(data);
        setFilteredSellers(data);
      } catch (error) {
        console.error('Error fetching seller data:', error);
      }
    };

    fetchSellers();
  }, []);

  // Filter sellers based on search input
  useEffect(() => {
    const results = sellers.filter((seller) =>
      seller.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredSellers(results);
  }, [searchTerm, sellers]);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Seller List</h1>
      {/* Search Box */}
      <input
        type="text"
        placeholder="Search sellers by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: '100%',
          padding: '10px',
          marginBottom: '20px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          fontSize: '16px',
        }}
      />
      {/* Seller List */}
      {filteredSellers.length > 0 ? (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {filteredSellers.map((seller) => (
            <li
              key={seller.id}
              style={{
                border: '1px solid #ddd',
                padding: '15px',
                marginBottom: '10px',
                borderRadius: '4px',
              }}
            >
              <h2 style={{ margin: '0 0 10px' }}>{seller.name}</h2>
              <p style={{ margin: 0 }}>Rating: {seller.rating} ★</p>
              <p style={{ margin: 0, color: '#555' }}>Review: {seller.review}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No sellers found.</p>
      )}
    </div>
  );
};

export default SellerList;
