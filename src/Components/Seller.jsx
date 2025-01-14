// import React, { useEffect, useState } from 'react';
import axios from 'axios';

function SellerList() {
  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8082/api/sellers')
      .then(response => {
        setSellers(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the sellers!", error);
      });
  }, []);

  return (
    <div>
      <h3>Sellers</h3>
      <ul className="list-group">
        {sellers.map(seller => (
          <li key={seller.id} className="list-group-item">
            <strong>{seller.name}</strong> - Rating: {seller.rating} <br />
            <small>{seller.review}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SellerList;
