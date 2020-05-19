import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const BottomArrowBtn = ({ handleClickDown }) => (
  <S.Button type="button" onClick={handleClickDown} name="bottom-btn">
    <FontAwesomeIcon icon={faChevronDown} size="2x" />
  </S.Button>
);

const S = {};

S.Button = styled.button`
  color: rgb(91, 88, 88);
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
  box-shadow: none;
  position:relative;
  margin-top: 10px;
  padding-right: 80px;

  &:hover {
    color: rgb(169,169,169);
    background: transparent;
  }
`;

BottomArrowBtn.propTypes = {
  handleClickDown: PropTypes.func,
};
BottomArrowBtn.defaultProps = {
  handleClickDown: () => {},
};

export default BottomArrowBtn;
