/* eslint-disable import/extensions */
import React from 'react';
import ListingHero from './ListingHero.jsx';
import ListingBody from './ListingBody.jsx';

class Listing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { dummyData } = this.props;
    return (
      <div>
        <ListingHero dummyData={dummyData} />
        <ListingBody dummyData={dummyData} />
      </div>
    );
  }
}

export default Listing;
