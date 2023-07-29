// eslint-disable-file react/no-unescaped-entities

import { Segment } from 'semantic-ui-react';

function Faq() {
  return (
    <Segment>
      <h1>FAQ</h1>
      <h2>A quoi ça sert ?</h2>
      <p>
        Cette application permet de trouver une liste de dépôts GitHub pour un
        critère donné.
      </p>
      <h2>Comment faire une recherche ?</h2>
      <p>
        Sur la page recherche, complétez le champ de recherche et valider la
        recherche.
      </p>
      <h2>Puis-je chercher n'importe quel terme ?</h2>
      <p>Oui, c'est fou, non?</p>
    </Segment>
  );
}

export default Faq;
