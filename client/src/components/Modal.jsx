import React from 'react';
import styled from 'styled-components';
import {
  ModalBackdrop, ModalStyle, ModalBoxWrapper, Header, Close, ModalRow, Footer, FootButton, NestedModalRow, ModalStack, SnapImage, AnyTime, ModalBold, Saved, Spacing } from './Styled/ModalStyle.jsx';

const Modal = (props) => {
  const {
    children, heartListing, index, dream, mobile, vacation, snap, saveImage,
  } = props;

  const onClose = (e) => {
    props.onClose && props.onClose(e);
  };

  const toBeContinued = () => {
    alert('Over Budget...');
  };

  const handleClick = (event, index) => {
    event.preventDefault();
    heartListing(index);
    saveImage(index);
  };

  const dreamCheck = dream === 0;
  const vacationCheck = vacation === 0;
  const mobileCheck = mobile === 0;

  console.log(snap);

  if (!props.show) {
    return null;
  }
  return (
    <ModalBackdrop>
      <ModalStyle>
        {children}
        <Header>
          <Close onClick={(e) => { onClose(e); }}> x </Close>
          <div>Save to a list</div>
          <div />
        </Header>
        <ModalBoxWrapper>
          <ModalRow type="submit" onClick={(e) => handleClick(e, index)}>
            <NestedModalRow>
              {dreamCheck ? <img src="https://airbnb-bougie.s3-us-west-1.amazonaws.com/icons/emptylisting.png" alt="" /> : <SnapImage src="https://bougiemoreplaces.s3-us-west-1.amazonaws.com/MP18.jpg" alt="" />}
              <Spacing></Spacing>
              <ModalStack>
                <AnyTime>Any time</AnyTime>
                <ModalBold>Dream Homes</ModalBold>
                {dreamCheck ? <div>Nothing saved yet</div> : (
                  <Saved>
                    {' '}
                    {dream}
                    {' '}
                    Stay(s)
                    {' '}
                  </Saved>
                )}
              </ModalStack>
            </NestedModalRow>
          </ModalRow>
          <ModalRow type="submit" onClick={(e) => handleClick(e, index)}>
            <NestedModalRow>
              {vacationCheck ? <img src="https://airbnb-bougie.s3-us-west-1.amazonaws.com/icons/emptylisting.png" alt="" /> : <SnapImage src="https://bougiemoreplaces.s3-us-west-1.amazonaws.com/MP25.jpg" alt="" />}
              <Spacing></Spacing>
              <ModalStack>
                <AnyTime>Any time</AnyTime>
                <ModalBold>Vacation Places</ModalBold>
                {vacationCheck ? <div>Nothing saved yet</div> : (
                  <Saved>
                    {' '}
                    {vacation}
                    {' '}
                    Stay(s)
                    {' '}
                  </Saved>
                )}
              </ModalStack>
            </NestedModalRow>
          </ModalRow>
          <ModalRow type="submit" onClick={(e) => handleClick(e, index)}>
            <NestedModalRow>
              {mobileCheck ? <img src="https://airbnb-bougie.s3-us-west-1.amazonaws.com/icons/emptylisting.png" alt="" /> : <SnapImage src="https://bougiemoreplaces.s3-us-west-1.amazonaws.com/MP32.jpg" alt="" />}
              <Spacing></Spacing>
              <ModalStack>
                <AnyTime>Any time</AnyTime>
                <ModalBold>Mobile Starred Listings</ModalBold>
                {dreamCheck ? <div>Nothing saved yet</div> : (
                  <Saved>
                    {' '}
                    {mobile}
                    {' '}
                    Stay(s)
                    {' '}
                  </Saved>
                )}
              </ModalStack>
            </NestedModalRow>
          </ModalRow>
        </ModalBoxWrapper>
        <Footer>
          <FootButton onClick={toBeContinued}> Create a list</FootButton>
        </Footer>
      </ModalStyle>
    </ModalBackdrop>
  );
};

export default Modal;
