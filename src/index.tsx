import * as React from 'react';
import { render } from 'react-dom';
import { 
  BrowserRouter, 
  Route
} from 'react-router-dom';
import AppHeader from './App-Header';

import indexRoute from './routes/index';
import templatesRoute from './routes/templates';
import actionsRoute from './routes/actions';
import componentsRoute from './routes/components';
import stateRoute from './routes/state-management';

import './styles/modules/app.css';

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
          <Route path="/state-management" component={stateRoute} />
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
