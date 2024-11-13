// pages/Home.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BookList from '../components/BookList';
import '../styles.css';

const Home = () => {
    const [books, setBooks] = useState([]);
    const [message, setMessage] = useState(''); // State for message
    const [showMessage, setShowMessage] = useState(false); // Track visibility of message

    const fetchBooks = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/books');
            if (!response.ok) throw new Error('Failed to fetch books');
            const data = await response.json();
            setBooks(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchBooks();
    }, []);

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:8000/api/books/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) throw new Error('Failed to delete book');
            setMessage('Book deleted successfully!'); // Set success message
            setShowMessage(true); // Show message
            fetchBooks();
        } catch (error) {
            console.error(error);
        }
    };

    const clearMessage = () => {
        setShowMessage(false); // Hide message
    };

    useEffect(() => {
        if (showMessage) {
            const timer = setTimeout(() => {
                setShowMessage(false); // Fade out after 3 seconds
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [showMessage]);

    return (
        <div className="home-page">
            <header className="header">
                <h1 className="page-title">Book Management System</h1>
            </header>

            {showMessage && (
                <div className="success-message" onClick={clearMessage}>
                    {message}
                </div>
            )}

            <BookList books={books} onDelete={handleDelete} />
        </div>
    );
};

export default Home;
