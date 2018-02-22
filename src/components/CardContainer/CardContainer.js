import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from '../Card/Card';
//import './CardContainer.css';

export const CardContainer = ({ houseData }) => {
  if (houseData) {
    const cards = houseData.map(house => {
      return <Card data={house} key={house.name} />;
    });

    return <div className="card-container">{cards}</div>;
  } else {
    return null;
  }
};

export const mapStateToProps = state => ({
  houseData: state.houseData
});

export default connect(mapStateToProps, null)(CardContainer);

CardContainer.propTypes = {
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
