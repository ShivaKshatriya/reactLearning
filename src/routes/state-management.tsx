import * as React from 'react';
import PresentationState from '../components/presentation-state';
import '../styles/modules/state-management.css';

export default function() {
    return (
        <div className="container state-container">
            <h2>State Management</h2>
            <p>
                Review the slides tasks to explore these examples of state management.
            </p>
            <div className="row">
                <div className="col-md-4">
                    <h3>Presentation state</h3>
                    <PresentationState />
                </div>
                <div className="col-md-4">
                    <h3>Visibility state</h3>
                    
                </div>
                <div className="col-md-4">
                    <h3>Disabled state</h3>
                    
                </div>
                <div className="col-md-4">
                    <h3>Temporal state</h3>
                    
                </div>
                <div className="col-md-4">
                    <h3>Choice state single</h3>
                    
                </div>
                <div className="col-md-4">
                    <h3>Choice state multiple</h3>
                    
                </div>
            </div>
        </div>
    );
}
