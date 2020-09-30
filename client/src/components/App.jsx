/* eslint-disable react/destructuring-assignment */
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

  // const HeaderWrapper = styled.div`
  //   display: flex;
  //   padding-left: 40px !important;
  //   `;

  render() {
    return (
      <div className="More-Places-App">
        <div>MORE PLACES TO STAY</div>
        <Listing seededData={this.state.seededData} />
      </div>
    );
  }
}

export default App;
