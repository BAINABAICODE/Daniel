// pages/EditBook.js
import React from 'react';
import BookForm from '../components/BookForm';
import '../styles.css'; // Import the styles

const EditBook = ({ onSuccess }) => {
    return (
        <div className="edit-book-page">
            <h1>Edit Book</h1>
            <BookForm onSuccess={onSuccess} />
        </div>
    );
};

export default EditBook;
