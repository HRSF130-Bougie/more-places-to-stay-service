/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
import styled from "styled-components";

class ListingHero extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
    // This Binding Area
  }

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

    const ListingWrapper = styled.div`
    display: flex;
    flex-direction: row;
    background-color: teal;
    justify-content: left;
    align-items: flex-end;
   `;
    console.log(this.props);
    // const { beds, description } = this.props;
    // eslint-disable-next-line react/destructuring-assignment
    const mappedHero = this.props.seededData.map((obj) =>
      <div>
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
        <div> {obj.description} </div>
        <div> ${obj.rate}/ night </div>
      </div>,
    // eslint-disable-next-line function-paren-newline
    );
    return (
      <ListingWrapper>
        {mappedHero}
      </ListingWrapper>
    );
  }
}

export default ListingHero;
