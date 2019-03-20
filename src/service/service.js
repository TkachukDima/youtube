export default class ServiceApi {
  
  state ={
    query: "хонда і мазда"
  
  } 
  _apiBase = `https://www.googleapis.com/youtube/v3/`;
  apiKey = "AIzaSyAiEW0F1_5qY_4SEzzZgiL3arhqy-JMHxo";
  // apiKey = `AIzaSyB8iK4YxBReDeESrJTijh8XpzvbQY91wzw`;
  urlSearch = `search?part=snippet&key=${this.apiKey}&type=video&order=rating&maxResults=11&q=`;
  urlRelated = `search?part=snippet&key=${this.apiKey}&type=video&maxResults=10&relatedToVideoId=`;
  urlComments = `commentThreads?key=${this.apiKey}&textFormat=plainText&part=snippet&maxResults=10&videoId=`;
  urlInfoMainVideo = `videos?part=snippet,contentDetails,statistics&key=${this.apiKey}&id=`;
 

  async getResourse(url) {
    const res =await fetch(`${this._apiBase}${url}`);
    return await res.json();
  };

  async getArrVideos() {
    const videos = await this.getResourse(this.urlSearch);
    return videos.items;
  };

  async getIdVideos() {
    const videos = await this.getResourse(this.urlSearch);
    const arrVideos = await videos.items;
    return await arrVideos.map( el => el.id.videoId );
  };

  async getSearchVideo(value) {
      const searchVideos = await this.getResourse(`${this.urlSearch}${value}`);
      const arrSearchVideos = await searchVideos.items;
      return this._transformDataVideo(arrSearchVideos); 
  };

  async getVideoListInfo() {
    const videos = await this.getResourse(this.urlSearch);
    const arrVideos = await videos.items;
    return this._transformDataVideo(arrVideos); 
  };

  async getRelatedVideo(id) {
    const videos = await this.getResourse(`${this.urlRelated}${id}`);
    const arrVideos = await videos.items;
    return this._transformDataVideo(arrVideos); 
  };

  async getComments(id) {
    const comments = await this.getResourse(`${this.urlComments}${id}`);
    const arrComments = await comments.items;
    return this._transformDataComments(arrComments); 
  };

  async getInfoMainVideo(id) {
    const jsonInfo = await this.getResourse(`${this.urlInfoMainVideo}${id}`);
    const arrInfoMainVideo = jsonInfo.items;
    return this._transformDataMainVideo(arrInfoMainVideo);
  }

  _transformDataMainVideo = (arr) => {
    return arr.map( (el) => {
      return {
        id: el.id,
        title: el.snippet.title,
        description: el.snippet.description,
        channelTitle: el.snippet.channelTitle,
        imageUrl: el.snippet.thumbnails.default.url,
        channelId: el.snippet.channelId,
        publishedAt: el.snippet.publishedAt,
        viewCount:el.statistics.viewCount,
        likeCount:el.statistics.likeCount,
        dislikeCount:el.statistics.dislikeCount,
        commentCount:el.statistics.commentCount
      };
    });
  };

  _transformDataVideo = (arr) => {
    return arr.map( (el) => {
      return {
        id: el.id.videoId,
        title: el.snippet.title,
        channelTitle: el.snippet.channelTitle,
        imageUrl: el.snippet.thumbnails.default.url,
        channelId: el.snippet.channelId,
        publishedAt: el.snippet.publishedAt
      };
    });
  };

  _transformDataComments = (arr) => {
    return arr.map( (el) => {
      return {
        idComment: el.id,
        idVideo: el.snippet.videoId,
        idAuthorChannel: el.snippet.topLevelComment.snippet.authorChannelId.value,
        commentBody: el.snippet.topLevelComment.snippet.textDisplay,
        authorDisplayName: el.snippet.topLevelComment.snippet.authorDisplayName,
        authorProfileImageUrl: el.snippet.topLevelComment.snippet.authorProfileImageUrl,
        publishedAt: el.snippet.topLevelComment.snippet.publishedAt
      };
    });
  };
  
}

