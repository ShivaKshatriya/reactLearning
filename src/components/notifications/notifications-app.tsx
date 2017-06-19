import * as React from 'react';
import * as redux from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import AppHeader from './header';
import { Notifications } from './notifications';
import '../../styles/components/notifications-app.css';

import {
    Store,
    reducers
} from './reducers';

let sampleState = {
    notifications: [
        {
            id: 1,
            text: 'Your redux seems to be working now.',
            createdOn: Date.now()
        } as Store.Notification,
        {
            id: 2,
            text: 'Your setup might not be correct.',
            createdOn: Date.now()
        } as Store.Notification,
        {
            id: 3,
            text: 'Welcome to typescript.',
            createdOn: Date.now()
        } as Store.Notification
    ]
};

let store: redux.Store<Store.All> = redux.createStore(
    reducers,
    sampleState as Store.All,
    redux.applyMiddleware(thunk)
);

export default function() {
    return (
        <Provider store={store}>
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
        </Provider>
    );
}
