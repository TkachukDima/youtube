import React, {Component} from 'react';
import './comments.css';
import { connect } from 'react-redux';

 class Comments extends Component {

  formatDate(date) {
    let different = (new Date() - new Date(date))/1000 ;
    if(different < 3600) return Math.floor(different/60) + ' minutes ago';
    if(different < 24*3600) return Math.floor(different/(60*60)) + ' hours ago';
    if(different < 30*24*3600) return Math.floor(different/(24*60*60)) + ' days ago';
    if(different < 12*30*24*3600) return Math.floor(different/(30*24*60*60)) + ' months ago';

    return 'more than a year ago';
  }

  render() {
    
    const {comments} = this.props;
    // console.log(arrComments);
    let itemComments = null;
    
    if(comments.length) {
      itemComments = comments.map( (el) => {
        const {idComment, idAuthorChannel, commentBody, authorDisplayName, authorProfileImageUrl, publishedAt} = el;
        return (
          <div key={idComment} className="comment">
            <img src={authorProfileImageUrl} alt={authorDisplayName} />
            <p className="comment-author"
               name={idAuthorChannel} > 
                {authorDisplayName}
                  <span name="date" className="comment-published-at">
                    {this.formatDate(publishedAt)}
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

const mapStateToProps = (state) => ({
  comments : state.comments
});

export default connect(mapStateToProps)(Comments);