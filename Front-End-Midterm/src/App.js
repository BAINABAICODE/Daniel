// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AddBook from './pages/AddBook';
import EditBook from './pages/EditBook';
import ViewBook from './pages/ViewBook';

const App = () => {
    const [notification, setNotification] = useState('');

    const handleNotification = (message) => {
        setNotification(message);
        setTimeout(() => setNotification(''), 3000); // Clear notification after 3 seconds
    };

    return (
        <Router>
            <div>
                {notification && (
                    <div className="notification">{notification}</div> // Positioned at top left
                )}
                <Routes>
                    <Route path="/" element={<Home onSuccess={handleNotification} />} />
                    <Route path="/add" element={<AddBook onSuccess={handleNotification} />} />
                    <Route path="/edit/:id" element={<EditBook onSuccess={handleNotification} />} />
                    <Route path="/view/:id" element={<ViewBook />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
