import React from 'react';

class ListingBody extends React.Component {
  constructor() {
    super();

    this.state = {

    };
    // This Binding Area
  }

  render() {
    const mappedBody = this.props.dummyData.map((obj) =>
      <div>
        <div>
        <span>
          {obj.popularity.stars}
          ({obj.popularity.reviewCount})
        </span>
        </div>
        <span> {obj.type} * {obj.beds} beds </span>
        <div> {obj.description} </div>
        <div> ${obj.rate}/ night </div>
      </div>
    );
    return (
      <div>
        {mappedBody}
      </div>
    );
  }
}

export default ListingBody;
