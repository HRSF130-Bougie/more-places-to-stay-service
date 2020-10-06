/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import Listing from './Listing.jsx';
import Next from './NextButton.jsx';
import Previous from './PreviousButton.jsx';
import Modal from './Modal.jsx';
// import dummyData from './dummyData';
import GlobalFonts from '../fonts/fonts';

const axios = require('axios');

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 24px;
  ${'' /* margin-left: 353px; */}
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  font-family: 'AirbnbCerealMedium';
  `;

const ComponentWrapper = styled.div`
  padding-top: 48px;
  padding-bottom: 48px;
  background-color: #f7f7f7;
`;

const MainWrapper = styled.div`
  max-width: 1120px;
  height: 100% !important;
  margin-left: auto !important;
  margin-right: auto !important;
  width: 100% !important;
  display: block;
  justify-content: space-between;
`;

const ButtonWrapper = styled.span`
  display: inline-flex;
  position: relative;
  ${'' /* justify-content: flex-end; */}
`;

const PageGuide = styled.div`
    color: rgb(34, 34, 34);
    font-family: 'AirbnbCerealLight';
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    margin-right: 16px;
    padding-top: 8px;
`;

let scroll = 0;

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      seededData: [],
      scrollPosition: 0,
      motion: scroll,
      page: 1,
      show: false,
      heart: false,
      currentIndex: 0,
    };
    // THIS BINDING AREA
    this.getSeededData = this.getSeededData.bind(this);
    this.showModal = this.showModal.bind(this);
    this.goToPreviousSlide = this.goToPreviousSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);
    this.unHeartListing = this.unHeartListing.bind(this);
    this.heartListing = this.heartListing.bind(this);
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
  goToPreviousSlide(event) {
    event.preventDefault();
    console.log(scroll);
    if (scroll === 0) {
      document.getElementById('test').style.transform = `translateX(${scroll - 2280}px)`;
      scroll = -2280;
      this.setState({ motion: scroll, page: 3 });
    }

    else if (scroll === -1140 || scroll === -2280) {
      document.getElementById('test').style.transform = `translateX(${scroll + 1140}px)`;
      scroll += 1140;
      this.setState({ motion: scroll, page: (this.state.page - 1) });
    }
  }

  // Go To next slides
  goToNextSlide(event) {
    event.preventDefault();
    if (scroll === -2280) {
      document.getElementById('test').style.transform = `translateX(${scroll + 2280}px)`;
      scroll = 0;
      this.setState({ motion: scroll, page: 1 });
    }

    else if (scroll === -1140 || scroll === 0) {
      document.getElementById('test').style.transform = `translateX(${scroll - 1140}px)`;
      scroll -= 1140;
      this.setState({ motion: scroll, page: (this.state.page + 1) });
    }
  }

  // Show Modal
  showModal(event, index) {
    event.preventDefault();
    this.setState({
      ...this.state,
      show: !this.state.show,
      currentIndex: index,
    });
  }

  unHeartListing(event, index) {
    event.preventDefault();
    const { seededData } = this.state;
    seededData[index].heart = false;
    this.setState({
      seededData,
    });
  }

  heartListing(index) {
    const { seededData } = this.state;
    seededData[index].heart = true;
    this.setState({
      seededData,
    });
  }

  render() {
    return (
      <ComponentWrapper>
        <MainWrapper className="More-Places-App">
          <GlobalFonts />
          <HeaderWrapper>
            More Places To Stay
            <ButtonWrapper>
              <PageGuide> {this.state.page} / 3 </PageGuide>
              <Previous prevSlide={this.goToPreviousSlide} scroll={this.state.scroll} />
              <Next nextSlide={this.goToNextSlide} scroll={this.state.scroll} />
            </ButtonWrapper>
          </HeaderWrapper>
          <Listing seededData={this.state.seededData} modal={this.showModal} unHeartListing={this.unHeartListing} />
        </MainWrapper>
        {this.state.show &&
        <Modal show={this.state.show} onClose={this.showModal} heartListing={this.heartListing} index={this.state.currentIndex} ></Modal>}
      </ComponentWrapper>
    );
  }
}

export default App;
