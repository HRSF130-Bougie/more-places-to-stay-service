/* eslint-disable import/extensions */
import React from 'react';
import Listing from './Listing.jsx';
import dummyData from './dummyData';
const axios = require('axios');

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      dummyData: [],

    };
    // THIS BINDING AREA
    this.getSeededData = this.getSeededData.bind(this);
  }

  componentDidMount() {
    this.getSeededData();
  }

  // axios get request
  getSeededData() {
    axios.get('/api/more-places')
      .then(results => results.data)
      // .then(result => console.log(result))
      .then(result => this.setState({
        dummyData: result,
      }))
      .catch(console.log);
  }

  render() {
    return (
      <div>
        <Listing dummyData={this.state.dummyData} />
      </div>
    );
  }
}

export default App;
