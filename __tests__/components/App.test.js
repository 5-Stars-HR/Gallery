import React from 'react';
import { shallow } from 'enzyme';
import axios from 'axios';
import API from '../../client/src/services/index';
import App from '../../client/src/components/App';
import SideMenu from '../../client/src/components/side-menu/SideMenu';
import Slider from '../../client/src/components/slider/Slider';

jest.mock('axios');

describe('Testing App Component', () => {
  it('Component renders without crashing', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.exists()).toBe(true);
  });
});
