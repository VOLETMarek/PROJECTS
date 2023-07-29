import { Card, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';

// repo retrives one card, reposResult will loop on this comonent to display all cards

const Repo = ({ name, description, owner }) => (
  <Card>
    <Image src={owner.avatar_url} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>{owner.login}</Card.Meta>
      <Card.Description>{description}</Card.Description>
    </Card.Content>
  </Card>
);

Repo.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  owner: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
  }).isRequired,
};

Repo.defaultProps = {
  description: '',
};

export default Repo;
