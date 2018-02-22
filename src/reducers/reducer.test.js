import { combineReducers, createStore } from 'redux';
import houseDataReducer from './house-data-reducer';
import rootReducer from './root-reducer';

describe('Reducers', () => {
  describe('rootReducer', () => {
    const mockData = [
      {
        house: 'stark'
      },
      {
        house: 'lannister'
      }
    ];
    const store = createStore(rootReducer);
    const expectedStore = {
      houseData: []
    };

    it('should have a default state equal to an empty array', () => {
      expect(store.getState()).toEqual(expectedStore);
    });

    it('houseDataReducer should handle SET_HOUSE_DATA action type and update the stroe', () => {
      expect(store.getState()).toEqual(expectedStore);

      const houseData = {
        type: 'SET_HOUSE_DATA',
        houseData: mockData
      };

      expect(store.getState().houseDataReducer).toEqual(
        houseDataReducer([], action.houseData)
      );
    });
  });
});
