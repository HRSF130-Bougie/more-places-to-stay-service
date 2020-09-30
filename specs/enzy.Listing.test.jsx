import React from 'react';
import Enzyme from 'enzyme';
// import { shallow } from '../enzyme.config.js';

// eslint-disable-next-line import/extensions
import Listing from '../client/src/components/Listing.jsx';

describe('Listing Tests', () => {
  it('renders list-items', () => {
    const items = ['one', 'two', 'three'];
    const wrapper = shallow(<Listing items={items} />);

    expect(wrapper.find('.list-items')).toBeDefined();
  });
});
