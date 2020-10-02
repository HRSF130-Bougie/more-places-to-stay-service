/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const element = <FontAwesomeIcon icon={faStar} />;

const Image = styled.img`
  width: 265px;
  height: 177px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
  `;

  const ListingWrapper = styled.div`
    display: flex;
    height: 100%;
    list-style: none;
    ${'' /* overflow: auto hidden; */}
    padding-right: 20px;
    margin-bottom: 20px;
    margin-top: 0px;
    width: 100%;
    scroll-snap-type: x mandatory;
    ${'' /* transform: translateX(-1500px); */}
    `;

    const ReviewWrap = styled.span`
    font-size: 14px;
    line-height: 18px;
    `;

    const TypeWrap = styled.span`
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    max-height: 20px;
    overflow: hidden;
    `;

    const Describe = styled.div`
      width: 265px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `;

class ListingHero extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      liked: true,
    };
    // This Binding Area
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    alert('Click Functionality: Redirect to another Item Detail Page!');
  }

  render() {
    const {obj} = this.props;

    return (
      <ListingWrapper>
        <div className="entireListing">
          <div className="clickableArea" onClick={this.handleClick}>
            <Image src={obj.photo} alt="" />
            <div>
              <ReviewWrap>
                <FontAwesomeIcon icon={faStar} color="#ff385c" width="6px" height="6px" />&nbsp;
                {obj.popularity.stars}&nbsp;
                ({obj.popularity.reviewCount})
              </ReviewWrap>
            </div>
            <TypeWrap> {obj.type} • {obj.beds} beds </TypeWrap>
            <Describe> {obj.description} </Describe>
          </div>
          <div> ${obj.rate} / night </div>
        </div>
      </ListingWrapper>
    );
  }
}

export default ListingHero;

{/* <div> Superhost: {obj.label.superhost.toString()} </div>
<div> Plus: {obj.label.plus.toString()} </div>
<div> Heart: {obj.heart.toString()} </div> */}

