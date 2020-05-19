import React from 'react';
import { shallow } from 'enzyme';
import MainImage from '../../client/src/components/slider/MainImage';

describe('<MainImage />', () => {
  const data = 'https://legogallery.s3-us-west-1.amazonaws.com/2.jpg';

  it('Component is defined ', () => {
    const wrapper = shallow(<MainImage data={data} />);
    wrapper.setProps({ data });
    expect(wrapper).toBeDefined();
  });
});
