import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Dashboard() {
  const [items, setItems] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      nav('/signin'); // Redirect to Sign In if not authenticated
      return;
    }

    const fetchItems = async () => {
      try {
        const res = await axios.get('http://localhost:5001/auctions');
        setItems(res.data);
      } catch (error) {
        console.error('Error fetching auctions:', error);
      }
    };

    fetchItems();
  }, [nav]); // ✅ Added 'nav' as a dependency

  // 🔹 Handle Logout
  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Remove token
    nav('/signin'); // Redirect to Sign In page
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen text-center">
      <h2 className="text-3xl font-bold mb-4">Auction Dashboard</h2>

      {/* 🔹 Logout Button */}
      <button 
        onClick={handleLogout} 
        className="bg-red-500 text-white px-4 py-2 rounded-lg mb-4"
      >
        Logout
      </button>

      <Link to="/post-auction">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg ml-4">
          Post New Auction
        </button>
      </Link>

      <ul className="mt-6">
        {items.length === 0 ? (
          <p className="text-gray-600">No auctions available.</p>
        ) : (
          items.map((item) => (
            <li key={item._id} className="mb-2 text-lg">
              <Link to={`/auction/${item._id}`} className="text-blue-600 hover:underline">
                {item.itemName} - Current Bid: ${item.currentBid} {item.isClosed ? '(Closed)' : ''}
              </Link>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default Dashboard;
