import React, { Component } from 'react';

import './app.css';
import Player from '../player/player';
import Search from '../search/search';
import VideoList from '../videolist/videolist';
import Comments from '../comments/comments';
import NotFound from '../not-found/not-found';
import MyLoadingPlayer from '../my-loading-component/my-loading-player';
import Error from '../error/error';

import { connect } from 'react-redux';
import * as actions from '../store/actions';

class App extends Component {

 componentDidMount() {
    this.props.getVideoListInfo(this.props.idMainVideo);
  }

 render() {
    
    const { loading, searchResult, error } = this.props;
    const loadingSpinner = loading ? < MyLoadingPlayer /> : null ;
    const search = searchResult ? <NotFound /> : null;
    const errorPage = error ? <Error /> : null;

    const player = ( loading || error ) ? null : <Player  /> ;
    const allVideoList = ( loading || error ) ? null : <VideoList  /> ;
    const allComments = ( loading || error ) ? null : <Comments  /> ;


    return (
      <div className="container">
        <div className="content">
              <div className="search">
                      <Search  />
              </div>
              <div className="search-result">
                {search}
              </div>
              <div className="error-block">
                 {errorPage}
              </div>
              <div>
                {loadingSpinner}
              </div>
          <div className="wrapper">
              <div className="mainVideo">
                {player}
              </div>
              <div className="videosList">
                  {allVideoList}
              </div>
              <div className="comments">
                    {allComments}
              </div>
          </div>
        </div>
      </div>
  );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, actions)(App);
