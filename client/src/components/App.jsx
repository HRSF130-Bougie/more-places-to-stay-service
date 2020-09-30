/* eslint-disable import/extensions */
import React from 'react';
import styled from "styled-components";
import Listing from './Listing.jsx';
import dummyData from './dummyData';
const axios = require('axios');

// const CarouselWrapper = styled.div`
//   display: flex;
//  `;

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      seededData: [],

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
        seededData: result,
      }))
      .catch(console.log);
  }

  render() {
    return (
      <div className="More-Places-App">
        <h2>MORE PLACES TO STAY</h2>
        <Listing seededData={this.state.seededData} />
      </div>
    );
  }
}

export default App;
