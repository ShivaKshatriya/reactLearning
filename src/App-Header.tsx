import * as React from 'react';
import './styles/modules/App-Header.css';

class AppHeader extends React.Component<{}, null> {
  render() {
    return (
      <header className="app-header">
          <div className="container">
          <h1>React ab initio</h1>
          </div>
      </header>
    );
  }
}

export default AppHeader;
