import { Message as SemanticMessage } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Message = ({ nb }) => <SemanticMessage>{nb} résultat(s)</SemanticMessage>;

Message.propTypes = {
  nb: PropTypes.number.isRequired,
};

export default Message;
