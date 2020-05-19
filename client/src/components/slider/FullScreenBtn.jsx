import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpandArrowsAlt } from '@fortawesome/free-solid-svg-icons';

const FullScreenBtn = ({ handleToggleScreen }) => (
  <S.Button onClick={handleToggleScreen} name="fullscreen-btn">
    <FontAwesomeIcon icon={faExpandArrowsAlt} size="3x" />
  </S.Button>
);

const S = {};

S.Button = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  color: rgb(169,169,169);
  cursor: pointer;
  border: none;
  background: transparent;
  outline: none;
  box-shadow: none;
`;


FullScreenBtn.propTypes = {
  handleToggleScreen: PropTypes.func,
};
FullScreenBtn.defaultProps = {
  handleToggleScreen: () => {},
};

export default FullScreenBtn;
