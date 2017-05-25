import * as React from 'react';
import SalutationExample from '../components/salutation-example';

export default function() {
    return (
        <div className="container">
            <div className="row">
                <h2>Templates</h2>
                <p>
                    Templates are one of the basic elements that we use to create ambitious applications.
                </p>
            </div>
            
            <h3>Data binding</h3>
            <p>
                <em>Complete the tasks stated in the comments at:</em>
            </p>
            <pre>src/components/salutation-example.tsx</pre>

            <div className="row">
                <div className="col-md-6">
                    <SalutationExample />
                </div>
            </div>
        </div>
    );
};
