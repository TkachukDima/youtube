import React, {Component} from 'react';
import './videolist.css';

export default class VideoList extends Component {
  
  truncate(str, maxlength) {
    return (str.length > maxlength) ? str.slice(0, maxlength - 3) + "..." : str ;
  }

  render() {
    
      const {videoList, onPlayThisVideo} = this.props;
      
      const elements = videoList.map( (el) => {
         
      const {id, title, channelTitle, imageUrl} = el;

      return(
          <li id={id} key={id} className="list-group-item"
              
               >

            <div className="img-video" onClick={ () => onPlayThisVideo(id) }>
              <img src={imageUrl} alt={title} />
            </div>
            <div className="name-video" onClick={ () => onPlayThisVideo(id) }>
              <h3>{this.truncate(title, 55)}</h3>
            </div>
            <div className="name-channel" onClick={ () => onPlayThisVideo(id) }>
              {channelTitle}
            </div>
          </li>
        );
      } );
      
      return (
        <div>
          
            <div>
              <ul className="list-group">
                  {elements}
              </ul>
            </div>
        </div>
      );
  };
}