import React from 'react';
import styled from 'styled-components';
import { ModalBackdrop, ModalStyle, ModalBoxWrapper, Header, Close, ModalRow, Footer, FootButton } from './Styled/ModalStyle.jsx';

const Modal = (props) => {
  const {children, heartListing, index} = props;

  const onClose = (e) => {
    props.onClose && props.onClose(e);
  };

  const toBeContinued = () => {
    alert('Over Budget...');
  };

  const handleClick = (event, index) => {
    event.preventDefault();
    heartListing(index);
  };

  if (!props.show) {
    return null;
  }
  return (
    <ModalBackdrop>
        <ModalStyle>
          {children}
          <Header>
            <Close onClick={(e) => { onClose(e);} }> x </Close>
            <div>Save to a list</div>
            <div></div>
          </Header>
          <ModalBoxWrapper>
            <ModalRow type="submit" onClick={(e) => handleClick(e, index)}> Dream Homes</ModalRow>
            <ModalRow type="submit" onClick={(e) => handleClick(e, index)}> Vacation Places</ModalRow>
            <ModalRow type="submit" onClick={(e) => handleClick(e, index)}> Mobile Starred Listings</ModalRow>
          </ModalBoxWrapper>
          <Footer>
            <FootButton onClick={toBeContinued}> Create a list</FootButton>
          </Footer>
        </ModalStyle>
      </ModalBackdrop>
  );
};

export default Modal;
