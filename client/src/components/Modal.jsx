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
  padding: 30px;
  width: 100% !important;
  max-width: 568px !important;
  border-radius: 12px !important;
`;

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
    // THIS BINDING AREA
  }

  onClose(e) {
    this.props.onClose && this.props.onClose(e);
  }

  render() {
    const {children} = this.props;

    if (!this.props.show) {
      return null;
    }
    return (
      <ModalBackdrop>
        <ModalStyle>
          {children}
          <div>
            <button onClick={(e) => { this.onClose(e);} }> x </button>
          </div>
        </ModalStyle>
      </ModalBackdrop>
    );
  }
}

export default Modal;
