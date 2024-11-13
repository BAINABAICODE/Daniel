import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const BookList = ({ books, onDelete }) => {
    return (
        <div className="book-list">
            <div className="add-book-button">
                <Link to="/add">
                    <button className="add-button">Add Book</button>
                </Link>
            </div>
            <h2>Book List</h2>
            <div className="card-container">
                {books.map((book) => (
                    <div key={book.id} className="card">
                        <h3>{book.title}</h3>
                        <p>Author: {book.author}</p>
                        <div className="card-actions">
                            <Link to={`/view/${book.id}`}>
                                <button className="view-button">View</button>
                            </Link>
                            <Link to={`/edit/${book.id}`}>
                                <button className="edit-button">Edit</button>
                            </Link>
                            <button onClick={() => onDelete(book.id)} className="delete-button">Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BookList;
