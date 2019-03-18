import React, {Component} from 'react';

class Player extends Component {
  
 
  
  render() {

    console.log(this.props);
    const {idFirstVideo} = this.props;
    
    return (
      <div id="video" className="video">
                  <iframe width="720" height="405"
                  src={`https://www.youtube.com/embed/${idFirstVideo}`} 
                  frameBorder="0" 
                  allowFullScreen
                  title="qwer">
                  </iframe>
      </div>
    );
  }
}

export default Player;