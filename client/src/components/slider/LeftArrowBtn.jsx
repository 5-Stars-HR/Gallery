import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';

const LeftArrowBtn = ({ handlePrevImg }) => (
  <S.Button onClick={handlePrevImg} name="left-btn">
    <FontAwesomeIcon icon={faChevronCircleLeft} size="2x" />
  </S.Button>
);

const S = {};

S.Button = styled.button`
  position: absolute;
  top: 50%;
  left: 20px;
  font-size: 18px;
  color: rgb(91, 88, 88);
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
  box-shadow: none;

  -webkit-transition: .5s ease-in-out;
  -moz-transition: .5s ease-in-out;
  -o-transition: .5s ease-in-out;
  transition: .5s ease-in-out;

  &:hover {
    color: rgb(169,169,169);
    background: transparent;
  }
`;

LeftArrowBtn.propTypes = {
  handlePrevImg: PropTypes.func,
};
LeftArrowBtn.defaultProps = {
  handlePrevImg: () => {},
};


export default LeftArrowBtn;
