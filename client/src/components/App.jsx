/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import Listing from './Listing.jsx';
import Next from './NextButton.jsx';
import Previous from './PreviousButton.jsx';
import Modal from './Modal.jsx';
import GlobalFonts from '../fonts/fonts';
import { HeaderWrapper, ComponentWrapper, MainWrapper, ButtonWrapper, PageGuide } from './Styled/AppStyle.jsx';

const axios = require('axios');

// Variable Scroll used to keep track of scroll position in Next/Previous Slide functions
let scroll = 0;

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      seededData: [],
      motion: scroll,
      page: 1,
      show: false,
      heart: false,
      currentIndex: 0,
    };

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

  // Axios GET request
  getSeededData() {
    axios.get('/api/more-places')
      .then((results) => results.data)
      // .then(result => console.log(result))
      .then((result) => this.setState({
        seededData: result,
      }))
      .catch(console.log);
  }

  // Go to PREVIOUS VIEW
  goToPreviousSlide(event) {
    event.preventDefault();
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

  // Go To NEXT VIEW
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

  // Toggle Empty Heart Icon
  unHeartListing(event, index) {
    event.preventDefault();
    const { seededData } = this.state;
    seededData[index].heart = false;
    this.setState({
      seededData,
    });
  }

  // Toggle Full Heart Icon
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
