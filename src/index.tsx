import * as React from 'react';
import { render } from 'react-dom';
import { 
  BrowserRouter, 
  Route
} from 'react-router-dom';
import templatesRoute from './routes/1-templates';
import indexRoute from './routes/index';
import AppHeader from './App-Header';

import './styles/modules/App.css';

render(
  (
    <div className="App">
      <AppHeader />

      <BrowserRouter>
        <div>
          <Route exact={true} path="/" component={indexRoute} />
          <Route path="/1-templates" component={templatesRoute} />
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
