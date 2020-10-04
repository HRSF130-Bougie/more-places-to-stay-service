import React from 'react';
import styled from 'styled-components';

const ModalBackdrop = styled.section`
   background-color: rgba(0, 0, 0, 0.3);
    z-index: 2000;
    position: fixed;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    padding-top: 12px;
    display: flex;
    ${'' /* flex-direction: row;
    align-items: flex-end; */}
    justify-content: center;
`;

const ModalStyle = styled.div`
  position: 'absolute';
  background-color: white;
  ${'' /* max-width: 500px; */}
  height: 375px;
  margin: auto;
  padding: 10px;
  width: 500px !important;
  max-width: 568px !important;
  border-radius: 12px !important;
  font-size: 14px;
  line-height: 1.43;
  font-family: 'AirbnbCerealMedium';
  color: '#484848';
`;

const ModalBoxWrapper = styled.div`
  position: relative;
    width: 100%;
    max-width: 100%;
    max-height: 100%;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    line-height: 1.43;
    color: '#484848';
    ${'' /* box-shadow: rgba(0, 0, 0, 0.28) 0px 8px 28px !important;
    border-top-left-radius: 12px !important;
    border-top-right-radius: 12px !important */}
`;
const Header = styled.header`
    min-height: 48px;
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgb(235, 235, 235);
    padding: 0px;
    color: rgb(34, 34, 34);
    font-size: 16px;
    line-height: 20px;
    font-weight: 800;
`;

const Close = styled.button`
  border: none !important;
  background: transparent;
  font-family: 'AirbnbCerealMedium';
  font-size: 18px;
  margin-left: 7px;
`;

const ModalRow = styled.button`
    cursor: pointer;
    display: flex !important;
    align-items: center !important;
    font-size: 16px;
    padding: 36px !important;
    border-radius: 8px !important;
    border: none !important;
    background: transparent;
`;

const Footer = styled.div`
    display: flex !important;
    flex: 0 0 auto !important;
    margin: auto;
    border-top: 1px solid rgb(235, 235, 235) !important;
    padding: 16px 24px !important;
    align-items: center !important;
    justify-content: space-between !important;
    font-size: 16px !important;
    line-height: 20px !important;
`;

const FootButton = styled.button`
  margin: 10px auto;
  color: rgb(34, 34, 34);
  font-size: 16px;
  line-height: 20px;
  font-weight: 800;
  text-decoration:underline;
  background: transparent;
  border: none !important;
`;

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
    // THIS BINDING AREA
    this.toBeContinued = this.toBeContinued.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  onClose(e) {
    this.props.onClose && this.props.onClose(e);
  }

  toBeContinued() {
    alert('Over Budget...');
  }

  handleClick(event) {
    event.preventDefault;
    console.log(this.props.toggle);
    this.props.toggle(event);
  }

  render() {
    const {children, toggle} = this.props;

    if (!this.props.show) {
      return null;
    }
    return (
      <ModalBackdrop>
        <ModalStyle>
          {children}
          <Header>
            <Close onClick={(e) => { this.onClose(e);} }> x </Close>
            <div>Save to a list</div>
            <div></div>
          </Header>
          <ModalBoxWrapper>
            <ModalRow type="submit" onClick={(e) => this.handleClick(e)}> Dream Homes</ModalRow>
            <ModalRow type="submit" onClick={(e) => this.handleClick(e)}> Vacation Places</ModalRow>
            <ModalRow type="submit" onClick={(e) => this.handleClick(e)}> Mobile Starred Listings</ModalRow>
          </ModalBoxWrapper>
          <Footer>
            <FootButton onClick={this.toBeContinued}> Create a list</FootButton>
          </Footer>
        </ModalStyle>
      </ModalBackdrop>
    );
  }
}

export default Modal;
