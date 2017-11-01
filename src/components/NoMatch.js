import React from 'react';

class NoMatch extends React.Component {
  render() {
    return (
        <div className="noMatch">
          <div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
                <div className="no-match">
                  <h3>No match for <code>{location.pathname}</code></h3>
                </div>
              </div>

        </div>
    );
  }
}

export default NoMatch;


