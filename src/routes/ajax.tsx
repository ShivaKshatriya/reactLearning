import * as React from 'react';
import AjaxXhr from '../components/ajax-xhr';
import AjaxjQuery from '../components/ajax-jquery';
import AjaxFetch from '../components/ajax-fetch';

const validUrl: string = 'http://content.criticarq.gt/wp-json/wp/v2/events';
const method: string = 'GET';

export default function() {
    return (
        <div className="container ajax-container">
            <h2>AJAX</h2>
            <p>
                We need AJAX to perform calls to the server. Review the different implementations below.
            </p>
            <div className="row">
                <div className="col-md-4">
                    <h3>Using XHR object</h3>
                    <AjaxXhr url={validUrl} method={method} />
                </div>
                <div className="col-md-4">
                    <h3>Using jQuery</h3>
                    <AjaxjQuery url={validUrl} method={method} />
                </div>
                <div className="col-md-4">
                    <h3>Using Fetch</h3>
                    <AjaxFetch url={validUrl} method={method} />
                </div>
            </div>
        </div>
    );
}
