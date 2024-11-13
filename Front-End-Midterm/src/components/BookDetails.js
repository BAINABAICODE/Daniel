import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles.css';

const BookDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [book, setBook] = useState(null);

    useEffect(() => {
        const fetchBookDetails = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/books/${id}`);
                if (!response.ok) throw new Error('Failed to fetch book details');
                const data = await response.json();
                setBook(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchBookDetails();
    }, [id]);

    if (!book) return <div className="loading">Loading...</div>;

    return (
        <div className="book-details-card">
            <h2 className="book-title">{book.title}</h2>
            <div className="book-info">
                <p><strong>Author:</strong> {book.author}</p>
                <p><strong>Published Year:</strong> {book.published_year}</p>
                <p><strong>Genre:</strong> {book.genre}</p>
                <p><strong>Description:</strong> {book.description}</p>
            </div>
            <button onClick={() => navigate('/')} className="back-button">Back</button>
        </div>
    );
};

export default BookDetails;
