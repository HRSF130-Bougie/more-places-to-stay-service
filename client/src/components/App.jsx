/* eslint-disable import/extensions */
import React from 'react';
import Listing from './Listing.jsx';
import dummyData from './dummyData';

// DUMMY DATA

class App extends React.Component {
  constructor() {
    super();

    this.state = {

    };
    // THIS BINDING AREA
  }

  render() {
    return (
      <div>
        <Listing dummyData={dummyData} />
      </div>
    );
  }
}

export default App;
