import React from 'react';
import styled from 'styled-components';

export const ModalBackdrop = styled.section`
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
// IF I GO BACKWARDS, GO JUST RESET MODAL STYLE THEN STOP!
export const ModalStyle = styled.div`
  position: fixed;
    z-index: 10;
    min-height: 530px;
    width: 572px;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    background-color: white;
    border-color: black;
    border-radius: 1px;
    border-radius: 15px;
    display: grid;
    grid-template-rows: 64px auto 74px;
`;

export const ModalBoxWrapper = styled.div`
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
export const Header = styled.header`
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
  font-weight: 00;
  font-family: 'AirbnbCerealMedium';
`;

export const Close = styled.button`
  border: none !important;
  background: transparent;
  font-family: 'AirbnbCerealMedium';
  font-size: 18px;
  margin-left: 7px;
  &:focus {
    outline: none;
  }
`;

export const ModalRow = styled.button`
  cursor: pointer;
  display: flex !important;
  align-items: center !important;
  font-size: 16px;
  padding: 36px !important;
  border-radius: 8px !important;
  border: none !important;
  background: transparent;
  &:focus {
    outline: none;
  }
`;

export const Footer = styled.div`
  display: flex !important;
  flex: 0 0 auto !important;
  margin: auto;
  padding: 16px 24px !important;
  align-items: center !important;
  justify-content: space-between !important;
  font-size: 16px !important;
  line-height: 20px !important;
  border-top: 1px solid rgb(235, 235, 235);
`;

export const FootButton = styled.button`
  margin: 10px auto;
  color: rgb(34, 34, 34);
  font-size: 16px;
  line-height: 20px;
  font-weight: 800;
  text-decoration:underline;
  background: transparent;
  border: none !important;
  &:focus {
    outline: none;
  }
`;

export const NestedModalRow = styled.span`
  display: flex;
  flex-direction: row;
`;

export const ModalStack = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 64px;
  width: 432px;
  text-align: left;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  margin-bottom: 4px;
`;

export const SnapImage = styled.img`
  object-fit: cover;
  width: 70px;
  height: 70px;
`;

export const AnyTime = styled.div`
  color: rgb(113,113,113) !important;
  font-size: 12px !important;
  line-height: 16px !important;
`;

export const ModalBold = styled.div`
  height: 20px;
  width: 432px;
  font-family: 'AirbnbCerealMedium';
  color: rgb(34,34,34);
  font-size: 16px;
  line-height: 20px;
`;

export const Saved = styled.div`
  height: 18px;
  width: 432px;
  margin-top: 4px;
  font-family: 'AirbnbCerealLight';
  color: rgb(34,34,34);
  font-size: 14px;
  line-height: 18px;
`;
