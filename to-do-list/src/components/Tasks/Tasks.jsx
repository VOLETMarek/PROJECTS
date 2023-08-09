/* eslint-disable prettier/prettier */
import PropTypes from 'prop-types';

import './Tasks.scss';

import Task from './Task';

const Tasks = ({ tasks }) => (
  <ul className="list">
    {tasks.map((item) => (
      <Task
        key={item.id}
        {...item}
      />
    ))}
  </ul>
);

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Tasks;
