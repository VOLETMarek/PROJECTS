import PropTypes from 'prop-types';

import './Counter.scss';

// eslint-disable-next-line prettier/prettier
const Counter = ({ numberIncompleteTasks }) => (
  <p className="counter">{numberIncompleteTasks} tâche(s) en cours</p>
);

Counter.propTypes = {
  numberIncompleteTasks: PropTypes.number.isRequired,
};

export default Counter;
