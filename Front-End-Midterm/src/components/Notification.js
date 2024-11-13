// components/Notification.js

import React from 'react';
import '../styles.css';

const Notification = ({ message, onClose }) => {
    if (!message) return null;

    return (
        <div className={`notification ${message.includes('deleted') ? 'success' : ''}`}>
            <span>{message}</span>
            <button onClick={onClose}>X</button>
        </div>
    );
};

export default Notification;
