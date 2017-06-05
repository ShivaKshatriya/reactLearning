import * as React from 'react';
import '../../styles/components/notifications-header.css';

export default function() {
    return (
        <header className="notifications-header">
            Welcome! You have <span className="notifications-count">3</span> notifications.
        </header>
    );
};