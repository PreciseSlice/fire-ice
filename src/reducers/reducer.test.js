import { combineReducers, createStore } from 'redux';
import houseDataReducer from './house-data-reducer';
import rootReducer from './root-reducer'; 

describe( 'Reducers', () => {
  beforeEach(() => {
    const store = createStore(rootReducer);
    const expectedStore = {
      houseDataReducer: []
    }
  })

  describe( 'rootReducer', () => {
    const mockData = [
      {
        house: 'stark'
      },
      {
        house: 'lannister'
      }
    ]

    it('should have a deafault state equal to an empty array', ()=> {
      
    })
  })

})