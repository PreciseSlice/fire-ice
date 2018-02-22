/* eslint-disable */
import React from 'react';
import { callFetch, getHouses } from './apiCalls';

describe('Api call test', () => {
  let mockFunction = jest.fn();

  const mockData = [
    {
      house: 'stark'
    },
    {
      house: 'lannister'
    }
  ];

  window.fetch = jest.fn().mockImplementation(() => ({
    status: 200,
    json: () =>
      new Promise((resolve, reject) => {
        resolve(mockData);
      })
  }));

  it('calls fetchs', () => {
    const expectedParams = 'http://localhost:3001/api/v1/houses'
    window.fetch = jest.fn().mockImplementation(() => ({
      status: 200,
      json: () =>
        new Promise((resolve, reject) => {
          resolve(mockData);
        })
    }));

    callFetch(expectedParams)
    expect(window.fetch).toHaveBeenCalledWith(expectedParams)
  });

  it('returns the data object if the status is above 200', () => {
    const url = 'http://localhost:3001/api/v1/houses'

    expect(callFetch(url)).resolves.toEqual(mockData)
  });

  it('throws and error if the data is not fetched', () => {
    window.fetch = jest.fn().mockImplementation(() => ({
      status: 500,
      json: () =>
        new Promise((resolve, reject) => {
          reject();
        })
    }));
    
  });
});
