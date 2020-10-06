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

export const ModalStyle = styled.div`
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
  font-weight: 800;
`;

export const Close = styled.button`
  border: none !important;
  background: transparent;
  font-family: 'AirbnbCerealMedium';
  font-size: 18px;
  margin-left: 7px;
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
  border-top: 1px solid rgb(235, 235, 235) !important;
  padding: 16px 24px !important;
  align-items: center !important;
  justify-content: space-between !important;
  font-size: 16px !important;
  line-height: 20px !important;
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
`;
