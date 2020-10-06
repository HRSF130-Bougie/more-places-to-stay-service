/* eslint-disable react/prop-types */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Modal from './Modal.jsx';
import { ListingWrapper, ReviewWrap, TypeWrap, Describe, HeroPhotoWrap, SuperRow, SuperHost, Heart, Rate, Price, Rev } from './Styled/ListingHeroStyle.jsx';

// Destructure icons to be rendered in this component below
const element = <FontAwesomeIcon icon={faStar, faHeart} />;

// Image styling. Other styling found in ListingHeroStyle
const Image = styled.img`
  width: 265px;
  height: 177px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
  `;

class ListingHero extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };
  }

  render() {
    const { obj, initToggle, modal, index, unHeartListing } = this.props;

    return (
      <ListingWrapper>
        <div className="entireListing">
          <div className="clickableArea">
            <HeroPhotoWrap>
              <Image src={obj.photo} alt="" />
              <SuperRow>
                {obj.label.superhost ? <SuperHost type="submit">SUPERHOST </SuperHost> : <div></div>}
                {initToggle ?
                  <Heart className="likeBtn" onClick={(e) => unHeartListing(e, index)}>
                    <svg viewBox="0 0 32 32" focusable="false" style={{display: 'block', fill: '#ff385c', height: '24px', width: '24px', stroke: 'rgb(255, 255, 255)', overflow: 'visible'}}><path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z" /></svg>
                  </Heart> :
                  <Heart className="likeBtn" onClick={(e) => modal(e, index)}>
                    <svg viewBox="0 0 32 32" focusable="false" style={{display: 'block', fill: 'rgba(0, 0, 0, 0.5)', height: '24px', width: '24px', stroke: 'rgb(255, 255, 255)', overflow: 'visible'}}><path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z" /></svg>
                  </Heart>}
              </SuperRow>
            </HeroPhotoWrap>
            <div>
              <ReviewWrap>
                <FontAwesomeIcon icon={faStar} color="#ff385c" width="6px" height="6px" />&nbsp;
                {obj.popularity.stars}&nbsp;
                <Rev>
                  ({obj.popularity.reviewCount})
                </Rev>
              </ReviewWrap>
            </div>
            <TypeWrap> {obj.type} • {obj.beds} beds </TypeWrap>
            <Describe> {obj.description} </Describe>
          </div>
          <Rate>
            <Price>
              ${obj.rate}
            </Price>&nbsp;
            <div>
              / night
            </div>
          </Rate>
        </div>
      </ListingWrapper>
    );
  }
}

export default ListingHero;
