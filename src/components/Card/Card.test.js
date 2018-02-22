import React from 'react';
import { shallow } from 'enzyme';
import { Card } from './Card';

describe('Card', () => {
  let wrapper;

  const mockData = {
    item: 'string'
  };

  beforeEach(() => {
    wrapper = shallow(<Card data={mockData} />);
  });

  it('exist and matches snapshot', () => {
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });
});
