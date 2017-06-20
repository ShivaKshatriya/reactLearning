import * as React from 'react';
import { render } from 'react-dom';
import { 
  BrowserRouter, 
  Route
} from 'react-router-dom';
import AppHeader from './app-header';

import indexRoute from './routes/index';
import templatesRoute from './routes/templates';
import actionsRoute from './routes/actions';
import componentsRoute from './routes/components';
import ajaxRoute from './routes/ajax';
import stateRoute from './routes/state-management';
import reduxRoute from './routes/redux';

import './styles/modules/app-main.css';

render(
  (
    <div className="App">
      <AppHeader />

      <BrowserRouter>
        <div>
          <Route exact={true} path="/" component={indexRoute} />
          <Route path="/templates" component={templatesRoute} />
          <Route path="/actions" component={actionsRoute} />
          <Route path="/components" component={componentsRoute} />
          <Route path="/ajax" component={ajaxRoute} />
          <Route path="/state-management" component={stateRoute} />
          <Route path="/redux" component={reduxRoute} />
        </div>
      </BrowserRouter>

      <footer className="app-footer">
        <div className="container">
         Built by <a href="https://thisdot.co" target="_blank">This Dot</a>.
        </div>
      </footer>
    </div>
  ),
  document.getElementById('root') as HTMLElement
);
