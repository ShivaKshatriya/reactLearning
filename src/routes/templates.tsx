import * as React from 'react';
import SalutationExample from '../components/salutation-example';
import BooksExample from '../components/books-example';

const russianAuthors: string[] = ['Dostoievsky', 'Tolstoi'];
const frenchAuthors: string[] = ['Dumas', 'Moliére', 'Descartes'];
const guatemalaAuthors: string[] = ['Vargas', 'Pazos', 'Hernández'];

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

            <p>
                <em>Complete the tasks stated in the comments at:</em>
            </p>
            <pre>src/components/books-example.tsx</pre>
            <div className="row">
                <div className="col-md-12">
                    <BooksExample
                        russianAuthors={russianAuthors}
                        frenchAuthors={frenchAuthors}
                        guatemalaAuthors={guatemalaAuthors}
                    />
                </div>
            </div>
    
        </div>
    );
};
