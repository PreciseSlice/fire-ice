import React, { Component } from 'react';
import PropTypes from 'prop-types'
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { setHouseData } from '../../actions/index';
import { getHouses } from '../helpers/apiCalls';


export class App extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    const { setHouseData } = this.props;

    const houseData = await getHouses()
    console.log(await getHouses());
    
    setHouseData(houseData)
  }

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
          <button onClick={() => {
            this.props.fakeAction();
            alert(this.props.fake);
          }}> FAKE ACTION</button>
        </div>
        <div className='Display-info'>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  //fake: PropTypes.shape({ fake: PropTypes.string }),
  //fakeAction: PropTypes.func.isRequired
};

export const mapStateToProps = state => ({
   houseData: state.houseData 
});


const mapDispatchToProps = dispatch => ({
    setHouseData: houseData => {
      dispatch(setHouseData(houseData))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
