/* eslint-disable */
import { combineReducers, createStore } from 'redux';
import houseDataReducer from './house-data-reducer';
import rootReducer from './root-reducer';

describe('Reducers', () => {
  const rootReducer = combineReducers({ houseDataReducer });
  const mockData = [
    {
      house: 'stark'
    },
    {
      house: 'lannister'
    }
  ];

  let expectedStore;
  let store;

  beforeEach(() => {
    store = createStore(rootReducer);
    expectedStore = {
      houseDataReducer: []
    };
  });

    it('should have a default state equal to an empty array', () => {
      expect(store.getState().houseDataReducer).toEqual(
        houseDataReducer([], {})
      )
    });

    it('houseDataReducer should handle SET_HOUSE_DATA action type and update the store', () => {
      expect(store.getState()).toEqual(expectedStore);

      const houseDataAction = {
        type: 'SET_HOUSE_DATA',
        houseData: mockData
      }

      store.dispatch(houseDataAction)
      expect(store.getState().houseDataReducer).toEqual(houseDataReducer([], houseDataAction))
    
    });
});