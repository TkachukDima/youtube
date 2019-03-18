export default class ServiceApi {
  
  state 
  apiKey = "AIzaSyAiEW0F1_5qY_4SEzzZgiL3arhqy-JMHxo";
  query = "хонда і мазда";
  url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${this.query}&key=${this.apiKey}&type=video&order=rating&maxResults=20`;
  
  async getResourse(url1) {
    const res =await fetch(url1);
    return await res.json();
  }

  async getArrVideos() {
    const videos = await this.getResourse(this.url);
    return videos.items;
  }

  async getIdVideos() {
    const videos = await this.getResourse(this.url);
    const arrVideos = await videos.items;
    return await arrVideos.map( el => el.id.videoId );
  }
  
  
  
}

