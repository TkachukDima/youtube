import React, {Component} from 'react';
import './comments.css';

export default class Comments extends Component {

  render() {
    
    const {arrComments} = this.props;
    // console.log(arrComments);
    let itemComments = null;
    
    if(arrComments.length) {
      itemComments = arrComments.map( (el) => {
        const {idComment, idAuthorChannel, commentBody, authorDisplayName, authorProfileImageUrl, publishedAt} = el;
        return (
          <div key={idComment} className="comment">
            <img src={authorProfileImageUrl} alt={authorDisplayName} />
            <p className="comment-author"
               name={idAuthorChannel} > 
                {authorDisplayName}
                  <span name="date" className="comment-published-at">
                    {publishedAt}
                  </span>
            </p>
            <p name="commentBody" className="comment-body">{commentBody}</p>
          </div>
        )
    } );
    } 

    return (
        <div>
          {itemComments}
        </div>
    );
  };
};