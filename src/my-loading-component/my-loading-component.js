import React from 'react';

export default function MyLoadingComponent(props) {
  return (
    <div id="video" className="video">
                      <iframe width="720" height="405"
                      src={`https://www.youtube.com/embed/${props.idMainVideo}`} 
                      frameBorder="0" 
                      allowFullScreen
                      title="qwer">
                      </iframe>
          </div>
  )
}