import React from 'react';
import PropTypes from 'prop-types';
//import './Card.css';

const Card = ({ data }) => {
  const {
    name,
    coatOfArms,
    words,
    titles,
    seats,
    founded,
    ancestralWeapons
  } = data;

  return (
    <div className="card">
      <h1>{name}</h1>
      <h3>{coatOfArms}</h3>
      <h3>{words}</h3>
      <h3>{titles}</h3>
      <h3>{seats}</h3>
      <h3>{founded}</h3>
      <h3>{ancestralWeapons}</h3>
    </div>
  );
};

export default Card;

Card.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    coatOfArms: PropTypes.string.isRequired,
    words: PropTypes.string.isRequired,
    titles: PropTypes.array.isRequired,
    seats: PropTypes.array.isRequired,
    founded: PropTypes.string.isRequired,
    ancestralWeapons: PropTypes.array.isRequired
  })
};
