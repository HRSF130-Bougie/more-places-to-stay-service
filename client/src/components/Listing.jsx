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
    min-width: 706px;
    scroll-snap-type: x mandatory;
    `;

class Listing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { seededData } = this.props;
    return (
      <RowWrapper>
        {
          seededData.map((item, index) => (
            <ListingHero key={index} obj={item} />
          ))
        }
        {/* <ListingBody dummyData={dummyData} /> */}
      </RowWrapper>
    );
  }
}

export default Listing;
