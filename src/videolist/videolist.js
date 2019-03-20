import React, {Component} from 'react';

export default class VideoList extends Component {
    
  
  
  render() {

      
      const {getVideoList, videoList, onPlayThisVideo} = this.props;
      
      // console.log(videoList);
      
      let elements = null;
      let button = (
        <div>
          <button onClick={ getVideoList }  >
             Получить список похожих видео
          </button>
        </div>
      );

      if(videoList) {
        elements = videoList.map( (el) => {
          button = null;
          const {id, title, channelTitle, imageUrl} = el;

          return(
            <li id={id} key={id} className="list-group-item"
                onClick={ () => onPlayThisVideo(id) }
                 >
              <img src={imageUrl} alt={title} />
              <p>{title}</p>
              <p>{channelTitle}</p>
            </li>
          );
        } );
    }

      return (
        <div>
                 { button }
            <div>
              <ul className="list-group">
                  {elements}
              </ul>
            </div>
        </div>
      );
  };
}