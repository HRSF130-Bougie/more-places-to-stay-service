import React from 'react';
import styled from 'styled-components';

const Next = styled.button`
  display: inline-flex;
  appearance: none
  margin: 0px;
  padding: 0px;
  border-radius: 50%;
  background-color: white;
  border: 1px solid white;
  outline: none;
  touch-action: manipulation;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 32px;
  height: 32px;
  box-shadow: 0px 0px 12px #888888;
  margin-right: 353px;
`;

class NextButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    // THIS BINDING AREA
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const { nextSlide } = this.props;
    nextSlide(event);
  }

  render() {
    // const { scroll } = this.props;
    // const maxLimit = (scroll <= 2280);
    // console.log(maxLimit);

    return (
      // <div>
      //   { maxLimit ? <Next className="nextSlide" onClick={(event) => this.handleClick(event)}> &gt; </Next> : <div>Test</div> }
      // </div>
      <Next className="nextSlide" onClick={(event) => this.handleClick(event)}> &gt; </Next>
    );
  }
}

export default NextButton;
