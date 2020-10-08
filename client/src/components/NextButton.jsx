import React from 'react';
import styled from 'styled-components';

const Next = styled.button`
  display: inline-flex;
  appearance: none
  margin: 0px;
  padding: 0px;
  border-radius: 50%;
  background-color: white;
  border: 1px solid rgb(217, 217, 217);
  outline: none;
  touch-action: manipulation;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 32px;
  height: 32px;
  &:hover {
    box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.18);
  }
`;

const NextButton = (props) => {
  const handleClick = (event) => {
    event.preventDefault();
    const { nextSlide } = props;
    nextSlide(event);
  };

  return (
    <Next className="nextSlide" onClick={(event) => handleClick(event)}> &gt; </Next>
  );
};

export default NextButton;
