/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';

describe('App', () => {
  let wrapper;
  let mockFunction = jest.fn()

  window.fetch = jest.fn().mockImplementation(() => ({
    status: 200,
    json: () =>
      new Promise((resolve, reject) => {
        resolve(mockData);
      })
  }));

  const mockData = [
    {
      house: 'stark'
    },
    {
      house: 'lannister'
    }
  ];

  beforeEach(() => {
    wrapper = shallow(<App houseData={mockData} setHouseData={mockFunction} />);
  });

  it('exist and matches snapshot', () => {
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  it('maps state to props', () => {

  })

  it('maps dispatch to props', () => {

  })
  
});
