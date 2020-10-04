/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import ListingHero from './ListingHero.jsx';

const RowWrapper = styled.div`
    display: flex;
    height: 304px;
    list-style: none;
    overflow: auto hidden;
    // padding-left: 40px;
    // padding-right: 40px;
    margin-bottom: 0px;
    margin-top: 0px;
    margin-left: 353px;
    margin-right: 353px;
    width: 1120px;
    scroll-snap-type: x mandatory;
    ${'' /* transform: translateX(-1000px); */}
    `;

const NestedRowWrapper = styled.div`
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

class Listing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    // eslint-disable-next-line react/prop-types
    // console.log(this.props);
    const { seededData, saved} = this.props;
    return (
      <RowWrapper>
      <NestedRowWrapper id="test">
        {
          seededData.map((item, index) => (
            <ListingHero key={index} obj={item} />
          ))
        }
        </NestedRowWrapper>
      </RowWrapper>
    );
  }
}

export default Listing;
