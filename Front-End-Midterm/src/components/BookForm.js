import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles.css'; // Import your CSS file for styling

const BookForm = ({ onSuccess }) => { 
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        published_year: '',
        genre: '',
        description: '',
    });

    useEffect(() => {
        if (id) {
            const fetchBook = async () => {
                try {
                    const response = await fetch(`http://localhost:8000/api/books/${id}`);
                    if (!response.ok) throw new Error('Failed to fetch book');
                    const data = await response.json();
                    setFormData(data);
                } catch (error) {
                    console.error(error);
                }
            };
            fetchBook();
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const method = id ? 'PUT' : 'POST';
        const url = id ? `http://localhost:8000/api/books/${id}` : 'http://localhost:8000/api/books';

        try {
            const response = await fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (!response.ok) throw new Error('Failed to save book');
            onSuccess(id ? 'Book updated successfully!' : 'Book added successfully!');
            navigate('/');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="book-form">
            <h2>{id ? 'Edit Book' : 'Add New Book'}</h2>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="author">Author</label>
                <input type="text" id="author" name="author" value={formData.author} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="published_year">Published Year</label>
                <input type="number" id="published_year" name="published_year" value={formData.published_year} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="genre">Genre</label>
                <input type="text" id="genre" name="genre" value={formData.genre} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea id="description" name="description" value={formData.description} onChange={handleChange} required />
            </div>
            <div className="button-container">
                <button type="submit">{id ? 'Update Book' : 'Add Book'}</button>
                <button type="button" onClick={() => navigate('/')}>Cancel</button>
            </div>
        </form>
    );
};

export default BookForm;
