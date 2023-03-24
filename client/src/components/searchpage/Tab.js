import React, { Component } from 'react';

class Tableau extends Component {
  constructor(props) {
    super(props);
    this.state = {
      donnees: [
        { id: 1, nomvod: 'FAQ', chaine : FuzeIII },
        { id: 2, nomvod: 'Call of duty', chaine : Diablox9 },
        { id: 3, nomvod: 'Bob lennon skyrime', chaine : Bob_lennon }
      ]
    };
  }

  renderTableau() {
    return this.state.donnees.map((donnee, index) => {
      const { id, nomvod, chaine } = donnee; // destructuring
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{nomvod}</td>
          <td>{chaine}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <h2>Tableau de données</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>nomvod</th>
              <th>chaine</th>
            </tr>
          </thead>
          <tbody>
            {this.renderTableau()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Tableau;
