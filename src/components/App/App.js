import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { setHouseData } from '../../actions/index';
import { getHouses } from '../helpers/apiCalls';
import wolf from './wolf.gif';
import CardContainer from '../CardContainer/CardContainer';

export class App extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    const { setHouseData } = this.props;

    const fetchHouseData = await getHouses();

    setHouseData(fetchHouseData);
  }

  render() {
    const { houseData } = this.props;
    if (houseData.length < 1) {
      return <img src={wolf} className="wolf-gif" alt="wolf" />;
    } else {
      return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to Westeros</h2>
          </div>
          <div className="Display-info">
            <CardContainer />
          </div>
        </div>
      );
    }
  }
}

App.propTypes = {
  houseData: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        coatOfArms: PropTypes.string.isRequired,
        words: PropTypes.string.isRequired,
        titles: PropTypes.string.isRequired,
        seats: PropTypes.string.isRequired,
        founded: PropTypes.string.isRequired,
        ancestralWeapons: PropTypes.string.isRequired
      })
    )
  ]) 
};

export const mapStateToProps = state => ({
  houseData: state.houseData
});

export const mapDispatchToProps = dispatch => ({
  setHouseData: houseData => dispatch(setHouseData(houseData))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
