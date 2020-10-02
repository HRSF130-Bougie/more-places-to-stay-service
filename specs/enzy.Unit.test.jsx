import React from 'react';
import Enzyme from 'enzyme';

// eslint-disable-next-line import/extensions
import App from '../client/src/components/App.jsx';

describe('App Tests', () => {
  it('Unit: has state', () => {
    const wrapper = mount(<App />);

    expect(wrapper).not.toHaveState('liked');
  });
});