import React, { Component } from 'react';

import './app.css';
import Player from '../player/player';
import Search from '../search/search';
import VideoList from '../videolist/videolist';
import ServiceApi from '../service/service';
import Comments from '../comments/comments';
import NotFound from '../not-found/not-found';
import MyLoadingPlayer from '../my-loading-component/my-loading-player';
import Error from '../error/error';

import { connect } from 'react-redux';
import * as actions from '../store/actions';

class App extends Component {

  serviceApi = new ServiceApi();

  componentWillMount() {
    this.getVideoListInfo();
  }

  getInfoMainVideo = (id = this.props.idMainVideo) => {
    return this.serviceApi.getInfoMainVideo(id).catch( this.onError );
  };

  getCommentsVideo = (id = this.props.idMainVideo) => {
    return this.serviceApi.getComments(id).catch( this.onError );
  };

  getVideoListInfo = async () => {
    const mainVideo = await this.getInfoMainVideo();
    const comm = await this.getCommentsVideo();
    this.serviceApi.getRelatedVideo(this.props.idMainVideo)
        .then( (res) => {
          const obj = {
              comments: comm,
              infoMainVideo: mainVideo[0],
              videoList: res,
              loading: false,
              searchResult: false
            };
            this.props.loadingFirstPage(obj);
        })
        .catch( this.onError );
  };

  onError = (err) => {
      console.log("ERRRRRRROOOOOOOR", err);
      const errObj = {
        error: true,
        loading: false
      };
      this.props.loadingErrorPage(errObj);
   }

 onPlayThisVideo = async (id) => {
    const comm = await this.getCommentsVideo(id);
    const mainVideo = await this.getInfoMainVideo(id);
    this.serviceApi.getRelatedVideo(id)
          .then( (res) => {
              const obj = {
                comments: comm,
                videoList: res,
                idMainVideo: id,
                infoMainVideo: mainVideo[0],
                loading: false,
                searchResult: false
              };
              this.props.playThisVideo(obj);
          })
          .catch( this.onError );
 };

  searchVideos = (text) => {
      this.serviceApi.getSearchVideo(text)
            .then( async (res) => {
                // console.log(res);
                if(res.length) {
                  const [{id, title, channelTitle, imgUrl, publishedAt}, ...rest] = res;
                  const comm = await this.getCommentsVideo(id);
                  const mainVideo = await this.getInfoMainVideo(id);
                  const obj = {
                        comments: comm,
                        videoList: rest,
                        idMainVideo: id,
                        infoMainVideo: mainVideo[0],
                        titleMainVideo: title,
                        channelTitleMainVideo: channelTitle,
                        imgUrlMainVideo: imgUrl,
                        publishedAt: publishedAt,
                        loading: false,
                        searchResult: false
                      }; 
                      this.props.searchVideoContent(obj);
                } else {
                      this.props.notFoundVideoContent({searchResult: true});
                }
            } )
            .catch( this.onError );
  }

 render() {
    
    const {loading, searchResult, error, idMainVideo, infoMainVideo, videoList, comments } = this.props;
    const loadingSpinner = loading ? < MyLoadingPlayer /> : null ;
    const search = searchResult ? <NotFound /> : null;
    const errorPage = error ? <Error /> : null;

    const player = ( loading || error ) ? null : <Player  idMainVideo={idMainVideo} 
                                                          infoMainVideo={infoMainVideo} /> ;
    
    const allVideoList = ( loading || error ) ? null : <VideoList getVideoList={this.getVideoListInfo} 
                                                                  videoList={videoList}
                                                                  onPlayThisVideo={this.onPlayThisVideo} /> ;
    
    const allComments = ( loading || error ) ? null : <Comments arrComments={comments} /> ;

    return (
      <div className="container">
        <div className="content">
              <div className="search">
                      <Search searchVideos={this.searchVideos} />
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
