import PropTypes from 'prop-types';

const Task = ({ id, label, done }) => (
  <li>
    <label
      className={done ? 'list-item list-item--done' : 'list-item'}
      htmlFor={`task-${id}`}
    >
      <input type="checkbox" defaultChecked={done} id={`task-${id}`} />
      {label}
    </label>
  </li>
);

Task.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
};

export default Task;
