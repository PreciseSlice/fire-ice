import * as actions from './index';
import { createStore } from 'redux';
import rootReducer from '../reducers/root-reducer';

describe('actions', () => {
  const houseData = [
    {
      house: 'stark'
    },
    {
      house: 'lannister'
    }
  ];

  it('should reurn a type of SET_HOUSE_DATA with the housData payload', () => {
    const expected = {
      type: 'SET_HOUSE_DATA',
      houseData
    };
    expect(actions.setHouseData(houseData)).toEqual(expected);
  });
});
