/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable implicit-arrow-linebreak */
import React from 'react';

class ListingHero extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
    // This Binding Area
  }

  render() {
    console.log(this.props);
    // const { beds, description } = this.props;
    // eslint-disable-next-line react/destructuring-assignment
    const mappedHero = this.props.dummyData.map((obj) =>
      <div>
        <img src={obj.photo} width="250" alt="" height="325" />
        {/* <div> ${obj.heart} </div> */}
        {/* <div> {obj.label.superhost} </div> */}
        <div>
        <span>
          {obj.popularity.stars}
          ({obj.popularity.reviewCount})
        </span>
        </div>
        <span> {obj.type} * {obj.beds} beds </span>
        <div> {obj.description} </div>
        <div> ${obj.rate}/ night </div>
      </div>,
    // eslint-disable-next-line function-paren-newline
    );
    return (
      <div>
        {mappedHero}
      </div>
    );
  }
}

export default ListingHero;
