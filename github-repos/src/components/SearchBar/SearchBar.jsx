import { Input, Form, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const SearchBar = ({ value, setValue, handleSubmit }) => (
  <Segment>
    <Form
      onSubmit={() => {
        handleSubmit();
      }}
    >
      <Form.Field>
        <Input
          icon="search"
          iconPosition="left"
          placeholder="Search..."
          value={value}
          onChange={(event) => {
            const newValue = event.target.value;
            setValue(newValue);
          }}
        />
      </Form.Field>
    </Form>
  </Segment>
);

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
