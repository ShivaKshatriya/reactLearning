import * as React from 'react';
import { Link } from 'react-router-dom';

export default function() {
  return (
      <div className="container">
          <h2>
            Topics
          </h2>
          <br/>
          <ul>
            <li><Link to="templates">Templates</Link></li>
            <li><Link to="actions">Actions</Link></li>
            <li><Link to="components">Components</Link></li>
            <li><Link to="ajax">Ajax</Link></li>
            <li><Link to="state-management">State management</Link></li>
            <li><Link to="redux">Redux</Link></li>
          </ul>
      </div>
  );
};
