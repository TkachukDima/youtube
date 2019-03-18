import React, { Component } from 'react';
import './app.css';
import Player from '../player/player';
import Search from '../search/search';
import VideoList from '../videolist/videolist';
import ServiceApi from '../service/service';

class App extends Component {

  serviceApi = new ServiceApi();
  
  state = {
      arrVideoList: [],
      idFirstVideo: "ppOFiX-T_yM"
  };

  getFirstVideos = () => {
    this.serviceApi.getIdVideos()
        .then( (res) => {
          this.setState({
            arrVideoList: res,
            idFirstVideo: res[0]
          })
        });
    
  };
  
 render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 header" id="search">
                  <div className="search">
                    <Search />
                  </div>
          </div>
        </div>
        <div className="row content">
          <div className="col-md-8" id="col-left">
                <Player idFirstVideo ={this.state.idFirstVideo} />
                <div id ="comments">Comments</div>
          </div>
          <div className="col-md-4" id="col-right">
              <VideoList videoList={this.state.arrVideoList} />
          </div>
        </div>

        
      </div>
  );
  }
}

export default App;
