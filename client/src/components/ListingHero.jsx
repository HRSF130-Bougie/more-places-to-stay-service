/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 265px;
  height: 177px;
  border-radius: 8px;
  margin-bottom: 10px;
  `;

const ImageT = styled.img`
  display: flex;
  height: 100%;
  list-style: none;
  overflow-x: auto;
  overflow-y: hidden;
  padding-left: 0px;
  margin-bottom: 0px;
  margin-top: 0px;
  min-width: 100%;
  -ms-scroll-snap-type: x mandatory;
  scroll-snap-type: x mandatory;
`;

const AirWrapper = styled.div`
    display: flex;
    height: 100%;
    list-style: none;
    // overflow: auto hidden;
    padding: 10px;
    margin-bottom: 20px;
    margin-top: 0px;
    width: 100%;
    scroll-snap-type: x mandatory;
    `;

const Describe = styled.div`
      text-overflow: ellipsis;
    `;


class ListingHero extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

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
      <AirWrapper>
        <div>
          <div onClick={this.handleClick}>
            <Image src={obj.photo} alt="" />
            {/* <div> Superhost: {obj.label.superhost.toString()} </div>
          <div> Plus: {obj.label.plus.toString()} </div>
          <div> Heart: {obj.heart.toString()} </div> */}
            <div>
              <span>
                {obj.popularity.stars}
                ({obj.popularity.reviewCount})
              </span>
            </div>
            <span> {obj.type} • {obj.beds} beds </span>
            <Describe> {obj.description} </Describe>
          </div>
          <div> ${obj.rate}/ night </div>
        </div>
      </AirWrapper>
    );
  }
}

export default ListingHero;

// console.log(this.props);
// const { beds, description } = this.props;
// eslint-disable-next-line react/destructuring-assignment
// const mappedHero = this.props.seededData.map((obj) =>
//   <div>
//     <div onClick={this.handleClick}>
//       <img src={obj.photo} width="265" alt="" height="177" />
//       {/* <div> Superhost: {obj.label.superhost.toString()} </div>
//       <div> Plus: {obj.label.plus.toString()} </div>
//       <div> Heart: {obj.heart.toString()} </div> */}
//       <div>
//         <span>
//           {obj.popularity.stars}
//           ({obj.popularity.reviewCount})
//         </span>
//       </div>
//       <span> {obj.type} * {obj.beds} beds </span>
//       <Describe> {obj.description} </Describe>
//     </div>
//     <div> ${obj.rate}/ night </div>
//   </div>,
// // eslint-disable-next-line function-paren-newline
// );
