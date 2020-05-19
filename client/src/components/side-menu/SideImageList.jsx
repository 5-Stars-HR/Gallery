import React, { forwardRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import SideImageItem from './SideImageItem';

const SideImageList = forwardRef((props, ref) => (
  <S.ListContainer ref={ref}>
    {props.data.map((img, i) => (
      <SideImageItem
        img={img.image_url}
        key={img.reference_id}
        id={i}
        handleDisplayImage={props.handleDisplayImage}
      />
    ))}
  </S.ListContainer>
));

const S = {};

S.ListContainer = styled.div`
  position: relative;
  overflow: auto;
`;

SideImageList.propTypes = {
  data: PropTypes.array,
  handleDisplayImage: PropTypes.func,
};
SideImageList.defaultProps = {
  data: [],
  handleDisplayImage: () => {},

};

export default SideImageList;
