/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

export const ListingWrapper = styled.div`
  display: flex;
  height: 100%;
  list-style: none;
  ${'' /* overflow: auto hidden; */}
  padding-right: 20px;
  margin-bottom: 20px;
  margin-top: 0px;
  width: 100%;
  scroll-snap-type: x mandatory;
  ${'' /* transform: translateX(-1500px); */}
  `;

export const ReviewWrap = styled.span`
  display: flex;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 6px;
  `;

export const TypeWrap = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  max-height: 20px;
  overflow: hidden;
  margin-bottom: 2px;
  `;

export const Describe = styled.div`
  width: 265px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const HeroPhotoWrap = styled.div`
  display: inline-flex;
  height: 100%;
  list-style: none;
  overflow: auto hidden;
  padding-left: 0px;
  margin-bottom: 0px;
  margin-top: 0px;
  min-width: 100%;
  object-fit: cover;
`;

export const SuperRow = styled.span`
  display: inline-flex;
  position: absolute;
  overflow: hidden;
  padding: 8px;
  justify-content: space-between;
  width: 257px;
  align-items: baseline;
  object-fit: cover;
`;

export const SuperHost = styled.div`
  position: relative;
  background: white;
  font-weight: 550;
  font-size: 12px;
  border-radius: 5px;
  overflow: auto hidden;
  padding: 5px;
  margin: 5px;
  background-color: rgba(255, 255, 255, 0.95);
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  color: rgb(146, 23, 77);
  font-family: 'AirbnbCerealMedium';
`;

export const Heart = styled.button`
  position: relative;
  font-weight: 550;
  font-size: 18px;
  border-radius: 5px;
  border: none !important;
  ${'' /* overflow: auto hidden;
  padding: 5px;
  margin-left: 5px;
  margin-right: 5px; */}
  background: transparent;
`;

export const Rate = styled.div`
  display: flex;
  margin-top: 4px;
`;

export const Price = styled.div`
  font-family: 'AirbnbCerealMedium' !important;
`;

export const Rev = styled.div`
  color: rgb(116, 116, 116) !important;
`;
