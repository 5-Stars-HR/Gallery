import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import TopArrowBtn from './TopArrowBtn';
import BottomArrowBtn from './BottomArrowBtn';
import SideImageList from './SideImageList';

export default class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cordinatesY: 0,
    };

    this.imgRef = React.createRef();
    this.handleClickUp = this.handleClickUp.bind(this);
    this.handleClickDown = this.handleClickDown.bind(this);
  }

  handleClickUp() {
    const { cordinatesY } = this.state;
    const updatedCordinates = cordinatesY === 0 ? cordinatesY : cordinatesY - 100;

    this.imgRef.current.scroll({
      top: cordinatesY,
      behavior: 'smooth',
    });

    this.setState({ cordinatesY: updatedCordinates });
  }

  handleClickDown() {
    const { cordinatesY } = this.state;
    const updatedCordinates = undefined ? cordinatesY : cordinatesY + 100;

    this.imgRef.current.scroll({
      top: cordinatesY,
      behavior: 'smooth',
    });

    this.setState({ cordinatesY: updatedCordinates });
  }

  render() {
    const { data, handleDisplayImage } = this.props;
    return (
      <S.ImageContent>
        <S.ImagesItems>
          <TopArrowBtn handleClickUp={this.handleClickUp} />
          <SideImageList data={data} ref={this.imgRef} handleDisplayImage={handleDisplayImage} />
          <BottomArrowBtn handleClickDown={this.handleClickDown} />
        </S.ImagesItems>
      </S.ImageContent>
    );
  }
}

const S = {};

S.ImageContent = styled.div`
  grid-column: 1/2;
  grid-row: 1/2;
  margin: 25px 30px;
`;

S.ImagesItems = styled.div`
  display: flex;
  flex-direction: column;
  height: 600px;
`;

SideMenu.propTypes = {
  data: PropTypes.array,
  handleDisplayImage: PropTypes.func,
};
SideMenu.defaultProps = {
  data: [],
  handleDisplayImage: () => {},
};

