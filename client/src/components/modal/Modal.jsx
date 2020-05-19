import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import FullScreenBtn from '../slider/FullScreenBtn';
import SideMenu from '../side-menu/SideMenu';
import MainImage from '../slider/MainImage';

const Modal = ({
  imgURL, isOpen, handleToggleScreen, data, handleNextImg, handlePrevImg, handleDisplayImage,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <S.BackgroundContainer>
      <S.SideMenuContainer>
        <SideMenu
          data={data}
          handlePrevImg={handlePrevImg}
          handleNextImg={handleNextImg}
          handleDisplayImage={handleDisplayImage}
        />
      </S.SideMenuContainer>
      <FullScreenBtn handleToggleScreen={handleToggleScreen} />
      <S.ModalContainer>
        <MainImage imgURL={imgURL} />
      </S.ModalContainer>
    </S.BackgroundContainer>
  );
};

const S = {};

S.BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
  justify-content: center;
`;

S.ModalContainer = styled.div`
  background: #fff;
  margin: 50px auto;

  img {
    transition: opacity 0.8s;
    display: block;
    width: 100%;
    height: 600px;
    width: 900px;
    border-radius: 20px;
  }
`;

S.SideMenuContainer = styled.div`
  position : left;
`;

Modal.propTypes = {
  imgURL: PropTypes.string,
  handleToggleScreen: PropTypes.func,
  isOpen: PropTypes.bool,
  data: PropTypes.array,
  handleNextImg: PropTypes.func,
  handlePrevImg: PropTypes.func,
  handleDisplayImage: PropTypes.func,
};

Modal.defaultProps = {
  imgURL: '',
  handleToggleScreen: () => {},
  isOpen: false,
  data: [],
  handleNextImg: () => {},
  handlePrevImg: () => {},
  handleDisplayImage: () => {},
};

export default Modal;
