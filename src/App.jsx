import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login';
// import SellerList from './SellerList';
// import SearchBar from './SearchBar';
import axios from 'axios';
import Navbar from './Components/Navbar';
import SellerList from './Components/SellerList'
import Footer from './Components/Footer';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    axios.post('http://localhost:8082/api/auth/login', { username, password })
      .then(response => {
        // Assuming the backend responds with a token or user info
        setIsLoggedIn(true);
      })
      .catch(error => {
        alert('Invalid username or password');
      });
  };

  return (
    <div>
      
      <div>
        {!isLoggedIn ? (
          <Login onLogin={handleLogin} />
        ) : (
          <>
            <Navbar/>
            <SellerList/>
            <Footer/>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
