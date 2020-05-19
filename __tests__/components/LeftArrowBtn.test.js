import React from 'react';
import { shallow } from 'enzyme';
import LeftArrow from '../../client/src/components/slider/LeftArrowBtn';

describe('Testing LeftArrow button  ', () => {
  const LeftArrowWrapper = shallow(<LeftArrow />);

  it('should render ', () => {
    expect(LeftArrowWrapper.exists()).toBe(true);
  });
});
