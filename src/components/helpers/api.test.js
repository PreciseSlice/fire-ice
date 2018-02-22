import React from 'react';
import { callFetch, getHouses } from './apiCalls';

describe('Api call test', () => {
  let mockFunction = jest.fn()

  window.fetch = jest.fn().mockImplementation(() => ({
    status: 200,
    json: () =>
      new Promise((resolve, reject) => {
        resolve(mockData);
      })
  }))

  it('calls fetchs', () => {

  })

  it('returns the data object if the status is above 200', () => {

  })

  it('throws and error if the data is not fetched', () => {
    
  })

})