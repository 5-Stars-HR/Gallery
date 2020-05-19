import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const TopArrowBtn = ({ handleClickUp }) => (
  <S.Button type="button" onClick={handleClickUp} name="top-btn">
    <FontAwesomeIcon icon={faChevronUp} size="2x" />
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
  margin-bottom: 5px;
  padding-right: 80px;

  &:hover {
    color: rgb(169,169,169);
    background: transparent;
  }
`;

TopArrowBtn.propTypes = {
  handleClickUp: PropTypes.func,
};
TopArrowBtn.defaultProps = {
  handleClickUp: () => {},
};

export default TopArrowBtn;
