import React from 'react';
import { shallow } from 'enzyme';
import RightArrow from '../../client/src/components/slider/RightArrowBtn';

describe('Testing RightArrow button  ', () => {
  const RightArrowWrapper = shallow(<RightArrow />);

  it('should render ', () => {
    expect(RightArrowWrapper.exists()).toBe(true);
  });
});
