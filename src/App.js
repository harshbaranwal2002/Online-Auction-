import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import Signup from './Components/Signup';
import Signin from './Components/Signin';
import Dashboard from './Components/Dashboard';
import AuctionItem from './Components/AuctionItem';
import PostAuction from './Components/PostAuction';
import Landing from './Components/Landing';
import './App.css';

function App() {
  //isAuthenticated is the state, setIsAuthenticated changes the state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const navigate = useNavigate();

  //loads when the component load
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
    // navigate('/signin');
  };

  return (
    <Router>
      <div className="app">
        <header><h1>Auction App</h1>
          <nav>
            <Link to="/signup" className="nav-link">Signup</Link>
            <Link to="/signin" className="nav-link">Signin</Link>
            <Link to="/dashboard" className="nav-link">Dashboard</Link>
            <Link to="/post-auction" className="nav-link">Post Auction</Link>
            {isAuthenticated && (
              <button style={{ marginLeft: '10px', background: 'red', color: 'white' }} onClick={handleLogout} className="nav-link logout-button">Logout</button>
            )}
          </nav>
        </header>
        <main>
          <Routes>
           <Route path="/" element={<Landing/>} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/auction/:id" element={<AuctionItem />} />
            <Route path="/post-auction" element={<PostAuction />} />
          </Routes>
          
        </main>
        <footer>
          <p>&copy; 2024 Auction App. All rights reserved.</p>
          <p>Welcome to the best place to buy and sell items through auctions!</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;