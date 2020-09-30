/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
import styled from 'styled-components';

class ListingHero extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
    // This Binding Area
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    alert('Listing Body Clicked!');
  };

  render() {
    const Image = styled.img`
     display: block !important;
     height: 100% !important;
     left: 0px !important;
     position: absolute !important;
     top: 0px !important;
     width: 100% !important;
     border-radius: 12px !important;
     `;

    const AirWrapper = styled.div`
    display: flex !important;
    height: 100% !important;
    list-style: none !important;
    overflow: auto hidden !important;
    padding-left: 0px !important;
    margin-bottom: 0px !important;
    margin-top: 0px !important;
    min-width: 100% !important;
    scroll-snap-type: x mandatory !important;
    `;

    const Describe = styled.div`
      text-overflow: ellipses !important;
    `;


    // console.log(this.props);
    // const { beds, description } = this.props;
    // eslint-disable-next-line react/destructuring-assignment
    const mappedHero = this.props.seededData.map((obj) =>
      <div>
        <div onClick={this.handleClick}>
          <img src={obj.photo} width="250" alt="" height="325" />
          <div> Superhost: {obj.label.superhost.toString()} </div>
          <div> Plus: {obj.label.plus.toString()} </div>
          <div> Heart: {obj.heart.toString()} </div>
          <div>
            <span>
              {obj.popularity.stars}
              ({obj.popularity.reviewCount})
            </span>
          </div>
          <span> {obj.type} * {obj.beds} beds </span>
          <Describe> {obj.description} </Describe>
        </div>
        <div> ${obj.rate}/ night </div>
      </div>,
    // eslint-disable-next-line function-paren-newline
    );
    return (
      <AirWrapper>
        {mappedHero}
      </AirWrapper>
    );
  }
}

export default ListingHero;
