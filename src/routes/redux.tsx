import * as React from 'react';
import AppHeader from '../components/notifications/header';
import Notifications from '../components/notifications/notifications';
import '../styles/modules/redux.css';

export default function() {
    return (
        <div className="container">
            <h2>Redux</h2>
            <p>
                Review the slides to explore Redux.
            </p>
            <div className="row">
                <div className="col-md-10 push-md-1">
                    <div className="notifications-miniapp">
                        <AppHeader />
                        <div className="notifications-info">
                            <h3>
                                Your notifications
                            </h3>
                            <Notifications />
                            <footer>
                                <button className="button">
                                    Clear notifications
                                </button>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
