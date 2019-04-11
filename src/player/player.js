import React, {Component} from 'react';

import './player.css';
import { connect } from 'react-redux';

class Player extends Component {
 
  transformDate(datePublished) {
    const months = ["January",
                    "February", 
                    "March", 
                    "April", 
                    "May", 
                    "June",
                    "July", 
                    "August", 
                    "September", 
                    "October", 
                    "November", 
                    "December"];
    const publishedDate = new Date(datePublished);
    const year = publishedDate.getFullYear();
    const month = publishedDate.getMonth(); 
    const date = publishedDate.getDate(); 
    const result = `${date} ${months[month]} ${year}`;
    // console.log(result);
    return result;
  }

  render() {

  const {idMainVideo, infoMainVideo} = this.props;
  const {title,
         viewCount,
         likeCount,
         dislikeCount,
         imageUrl,
         channelTitle,
         publishedAt,
         description,
         commentCount} = infoMainVideo;
  
  return (
      <div className="main-player">
          <div id="video" className="video">
                      <iframe 
                      src={`https://www.youtube.com/embed/${idMainVideo}`} 
                      frameBorder="0" 
                      allowFullScreen
                      title="qwer">
                      </iframe>
                      
          </div>
          <div>
            <div className="title">
              <div className="title-video">
                  {title}
              </div>
              <div className="viewCount">
                <div> Views <b> {viewCount} </b> </div>
                <div>
                    Like <b>{likeCount}</b>
                </div>
                <div>
                    Dislike <b>{dislikeCount}</b>
                </div>
              </div>
            </div>
            <div className="video-description">
            
              <img src={imageUrl} alt={channelTitle} />
              <div className="channel-title">{channelTitle}</div>
              <div className="published-at">Published on {this.transformDate(publishedAt)}</div>
              <div className="description">
                {description}
              </div>
             <div className="comment-count">
                Comments: {commentCount} 
              </div>
            </div>
            
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Player);