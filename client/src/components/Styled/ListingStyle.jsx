// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';

export const RowWrapper = styled.div`
  display: flex;
  height: 304px;
  list-style: none;
  overflow: auto hidden;
  // padding-left: 40px;
  // padding-right: 40px;
  margin-bottom: 0px;
  margin-top: 0px;
  ${'' /* margin-left: 353px;
  margin-right: 353px; */}
  margin: auto;
  width: 1120px;
  scroll-snap-type: x mandatory;
  ${'' /* transform: translateX(-1000px); */}
  `;

export const NestedRowWrapper = styled.div`
  display: flex;
  height: 304px;
  list-style: none;
  ${'' /* overflow: auto hidden; */}
  // padding-left: 40px;
  // padding-right: 40px;
  margin-bottom: 0px;
  margin-top: 0px;
  width: 100%;
  scroll-snap-type: x mandatory;
  transition: transform 0.75s;
  position: relative;
  &::-webkit-scrollbar { width: 0 !important };
  `;
