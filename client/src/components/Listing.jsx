/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import ListingHero from './ListingHero.jsx';
import { RowWrapper, NestedRowWrapper } from './Styled/ListingStyle.jsx';

const Listing = (props) => {
  const { seededData, saved, modal, unHeartListing} = props;

  return (
    <RowWrapper>
      <NestedRowWrapper id="test">
        {
          seededData.map((item, index) => (
            <ListingHero
              key={Math.random()}
              index={index}
              obj={item}
              modal={modal}
              initToggle={seededData[index].heart}
              unHeartListing={unHeartListing}
            />
          ))
        }
      </NestedRowWrapper>
    </RowWrapper>
  );
};

export default Listing;
