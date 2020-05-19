import React from 'react';
import { shallow } from 'enzyme';
import Slider from '../../client/src/components/slider/Slider';

import MainImage from '../../client/src/components/slider/MainImage';


describe('Testing RightArrow button  ', () => {
  const wrapper = shallow(<Slider data={[]} />);

  it('should render ', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should render <SideMenu /> and <Slider /> ', () => {
    expect(wrapper.containsMatchingElement(<MainImage />)).toBe(true);
  });
});
