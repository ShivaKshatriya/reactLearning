import * as React from 'react';
import { Link } from 'react-router-dom';

export default function() {
  return (
      <div className="container">
          <ul>
            <li><Link to="components">Components</Link></li>
            <li><Link to="templates">Templates</Link></li>
          </ul>
      </div>
  );
};
