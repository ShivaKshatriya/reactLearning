import * as React from 'react';
import '../../styles/components/notification-item.css';

export default function() {
    return (
        <li className="notification-item">
            A person played your video.
            <button className="button">Dismiss</button>
        </li>
    );
}