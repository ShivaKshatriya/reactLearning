import * as React from 'react';
import { Link } from 'react-router-dom';

export default function() {
  return (
      <div className="container">
          <ul>
            <li><Link to="templates">1 - Templates</Link></li>
          </ul>
      </div>
  );
};
