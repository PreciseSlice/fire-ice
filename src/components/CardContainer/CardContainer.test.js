/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import { CardContainer } from './CardContainer';

describe('CardContainer', () => {
  let wrapper;

  const mockData = [
    {
      house: 'stark'
    },
    {
      house: 'lannister'
    }
  ];

  beforeEach(() => {
    wrapper = shallow(<CardContainer houseData={mockData} />);
  });

  it('exist and matches snapshot', () => {
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });
});
