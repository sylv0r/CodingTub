import React from 'react';


class MaComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numVidéo: 5 // le nombre de vidéos à afficher
    };
  }

  render() {
    const videos = [];
    for (let i = 0; i < this.state.numVidéo; i++) {
      videos.push(<div key={i} className="video">Vidéo {i + 1}</div>);
    }
    return (
      <div>
        {videos}
      </div>
    );
  }
}

export default MaComponent; 