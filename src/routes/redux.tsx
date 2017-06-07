import * as React from 'react';
import NotificationsApp from '../components/notifications/notifications-app';

export default function() {
    return (
        <div className="container">
            <h2>Redux</h2>
            <p>
                Review the slides to explore Redux.
            </p>
            <div className="row">
                <div className="col-md-10 push-md-1">
                    <NotificationsApp />
                </div>
            </div>
        </div>
    );
}
