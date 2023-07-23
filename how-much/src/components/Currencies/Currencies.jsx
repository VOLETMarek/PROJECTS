/* eslint-disable react/prefer-stateless-function */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import React from 'react';

import './Currencies.scss';

class Currencies extends React.Component {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    const { searchValue, setSearchValue, currenciesList, handleClick } =
      this.props;

    return (
      <div className="currencies">
        <div className="currencies-title">
          <input
            type="text"
            className="currencies-search"
            placeholder="Rechercher"
            value={searchValue}
            onChange={(event) => {
              setSearchValue(event.target.value);
            }}
          />
        </div>
        <ul>
          {currenciesList.map((item) => (
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
            <li
              className="currency"
              key={item.name}
              onClick={() => {
                handleClick(item.name);
              }}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

Currencies.propTypes = {
  currenciesList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleClick: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired,
};

export default Currencies;
