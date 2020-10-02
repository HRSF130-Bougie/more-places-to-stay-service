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
      scrollPosition: 0,
    };
    // THIS BINDING AREA
    this.getSeededData = this.getSeededData.bind(this);
    this.goToPreviousSlide = this.goToPreviousSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);
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

  // Go to Previous Slides
  goToPreviousSlide() {
    document.getElementById('test').style.transform = `translateX(1140px)`;
  }
    // if (this.state.scrollPosition > 0 && this.state.index <= 1) {
    //   this.setState({ scrollPosition: 2 });
    //   document.getElementById('test').style.transform = `translateX(400px)`;
    // } else if (this.state.scrollPosition > 1 && this.state.index <= 2) {
    //   this.setState({ scrollPosition: 2 });
    //   document.getElementById('test').style.transform = `translateX(400px)`;
    // } else {
    //   console.log('End of the road');
    // }


  // Go To next slides
  goToNextSlide() {
    document.getElementById('test').style.transform = `translateX(-1140px)`;
  }

  render() {
    return (
      <ComponentWrapper>
        <div className="More-Places-App">
          <GlobalFonts />
          <HeaderWrapper>
            More Places To Stay
            <span>
              <Previous prevSlide={this.goToPreviousSlide} />
              <Next nextSlide={this.goToNextSlide} />
            </span>
          </HeaderWrapper>
          <Listing seededData={this.state.seededData} />
        </div>
      </ComponentWrapper>
    );
  }
}

export default App;

// /*
// .example::-webkit-scrollbar {
//   display: none;
// /* Hide scrollbar for Chrome, Safari and Opera */
// .example::-webkit-scrollbar {
//   display: none;
// }

// /* Hide scrollbar for IE, Edge and Firefox */
// .example {
//   -ms-overflow-style: none;  /* IE and Edge */
//   scrollbar-width: none;  /* Firefox */
// }
//  */
