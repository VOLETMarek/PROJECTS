import PropTypes from 'prop-types';

import './Form.scss';

const Form = ({ handleSubmit, value, setValue }) => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleSubmit();
  };

  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <input
        type="text"
        className="form-item"
        placeholder="Ajouter une tâche"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
    </form>
  );
};

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  // en paramètre la nouvelle valeur
  setValue: PropTypes.func.isRequired,
};

export default Form;
