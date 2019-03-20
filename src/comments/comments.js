import React, {Component} from 'react';

export default class Comments extends Component {

  render() {
    
    const {arrComments} = this.props;
    // console.log(arrComments);
    let itemComments = null;
    if(arrComments) {
      itemComments = arrComments.map( (el) => {
        const {idComment, idAuthorChannel, commentBody, authorDisplayName, authorProfileImageUrl, publishedAt} = el;
        return (
          <div key={idComment}>
            <img src={authorProfileImageUrl} alt={authorDisplayName} />
            <p name={idAuthorChannel} >{authorDisplayName}</p>
            <p name="date">{publishedAt}</p>
            <p name="commentBody">{commentBody}</p>
          </div>
        )
    } );
    };
    

    return (
        <div>
          {itemComments}
          Comments!!!
        </div>
    );
  };
};