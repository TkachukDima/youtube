import React, { Component } from 'react';
import './app.css';
import Player from '../player/player';
import Search from '../search/search';
import VideoList from '../videolist/videolist';
import ServiceApi from '../service/service';
import Comments from '../comments/comments';
import MyLoadingComponent from '../my-loading-component/my-loading-component';

class App extends Component {

  serviceApi = new ServiceApi();
  idMainVideo = "ppOFiX-T_yM";
  state = {
      comments: false,
      videoList: false,
      idMainVideo: "ppOFiX-T_yM",
      infoMainVideo: null,
      titleMainVideo: '',
      channelTitleMainVideo: '',
      imgUrlMainVideo: '',
      publishedAt: ''
  };

  getInfoMainVideo = (id = this.state.idMainVideo) => {
    return this.serviceApi.getInfoMainVideo(id);
  };

  getVideoListInfo = async () => {
    const mainVideo = await this.getInfoMainVideo();
    const comm = await this.getCommentsVideo();
    this.serviceApi.getRelatedVideo(this.state.idMainVideo)
        .then( (res) => {
          this.setState({
            comments: comm,
            infoMainVideo: mainVideo[0],
            videoList: res
          })
        });
   
    
  };

 onPlayThisVideo = async (id) => {
    console.log(id);
    
    const comm = await this.getCommentsVideo(id);
    const mainVideo = await this.getInfoMainVideo(id);
    this.serviceApi.getRelatedVideo(id)
          .then( (res) => {
              
              this.setState({
                comments: comm,
                videoList: res,
                idMainVideo: id,
                infoMainVideo: mainVideo[0]
              })
          })
          // .then( () => this.getCommentsVideo(id) )
  };

  searchVideos = (text) => {
      this.serviceApi.getSearchVideo(text)
            .then( async (res) => {
                const [{id, title, channelTitle, imgUrl, publishedAt}, ...rest] = res;
                const comm = await this.getCommentsVideo(id);
                const mainVideo = await this.getInfoMainVideo(id);
                this.setState(
                  {
                    comments: comm,
                    videoList: rest,
                    idMainVideo: id,
                    infoMainVideo: mainVideo[0],
                    titleMainVideo: title,
                    channelTitleMainVideo: channelTitle,
                    imgUrlMainVideo: imgUrl,
                    publishedAt: publishedAt
                  }
                )


            } )

  }

  getCommentsVideo = (id = this.state.idMainVideo) => {
    return this.serviceApi.getComments(id);
    
  };

  componentDidMount() {
    console.log('Will!')
    this.getInfoMainVideo();
    this.getVideoListInfo();
  }

 

 render() {
    // console.log(this.state);
    

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 header" id="search">
                  <div className="search">
                    <Search searchVideos={this.searchVideos} />
                  </div>
          </div>
        </div>
        <div className="row content">
          <div className="col-md-8" id="col-left">
                { this.state.infoMainVideo?<Player idMainVideo={this.state.idMainVideo} infoMainVideo={this.state.infoMainVideo} /> : <MyLoadingComponent idMainVideo={this.state.idMainVideo} />  }
                
                <Comments arrComments={this.state.comments} />
                <div id ="comments">Comments</div>
          </div>
          <div className="col-md-4" id="col-right">
              <VideoList getVideoList={this.getVideoListInfo}
                         videoList={this.state.videoList}
                         onPlayThisVideo={this.onPlayThisVideo} />
          </div>
        </div>
      
      </div>
  );
  }
}

export default App;
