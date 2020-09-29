/* eslint-disable import/extensions */
import React from 'react';
import styled from "styled-components";
import ListingHero from './ListingHero.jsx';

// const RowWrapper = styled.div`
//   display: flex;
//   flex-direction: row;
//   background-color: teal;
//   justify-content: space-around;
//   align-items: flex-end;
//  `;

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
      <div>
        <ListingHero seededData={seededData} />
        {/* <ListingBody dummyData={dummyData} /> */}
      </div>
    );
  }
}

export default Listing;
