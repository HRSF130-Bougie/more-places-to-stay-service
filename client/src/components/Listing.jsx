/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import ListingHero from './ListingHero.jsx';

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: teal;
  justify-content: left;
  overflow: auto hidden !important;
  scroll-snap-type: x mantadory !important;
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
        <ListingHero seededData={seededData} />
        {/* <ListingBody dummyData={dummyData} /> */}
      </RowWrapper>
    );
  }
}

export default Listing;
