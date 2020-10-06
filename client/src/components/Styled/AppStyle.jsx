import React from 'react';
import styled from 'styled-components';

import GlobalFonts from '../../fonts/fonts';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 24px;
  ${'' /* margin-left: 353px; */}
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  font-family: 'AirbnbCerealMedium';
  `;

export const ComponentWrapper = styled.div`
  padding-top: 48px;
  padding-bottom: 48px;
  background-color: #f7f7f7;
`;

export const MainWrapper = styled.div`
  max-width: 1120px;
  height: 100% !important;
  margin-left: auto !important;
  margin-right: auto !important;
  width: 100% !important;
  display: block;
  justify-content: space-between;
`;

export const ButtonWrapper = styled.span`
  display: inline-flex;
  position: relative;
  ${'' /* justify-content: flex-end; */}
`;

export const PageGuide = styled.div`
    color: rgb(34, 34, 34);
    font-family: 'AirbnbCerealLight';
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    margin-right: 16px;
    padding-top: 8px;
`;