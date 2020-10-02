/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import Listing from './Listing.jsx';
import Next from './NextButton.jsx';
import Previous from './PreviousButton.jsx';
// import dummyData from './dummyData';
import GlobalFonts from '../fonts/fonts';

const axios = require('axios');

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 24px;
  margin-left: 353px;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  font-family: 'AirbnbCerealBold';
  `;

const ComponentWrapper = styled.div`
  padding-top: 48px;
  padding-bottom: 48px;
  background-color: #f7f7f7;
`;

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      seededData: [],
      activeIndex: 0,
      length: 0,
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
      .then((results) => results.data)
      // .then(result => console.log(result))
      .then((result) => this.setState({
        seededData: result,
      }))
      .catch(console.log);
  }

  //Go to Previous Slides

  //Go To next slides
  goToPreviousSlide() {

  }

  render() {
    return (
      <ComponentWrapper>
        <div className="More-Places-App">
          <GlobalFonts />
          <HeaderWrapper>
            More Places To Stay
            <span>
              <Previous />
              <Next />
            </span>
          </HeaderWrapper>
          <Listing seededData={this.state.seededData} />
        </div>
      </ComponentWrapper>
    );
  }
}

export default App;
