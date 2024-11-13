// pages/ViewBook.js
import React from 'react';
import BookDetails from '../components/BookDetails';
import '../styles.css'; // Import the styles

const ViewBook = () => {
    return (
        <div className="view-book-page">
            <h1>Book Details</h1>
            <BookDetails />
        </div>
    );
};

export default ViewBook;
