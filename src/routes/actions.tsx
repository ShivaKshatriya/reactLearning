import * as React from 'react';
import ActionsExample from '../components/actions-example';

export default function() {
    return (
        <div className="container">
            <h2>Actions up!</h2>
            <p>
                In React functions are bound to DOM events. Let's explore how they work.
            </p>
            <p>
                <em>Open this file and complete the tasks stated on its comments:</em>
            </p>
            <pre>src/components/actions-example.tsx</pre>
            <div className="row">
                <div className="col-md-6">
                    <ActionsExample />
                </div>
            </div>
        </div>
    );
}
